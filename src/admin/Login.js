import React,  { useEffect }  from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase-config";
// import { signInWithPopup } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';


function Login() {
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      console.log("loading")
      return;
    }
    else if (user) navigate("/blog")
  }, [user, loading, navigate]);
  

  return (
    <div className="loginPage">
      <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
    </div>
  );
}

export default Login;
