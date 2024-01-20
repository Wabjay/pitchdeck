import { useState } from 'react'

import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import Logo from "./../assets/Logo.svg"
import Ham from "./../assets/hambugger.svg"
import { store } from "../store"
import { useCookies } from "react-cookie";
import { useNavigate, useLocation } from "react-router-dom";
import LoadImage from '../component/LoadImage';

const Navbar = () => {
    const [visibility, setVisibility,] = useState(false)
    const isSmallScreen = useMediaQuery({ query: '(max-width: 1023px)' })
    const navigate = useNavigate()
    const params = useLocation().pathname
    const { isLogged, user, setlink, setShowLogin } = store()

    const [cookies, setCookie, removeCookie] = useCookies(["user", "token", "isLogged"]);
    // eslint-disable-next-line no-lone-blocks

    const toggleNavbar = () => {
        visibility ? setVisibility(false) : setVisibility(true)
    }
    const logout =()=>{
        setCookie("user", "")
        setCookie("token", '')
        setCookie("isLogged", false);
            setlink(`/`)
            navigate('/')
           
    }

    const login = ()=>{
        toggleNavbar()
        setShowLogin(true)   
      }

    return (
        <header className=" w-full bg-white px-4 tablet:px-6 laptop:px-8 xl:px-0 fixed top-0 z-20">
            <nav className="sticky top-0 z-10  block items-center  h-[40px] my-[10px]">
                <div
                    className="flex flex-wrap place-self-center items-center justify-between  w-full laptop:max-w-[1152px] mx-auto">
                    <Link to='/' className={`flex items-center w-full ${(isLogged && isSmallScreen) ? 'max-w-[140px] mr-0': ' max-w-[180px] mr-3'} h-[37px] `} onClick={() => setVisibility(false)}>
                        <img src={Logo} alt="Pitchdeck Design Logo" width="100%" height="100%"   />
                    </Link>
                    <div className="flex items-center laptop:order-1">
                        {
                            isSmallScreen ? <>
                            <div className='flex items-center gap-2'>
                        {isLogged && <p className='flex'>{user?.userName}</p>}
                        <div className={`w-6 h-6`} >
                        <img src={Ham} alt="Hambugger Icon" width="100%" height="100%" onClick={toggleNavbar}/>
                            </div>
                        </div>

                                {visibility &&
                                    <div className='fixed top-[60px] left-0 h-full bg-white w-full py-4 px-6 tablet:px-8'>
                                        <ul className="flex flex-col font-medium gap-8">
                                            <li className="" onClick={toggleNavbar}> <Link to='/make-deck' className={`text-[#0A0A0A] text-sm leading-5 font-medium ${params.includes('make-deck') && "text-myGreen-400"}`}>Make a deck</Link> </li>
                                            <li className="" onClick={toggleNavbar}> <Link to='/template' className={`text-[#0A0A0A] text-sm leading-5 font-medium ${params.includes('template') && "text-myGreen-400"}`}>Shop</Link> </li>
                                            <li className="" onClick={toggleNavbar}> <Link to='/blog' className={`text-[#0A0A0A] text-sm leading-5 font-medium ${params.includes('blog') && "text-myGreen-400"}`}>Blog</Link> </li>
                                            <li className="" onClick={toggleNavbar}> <Link to='/aboutus' className={`text-[#0A0A0A] text-sm leading-5 font-medium ${params.includes('aboutus') && "text-myGreen-400"}`}>About us</Link> </li>

                                            {isLogged ? <div className=''><p className='cursor-pointer w-fit bg-[#FF6464] border-[#FF6464] hover:bg-[#e75757] hover:border-[#e75757] shadow-navbarLink inline-flex items-center justify-center p-2 px-3  text-[#ffffff] text-14 leading-5 font-normal focus:outline-none ' onClick={logout}>Logout</p> </div> :
                                                <button  onClick={login}
                                                    className="cursor-pointer w-fit bg-[#21AB68] border-[#21AB68] hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink inline-flex items-center justify-center p-2 px-3 text-[#ffffff] text-14 leading-5 font-normal focus:outline-none ">
                                                    Login your account</button>
                                            }

                                        </ul>
                                    </div>}
                            </>
                                :
                                <ul className="flex font-medium flex-row items-center gap-[56px]">
                                    <li className=""> <Link to='/make-deck' className={`text-[#0A0A0A] text-sm leading-5 font-medium hover:text-myGreen-400 ${params.includes('make-deck') && "text-myGreen-400"}`}>Make a deck</Link> </li>
                                    <li className=""> <Link to='/template' className={`text-[#0A0A0A] text-sm leading-5 font-medium hover:text-myGreen-400 ${params.includes('template') && "text-myGreen-400"}`}>Shop</Link> </li>
                                    <li className="">  <Link to='/blog' className={`text-[#0A0A0A] text-sm leading-5 font-medium hover:text-myGreen-400 ${params.includes('blog') && "text-myGreen-400"}`}>Blog</Link> </li>
                                    <li className=""> <Link to='/aboutus' className={`text-[#0A0A0A] text-sm leading-5 font-medium hover:text-myGreen-400 ${params.includes('aboutus' ) && "text-myGreen-400"}`}>About us</Link> </li>
                                    {isLogged ? <div className='flex items-center gap-6'>
                                        <p>{user?.userName}</p>
                                        <p className='cursor-pointer bg-[#FF6464] border-[#FF6464] hover:bg-[#e75757] hover:border-[#e75757] shadow-navbarLink p-2 px-3 text-[#ffffff] text-14 leading-5 font-normal focus:outline-none ' onClick={logout}>Logout</p> 
                                        </div> :
                                        <button  onClick={login}
                                            className="cursor-pointer bg-[#21AB68] border-[#21AB68] hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink inline-flex items-center justify-center p-2 px-3 text-[#ffffff] text-14 leading-5 font-normal focus:outline-none ">
                                            Login your account</button>
                                    }

                                </ul>}
                    </div>
                </div>
            </nav>
        </header>


    )
}

export default Navbar