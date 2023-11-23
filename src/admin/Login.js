import React,  { useEffect }  from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase-config";
// import { signInWithPopup } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import Google from "../assets/google.svg";


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
    <div className="loginPage h-[100vh] flex justify-center items-center">
      {/* <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button> */}

        <button onClick={signInWithGoogle}
        className="relative overflow-hidden w-full max-w-[350px] h-12 flex justify-center items-center text-center text-grey-900 text-[16px] font-medium leading-[22px] rounded-[8px] border-[1px] border-yellow-400 bg-yellow-400"
      >
        <div id="signInDiv" className="w-full h-full absolute right-0 left-[6%] opacity-[0.01]"></div>
        <img src={Google} alt="" className="h-[18px] w-[18px] mr-1" />
        Continue with Google
      </button>

        
    </div>
  );
}

export default Login;
