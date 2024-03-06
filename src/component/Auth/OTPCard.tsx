import { useEffect, useState } from "react"
import Cancel from "../../assets/cancel.svg"
import axios from "../../lib/axios"
import { store } from "../../store"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


const OTPCard = (email: any) => {

  const navigate = useNavigate()

  const   { email: userEmail }  =  email 
  const [OTPCODE, setOTP] = useState("")
  const [error, setError] = useState(false)
  const [seconds, setSeconds] = useState(120);

  const [errMsg, setErrMsg] = useState<string>('Your OTP code is incorrect, Please enter the correct code')
  const { setShowOTP } = store()

  const [cookies, setCookie, removCookie] = useCookies(["user", "token", 'isLogged']);


  useEffect(()=>{
    setError(false)
}, [OTPCODE])

  const login = async () => {

    if(OTPCODE === ""){
      setError(true)
    } 
    try {
      const res = await axios.post(
        'auth/validate',
        { email: userEmail, OTPCODE },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      // Write a conditional statement for if successful and if failed 
      const response = res?.data 
        setShowOTP(false)
        setCookie("token", response.token);
        setCookie("user", response.user);
        setCookie("isLogged", true);


    } catch (err: any) {
      // If response is false or error, maybe time out or wrong otp entired
      // send another otp should be active
      setError(true)
      if (OTPCODE === "") {
        setErrMsg('Please enter the OTP code')
      } else if (err.response?.data.error.message === 'Invalid OTP') {
        setErrMsg('Your OTP code is incorrect, Please enter the correct code')
      }  else if (err.response?.data.error.message === "Token expired") {
        setErrMsg('Token has expired, Request another OTP Code')
      } else{
        setErrMsg("Server Not Responding")
      }
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
  }

  }, [seconds]);

  const formatTime = (time:number) => {
    return time < 10 ? `${time}` : time;
  };

  const resend =  () => {
      // Send OTP logic here
      setSeconds(120)
      axios.post(
          'auth/resendOTP',
          { email : userEmail },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        // Write a conditional statement for if successful and if failed 
      } 
  


  // Close without verifying
  const close = ()=>{
    setShowOTP(false)
    navigate('/')
  }


return (
  <div className='w-[100vw] h-[100vh] flex items-center justify-center bg-overlay fixed top-0 left-0 z-20'>
    <div className="w-[90%] max-w-[499px] flex flex-col gap-6 p-6 rounded-[12px] bg-white border-[rgb(232,232,234)] border">
      <img src={Cancel} alt="" className="p-[6px] bg-[#F2F1E8] hover:bg-[#CCC8A4] ml-0 w-6 h-6" onClick={close} />
      <p className="text-center text-20 font-bold tablet:text-24">Enter the OTP we sent to {userEmail}</p>

      <div className="text-left flex flex-col">
        <label htmlFor="email" className="text-16 font-medium mb-2 flex justify-between items-end">
          <span>Enter OTP code</span> 
        <p className='border rounded-full w-10 h-10 flex items-center justify-center'>{`${formatTime(seconds)}`}</p></label>
        <input type="text" name="email"
          placeholder="575772" className={`bg-white mb-4 border h-12 px-4 `} value={OTPCODE} onChange={(e) => setOTP(e.target.value)} />
        {error ? 
        <p className="mt-[-8px] text-[#E03C00] text-[10px]">{errMsg}</p> :
         <p className="mt-[-8px] text-[#0A0A0A] text-[10px]">Please check your inbox and spam box to fnd OTP code</p>}
      </div>

        <button
        onClick={login}
        className="bg-[#21AB68] cursor-pointer border-[#21AB68]  hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink inline-flex items-center justify-center py-3 px-6 text-[#ffffff] text-sm leading-5 font-medium focus:outline-none ">
        Signup your account </button>
       
        <button disabled={seconds !== 0 ? true : false }
        onClick={resend}
        className={`text-[#0A0A0A]  ${seconds !== 0 ? 'bg-[#D2D2CF] cursor-pointer' : 'bg-white cursor-pointer'} border border-[#D2D2CF] hover:bg-[#D2D2CF] shadow-navbarLink inline-flex items-center justify-center py-3 px-6 text-sm leading-5 font-semibold focus:outline-none `}>
        Resend OTP code</button>
    </div>
  </div>
)
}

export default OTPCard