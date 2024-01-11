import { HashLink } from 'react-router-hash-link';
import Google from '../assets/google_logo.svg'
import LoginCard from '../component/LoginCard';
import { useState } from 'react';
import DataCard from '../component/DataCard';
import { store } from '../store';

const Hero = () => {

const [email, setEmail] = useState('')

const { isLogged, showLogin, setShowLogin, showData } = store()

      const getEmail =(res)=>{
        setEmail(res)
        }

  return (
    <div className='bg-[#F2F1E8] '>
       <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 text-center py-[40px] '>
      <div className='w-full max-w-[931px] mx-auto'>
      <p className='text-32 font-bold tablet:text-48 text-[#2E2E27] mb-6'>The largest pitchdeck inspiration examples from founders and startups who has raised funds</p>
      <p className='text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[24px] laptop:leading-8 text-[#64645F] mb-[40px]'>Save hundred hours of Pitchdeck visual and idea research by browsing a library of 1000+ handpicked screenshots from popular startups</p>
        


        {!isLogged && 
        <div className='flex flex-col tablet:flex-row gap-6 justify-center'>
        <HashLink smooth to='/#pricing'
          className="bg-[#21AB68] border-[#21AB68] shadow-navbarLink inline-flex items-center justify-center py-3 px-6 text-[#ffffff] text-sm leading-5 font-medium focus:outline-none ">
           
           <img src={Google} alt="" className='pr-1 w-[18px] h-[18px]'/> Continue with Google</HashLink>
          
        <p onClick={()=>setShowLogin(true)}
          className="bg-white border-[#D2D2CF] shadow-navbarLink inline-flex items-center justify-center py-3 px-6  text-[#0A0A0A] text-sm leading-5 font-medium focus:outline-none ">
         Continue with Email</p>
        </div>}
       {showLogin && <LoginCard getEmail={getEmail}/>}
       {showData && <DataCard email={email}/>}
        
      </div>
    </div>
    </div>
   
  )
}

export default Hero