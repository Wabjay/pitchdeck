import { useState } from 'react'

import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import Logo from "./../assets/Logo.svg"
import Ham from "./../assets/hambugger.svg"
import { store } from "../store"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import LoadImage from '../component/LoadImage';

const Navbar = () => {
    const [visibility, setVisibility,] = useState(false)
    const isSmallScreen = useMediaQuery({ query: '(max-width: 1023px)' })
    const navigate = useNavigate()
    const { isLogged, user, setlink } = store()

    const [cookies, setCookie, removeCookie] = useCookies(["user", "token", "isLogged"]);
    // eslint-disable-next-line no-lone-blocks

    const toggleNavbar = () => {
        visibility ? setVisibility(false) : setVisibility(true)
    }
    const logout =()=>{
        setCookie("user", "")
        setCookie("token", '')
        setCookie("isLogged", false);
        console.log("cookies removed")
            setlink(`/pitch-decks`)
            navigate('/pitch-decks')
           
    }

    return (
        <header className=" w-full bg-white px-4 tablet:px-6 laptop:px-8 xl:px-0 fixed top-0 z-20">
            <nav className="sticky top-0 z-10  block items-center  h-[40px] my-[10px]">
                <div
                    className="flex flex-wrap place-self-center items-center justify-between  w-full laptop:max-w-[1152px] mx-auto">
                    <Link to='/' className="flex items-center" onClick={() => setVisibility(false)}>
                        <LoadImage src={Logo} alt="PPTDesign Logo" style={`w-full max-w-[149px] h-[37px] mr-3`} />
                    </Link>
                    <div className="flex items-center laptop:order-1">
                        {
                            isSmallScreen ? <>
                        <img src={Ham} alt="Hambugger Icon"  className={`w-6 h-6`}  onClick={toggleNavbar}/>

                                {visibility &&
                                    <div className='fixed top-[60px] left-0 h-full bg-white w-full py-4 px-6 tablet:px-8'>
                                        <ul className="flex flex-col font-medium gap-8">
                                            <li className="" onClick={toggleNavbar}> <Link to='/pitch-decks' className="text-[#0A0A0A] text-sm leading-5 font-medium">Company Pitchdecks</Link> </li>
                                            <li className="" onClick={toggleNavbar}> <HashLink smooth to='/#works' className="text-[#0A0A0A] text-sm leading-5 font-medium">Our Works</HashLink> </li>
                                            <li className="" onClick={toggleNavbar}> <Link to='/blog' className="text-[#0A0A0A] text-sm leading-5 font-medium">Blog</Link> </li>
                                            <li className="" onClick={toggleNavbar}> <HashLink smooth to='/#pricing' className="text-[#0A0A0A] text-sm leading-5 font-medium">Pricing</HashLink> </li>

                                            {isLogged ? <div className=''><p>@{user?.userName}</p>
                                        <p className='' onClick={logout}>Logout</p> </div> :
                                                <HashLink smooth to="/#pricing" onClick={toggleNavbar}
                                                    className="bg-[#21AB68] border-[#21AB68] shadow-navbarLink inline-flex items-center justify-center p-2  text-[#ffffff]  text-sm leading-5 font-normal focus:outline-none ">
                                                    Hire a designer</HashLink>
                                            }

                                        </ul>
                                    </div>}
                            </>
                                :
                                <ul className="flex font-medium flex-row items-center gap-[56px]">
                                    <li className=""> <Link to='/pitch-decks' className="text-[#0A0A0A] text-sm leading-5 font-medium">Company Pitchdecks</Link> </li>
                                    <li className=""> <HashLink smooth to='/#works' className="text-[#0A0A0A] text-sm leading-5 font-medium">Our Works</HashLink> </li>
                                    <li className="">  <Link to='/blog' className="text-[#0A0A0A] text-sm leading-5 font-medium">Blog</Link> </li>
                                    <li className=""> <HashLink smooth to='/#pricing' className="text-[#0A0A0A] text-sm leading-5 font-medium">Pricing</HashLink> </li>
                                    {isLogged ? <div className='flex gap-2'><p>@{user?.userName}</p>
                                        <p className='' onClick={logout}>Logout</p> 
                                        </div> :
                                        <HashLink smooth to="/#pricing"
                                            className="bg-[#21AB68] border-[#21AB68] shadow-navbarLink inline-flex items-center justify-center p-2  text-[#ffffff]  text-sm leading-5 font-normal focus:outline-none ">
                                            Hire a designer</HashLink>
                                    }

                                </ul>}
                    </div>
                </div>
            </nav>
        </header>


    )
}

export default Navbar