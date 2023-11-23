import { useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import Logo from "./../assets/Logo.svg"
import Ham from "./../assets/hambugger.svg"

const Navbar = () => {
    const [visibility, setVisibility] = useState(false)
    const isSmallScreen = useMediaQuery({ query: '(max-width: 1023px)' })


const toggleNavbar = ()=>{
 visibility ? setVisibility(false) : setVisibility(true)
}

    return (
        <header className=" w-full bg-white px-4 tablet:px-6 laptop:px-8 xl:px-0 fixed top-0 z-20">
            <nav className="sticky top-0 z-10  block items-center  h-[40px] my-[10px]">
                <div
                    className="flex flex-wrap place-self-center items-center justify-between  w-full laptop:max-w-[1152px] mx-auto">
                    <Link to='/' className="flex items-center" onClick={toggleNavbar}>
                        <img src={Logo} className="w-[149px] h-[37px] mr-3"
                            alt="PPTDesign Logo" />
                    </Link>
                    <div className="flex items-center laptop:order-1">
                        {
                            isSmallScreen ? <>
                            <img src={Ham} className="w-6" alt="Hambugger Icon" onClick={toggleNavbar} />
                            {visibility && 
                            <div className='fixed top-[60px] left-0 h-full bg-white w-full py-4 px-6 tablet:px-8'>
                                <ul className="flex flex-col font-medium gap-8">
                                    <li className="" onClick={toggleNavbar}> <HashLink smooth to='/#features' className="text-[#0A0A0A] font-sm leading-5 font-medium">Features</HashLink> </li>
                                    <li className="" onClick={toggleNavbar}> <HashLink smooth to='/#works' className="text-[#0A0A0A] font-sm leading-5 font-medium">How it works</HashLink> </li>
                                    <li className="" onClick={toggleNavbar}> <Link to='/blog' className="text-[#0A0A0A] font-sm leading-5 font-medium">Blog</Link> </li>
                                    <li className="" onClick={toggleNavbar}> <HashLink smooth to='/#pricing' className="text-[#0A0A0A] font-sm leading-5 font-medium">Pricing</HashLink> </li>

                                    <li className="navBlock laptop:px-0" onClick={toggleNavbar}>
                                    <HashLink smooth to= "/#waitlist"
                                            className="bg-[#21AB68] border-[#21AB68] shadow-navbarLink inline-flex items-center justify-center p-2  text-[#ffffff]  font-sm leading-5 font-medium focus:outline-none ">
                                            Hire a designer</HashLink>
                                    </li>

                                </ul>
                                </div>}
                            </>
                                :
                                <ul className="flex font-medium flex-row items-center gap-[56px]">
                                    <li className=""> <HashLink smooth to='/#features'  className="text-[#0A0A0A] font-sm leading-5 font-medium">Features</HashLink> </li>
                                    <li className=""> <HashLink smooth to='/#works'  className="text-[#0A0A0A] font-sm leading-5 font-medium">How it works</HashLink> </li>
                                    <li className="">  <Link to='/blog' className="text-[#0A0A0A] font-sm leading-5 font-medium">Blog</Link> </li>
                                    <li className=""> <HashLink smooth to='/#pricing'  className="text-[#0A0A0A] font-sm leading-5 font-medium">Pricing</HashLink> </li>

                                    <li className="navBlock laptop:px-0">
                                    <HashLink smooth to="/#waitlist"
                                            className="bg-[#21AB68] border-[#21AB68] shadow-navbarLink inline-flex items-center justify-center p-2  text-[#ffffff]  font-sm leading-5 font-medium focus:outline-none ">
                                            Hire a designer</HashLink>
                                    </li>

                                </ul>}
                    </div>
                </div>
            </nav>
        </header>


    )
}

export default Navbar