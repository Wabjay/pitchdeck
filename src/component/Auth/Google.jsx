import {  useEffect } from "react";
import Google from "../../assets/google_logo.svg";
import { jwtDecode } from "jwt-decode";
import { store } from "../../store";
import { useCookies } from "react-cookie";
import axios from "../../lib/axios";

const GoogleLogins = () => {

  const {setIsLoading, setIsLoggedin,  setShowData,link,  setShowLogin  } = store()

  const [cookies, setCookie, removeCookie] = useCookies(["user", "token", "isLogged"]);


  const signIn = async (response) => {
    setIsLoading(true)
    setShowLogin(false)
    let user = jwtDecode(response.credential);
    // console.log(user)
    const payload = {
      "googleId": user.sub,
      "email": user.email,
      "firstName": user.given_name,
      "lastName": user.family_name,
      "userName": "@" + user.given_name    }
    try {
      const res = await axios.post(
        "auth/login", {googleId: user.sub, email: user.email},
        {
          headers: { "Content-Type": "application/json" },
        }
      );   
      setCookie("token", res?.data.token);
      setCookie("isLogged", true);
      setCookie("user", res?.data.user);
      setIsLoggedin(true)
      setShowLogin(false)
console.log(res?.data.user)
    } catch (err) {
       if (err.response?.status === 401) {
        // setErrMsg("Unauthorized");
        console.log("Unauthorized");
        setShowLogin(true)

      } 
      else if (err.response?.status === 404) {
        try {
          const res = await axios.post(
            "auth/register", payload,
            {
              headers: { "Content-Type": "application/json" },
            }
          );
          setIsLoading(false)
          setShowData(false)
          setShowLogin(false)
          setCookie("token", res?.data.token);
          setCookie("user", res?.data.user);
          setCookie("isLogged", true);
          setIsLoggedin(true)
        } catch (err) {
      
            setIsLoading(false)
    
        }
      }
  //  else {
  //       console.log("Login Failed");
  //       // setErrMsg("Login Failed");
  //     }
    // setLoading(false)
    // setTimeout(() => {setErrMsg("")}, 2000);
    }
    setIsLoading(false)

    }
  



  useEffect(()=> {
  /* global google */
 const login = async()=> {
  await
   google.accounts.id.initialize({ 
    client_id: process.env.REACT_APP_GOOGLE_ID,
    callback: signIn
  });
  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {theme: "outline", size: "large", width: 400 }
  );
  // google.accounts.id.prompt();
  }
login()
  },[])

 
  return (
<button
      className="relative overflow-hidden h-12 flex bg-[#21AB68] border-[#21AB68] hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink items-center justify-center py-3 px-6 text-[#ffffff] text-sm leading-5 font-medium focus:outline-none"
    >
<div id="signInDiv" className="w-full h-full absolute right-0 left-[6%] opacity-[0.01]"></div>
      <img src={Google} alt="Google Logo" className="pr-1 w-[18px] h-[18px]" />
      Continue with Google
    </button>
     
     
  );
};

export default GoogleLogins;
