import { useEffect, useState } from "react"
import Arrow from "../../assets/back.svg";
import axios from "../../lib/axios"
import { store } from "../../store"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


const LoginCard = ({ getEmail}) => {

  const [email, setEmail] = useState("")
const {setIsLoggedin, setLoginWithCard,setShowLogin, setShowData, link} = store()

const [cookies, setCookie, removeCookie] = useCookies(["user", "token"]);
const navigate = useNavigate()

const [error, setError] = useState(false)

const emailRegex =
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

useEffect(()=>{
    setError(false)
}, [email])

const login = async ()=>{
  if(email === ""){
    setError(true)
  } 
  else if(!emailRegex.test(email)) {
    setError(true)
  } 
  else if(emailRegex.test(email))
  {
  try {
    setError(false)
   const res = await axios.post(
      'auth/login',
      {email: email},
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    setLoginWithCard(false)
  setCookie("token", res?.data.token);
  setCookie("isLogged", true);
  setCookie("user", res?.data.user);
  setIsLoggedin(true)
  navigate(link)
  } catch (err) {
    if (err.response?.data.error.title === "ERROR") {
    setShowData(true)
    setLoginWithCard(false)
      getEmail(email)
    } else {
      throw new Error ("Server Not Responding");
    }
  }}
  else{
    setError(false)
  }
}

const backToLogin = () => {
  setLoginWithCard(false)
  setShowLogin(true)
}
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center bg-overlay fixed top-0 left-0 z-20'>
      <div className="w-[90%] max-w-[499px] flex flex-col gap-6 p-6 rounded-[12px] bg-white border-[rgb(232,232,234)] border">
        <img src={Arrow} alt="" className="p-[6px] bg-[#F2F1E8] hover:bg-[#CCC8A4] ml-0 w-6 h-6" onClick={backToLogin}/>
        <p className="text-center text-20 font-bold tablet:text-24">Login to start viewing pitch decks from top companies</p>

        <div className="text-left flex flex-col">
          <label htmlFor="email" className="text-16 font-medium mb-2">Email address</label>
          <input type="text" name="email"
           placeholder="Enter your email address" className={`bg-white mb-4 border h-12 px-4  ${error ? 'border-[#E03C00]' : 'border-[#BBBBB9]'}`} value={email} onChange={(e) => setEmail(e.target.value)} />
          {error && <p className="mt-[-8px] text-[#E03C00] text-[10px]">Check your email</p>}
        </div>
        <p
        onClick={login}
          className="bg-[#21AB68] border-[#21AB68]  hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink inline-flex items-center justify-center py-3 px-6 text-[#ffffff] text-sm leading-5 font-medium focus:outline-none ">
          Login</p>
      </div>
    </div>
  )
}

export default LoginCard