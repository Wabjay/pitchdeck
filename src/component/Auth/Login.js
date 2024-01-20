import { useState } from "react"
import Cancel from "../../assets/cancel.svg"
import axios from "../../lib/axios"
import { store } from "../../store"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import GoogleLogins from "./Google";


const Login = () => {
  const navigate = useNavigate()

const {setShowLogin, setLoginWithCard} = store()

 const loginWithEmail = () =>{
  setLoginWithCard(true)
  setShowLogin(false)
 }

 const close = ()=>{
  setShowLogin(false)
  navigate('/')
}
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center bg-overlay fixed top-0 left-0 z-20'>
      <div className="w-[90%] max-w-[499px] flex flex-col gap-6 p-6 rounded-[12px] bg-white border-[rgb(232,232,234)] border">
        <img src={Cancel} alt="" className="mr-0 ml-auto w-6 h-6" onClick={close}/>
        <p className="text-20 text-center font-bold tablet:text-24">Login to start viewing pitch decks from top companies</p>

        <GoogleLogins />

        <p
        onClick={loginWithEmail}
          className="text-[#0A0A0A] bg-white border border-[#D2D2CF] hover:bg-[#F9F9F9] shadow-navbarLink inline-flex items-center justify-center py-3 px-6 text-sm leading-5 font-semibold focus:outline-none ">
          Continue with Email</p>
          
      </div>
    </div>
  )
}

export default Login