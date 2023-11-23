// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, } from "firebase/auth"
import { getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore"
import {getStorage} from 'firebase/storage';




// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain:  process.env.REACT_APP_AUTH_DOMAIN,
//   projectId:  process.env.REACT_APP_PROJECT_ID,
//   storageBucket:  process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId:  process.env.REACT_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDU28sfqPfCGUuU3NXemz-DWKHkVS42J-k",
  authDomain: "pptdesigner-9ccaf.firebaseapp.com",
  projectId: "pptdesigner-9ccaf",
  storageBucket: "pptdesigner-9ccaf.appspot.com",
  messagingSenderId: "519267137891",
  appId: "1:519267137891:web:a2053706e1f9cde1737b56",
  measurementId: "G-DM4R26DTHT"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();


// Sign in with Gmail
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


// Sign in with email and Password\

const logInWithEmail = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


// Register with email and Password
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


// Reset Password
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

// export default Firebase

export {
  signInWithGoogle,  logInWithEmail,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};