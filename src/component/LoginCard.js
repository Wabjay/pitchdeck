import { useState } from "react"
import Cancel from "../assets/cancel.svg"
import axios from "../lib/axios"
import { store } from "../store"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


const LoginCard = ({ getEmail}) => {

  const [email, setEmail] = useState("")
const {setIsLoggedin, setShowLogin, setShowData, link} = store()

const [cookies, setCookie, removeCookie] = useCookies(["user", "token"]);
const navigate = useNavigate()
 


const login = async ()=>{
  try {
   const res = await axios.post(
      'auth/login',
      {email: email},
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    setShowLogin(false)
   
  setCookie("token", res?.data.token);
  setCookie("isLogged", true);
  setCookie("user", res?.data.user);
  setIsLoggedin(true)
  navigate(link)
  } catch (err) {
    if (err.response?.data.error.title === "ERROR") {
    setShowData(true)
      setShowLogin(false)
      getEmail(email)
    } else {
      throw new Error ("Server Not Responding");
    }
  }
}
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center bg-overlay fixed top-0 left-0 z-20'>
      <div className="w-[90%] max-w-[499px] flex flex-col p-6 rounded-[12px] bg-white border-[rgb(232,232,234)] border">
        <img src={Cancel} alt="" className="mb-4 mr-0 ml-auto w-6 h-6" onClick={()=> setShowLogin(false)}/>
        <p className="text-20 font-bold tablet:text-24 mb-6">Login to start viewing pitch decks from top companies</p>

        <div className="text-left flex flex-col">
          <label for="email" className="text-16 font-medium mb-2">Email address</label>
          <input type="text" name="email"
           placeholder="Enter your email address" className="bg-white mb-10 border-[#BBBBB9] border h-12 px-4" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <p
        onClick={login}
          className="bg-[#21AB68] border-[#21AB68] shadow-navbarLink inline-flex items-center justify-center py-3 px-6 text-[#ffffff] text-sm leading-5 font-medium focus:outline-none ">
          Login</p>
      </div>
    </div>
  )
}

export default LoginCard