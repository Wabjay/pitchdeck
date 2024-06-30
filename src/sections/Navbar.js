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
    const [cookies, setCookie, removeCookie] = useCookies(["user", "token", "isLogged"]);
    const isSmallScreen = useMediaQuery({ query: '(max-width: 1023px)' })
    const navigate = useNavigate()
    const params = useLocation().pathname
    const { isLogged, user, setlink, setShowLogin } = store()
    const [visibility, setVisibility,] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);




    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    // eslint-disable-next-line no-lone-blocks

    const toggleNavbar = () => {
        visibility ? setVisibility(false) : setVisibility(true)
        setIsDropdownOpen(false);
    }
    const logout = () => {
        setCookie("user", "")
        setCookie("token", '')
        setCookie("isLogged", false);
        setlink(`/`)
        navigate('/')
    }

    const login = () => {
        toggleNavbar()
        setShowLogin(true)
    }

    return (
        <header className=" w-full bg-white px-4 tablet:px-6 laptop:px-8 xl:px-0 fixed top-0 z-20">
            <nav className="sticky top-0 z-10  block items-center  h-[40px] my-[10px]">
                <div
                    className="flex flex-wrap place-self-center items-center justify-between  w-full laptop:max-w-[1152px] mx-auto">
                    <Link to='/' className={`flex items-center w-full ${(isLogged && isSmallScreen) ? 'max-w-[140px] mr-0' : ' max-w-[180px] mr-3'} h-[37px] `} onClick={() => setVisibility(false)}>
                        <img src={Logo} alt="Pitchdeck Design Logo" width="100%" height="37px" />
                    </Link>
                    <div className="flex items-center laptop:order-1">
                        {
                            isSmallScreen ? <>
                                <div className='flex items-center gap-2'>
                                    {isLogged && <p className='flex'>{user?.userName}</p>}
                                    <div className={`w-6 h-6`} >
                                        <img src={Ham} alt="Hambugger Icon" width="100%" height="100%" onClick={toggleNavbar} />
                                    </div>
                                </div>

                                {visibility &&
                                    <div className='fixed top-[60px] left-0 h-full bg-white w-full py-4 px-6 tablet:px-8'>
                                        <ul className="flex flex-col font-medium gap-8">
                                            <li className="" onClick={toggleNavbar}> <Link to='/make-deck' className={`text-[#0A0A0A] text-sm leading-5 font-medium ${params.includes('make-deck') && "text-myGreen-400"}`}>Make a deck</Link> </li>
                                            <li className="" onClick={toggleNavbar}> <Link to='/template' className={`text-[#0A0A0A] text-sm leading-5 font-medium ${params.includes('template') && "text-myGreen-400"}`}>Shop</Link> </li>
                                            <li className="" onClick={toggleNavbar}> <Link to='/blog' className={`text-[#0A0A0A] text-sm leading-5 font-medium ${params.includes('blog') && "text-myGreen-400"}`}>Blog</Link> </li>
                                          
                                            {/* <li class="relative inline-block text-left">
                                                <button onClick={toggleDropdown} className={`text-[#0A0A0A] text-sm leading-5 font-medium ${params.includes('generate') && "text-myGreen-400"}`}>Free tools v</button>
                                                
                                               {isDropdownOpen && (
                                                <div class="absolute z-10 -ml-4 mt-3 transform px-2 w-max bg-white border border-white-1 shadow-dropdown">
                                                    <Link to='/generate-terms' onClick={toggleNavbar} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Terms and condition generator</Link>
                                                    <Link to='/generate-policy' onClick={toggleNavbar} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Privacy policy generator</Link>
                                                    <Link to='/generate-refund' onClick={toggleNavbar} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Refund policy generator</Link>
                                                </div>
                                                )} 
                                            </li> */}

                                            <li className="" onClick={toggleNavbar}> <Link to='/aboutus' className={`text-[#0A0A0A] text-sm leading-5 font-medium ${params.includes('aboutus') && "text-myGreen-400"}`}>About us</Link> </li>

                                            {isLogged ?
                                                <div className='w-fit flex items-center gap-1 cursor-pointer bg-white border border-[#D2D2CF] hover:bg-white hover:border-[#FF6464] shadow-navbarLink p-2 focus:outline-none ' onClick={logout}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M8.5 7C6.40769 8.20445 5 10.4557 5 13.034C5 16.8812 8.13401 20 12 20C15.866 20 19 16.8812 19 13.034C19 10.4556 17.5923 8.20445 15.5 7" stroke="#FF6464" stroke-width="2" stroke-linecap="round" />
                                                        <path d="M12 10L12 4" stroke="#FF6464" stroke-width="2" stroke-linecap="round" />
                                                    </svg>
                                                    <p className=' text-[#FF6464] text-14 leading-5 font-medium px-1'>Logout</p>
                                                </div>
                                                :
                                                <button onClick={login}
                                                    className="cursor-pointer w-fit bg-[#21AB68] border-[#21AB68] hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink inline-flex items-center justify-center p-2 px-3 text-[#ffffff] text-14 leading-5 font-normal focus:outline-none ">
                                                    Login your account</button>
                                            }

                                        </ul>
                                    </div>}
                            </>
                                :
                                <ul className="flex font-medium flex-row items-center gap-[50px] laptop:gap-[30px] desktop:gap-[50px]">
                                    <li className=""> <Link to='/make-deck' className={`text-[#0A0A0A] text-sm leading-5 font-medium hover:text-myGreen-400 ${params.includes('make-deck') && "text-myGreen-400"}`}>Make a deck</Link> </li>
                                    <li className=""> <Link to='/template' className={`text-[#0A0A0A] text-sm leading-5 font-medium hover:text-myGreen-400 ${params.includes('template') && "text-myGreen-400"}`}>Shop</Link> </li>
                                    <li className="">  <Link to='/blog' className={`text-[#0A0A0A] text-sm leading-5 font-medium hover:text-myGreen-400 ${params.includes('blog') && "text-myGreen-400"}`}>Blog</Link> </li>
                                    
                                    
                                    {/* <li className="relative inline-block text-left">
                                                <button onClick={toggleDropdown} className={`text-[#0A0A0A] text-sm leading-5 font-medium hover:text-myGreen-400 ${params.includes('generate') && "text-myGreen-400"}`}>Free tools v</button>
                                                
                                                {isDropdownOpen && (
                                                <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-max bg-white border border-white-1 shadow-dropdown ">
                                                    <Link to='/generate-terms' onClick={toggleDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Terms and condition generator</Link>
                                                    <Link to='/generate-policy' onClick={toggleDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Privacy policy generator</Link>
                                                    <Link to='/generate-refund' onClick={toggleDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Refund policy generator</Link>
                                                </div>
                                                )}
                                            </li> */}

                                    <li className=""> <Link to='/aboutus' className={`text-[#0A0A0A] text-sm leading-5 font-medium hover:text-myGreen-400 ${params.includes('aboutus') && "text-myGreen-400"}`}>About us</Link> </li>
                                    {isLogged ? <div className='flex items-center gap-6'>
                                        <p>{user?.userName}</p>
                                        <div className='w-fit flex items-center gap-1 cursor-pointer bg-white border border-[#D2D2CF] hover:bg-white hover:border-[#FF6464] shadow-navbarLink p-2 focus:outline-none ' onClick={logout}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M8.5 7C6.40769 8.20445 5 10.4557 5 13.034C5 16.8812 8.13401 20 12 20C15.866 20 19 16.8812 19 13.034C19 10.4556 17.5923 8.20445 15.5 7" stroke="#FF6464" stroke-width="2" stroke-linecap="round" />
                                                <path d="M12 10L12 4" stroke="#FF6464" stroke-width="2" stroke-linecap="round" />
                                            </svg>
                                            <p className=' text-[#FF6464] text-14 leading-5 font-medium px-1'>Logout</p>
                                        </div>
                                    </div> :
                                        <button onClick={login}
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