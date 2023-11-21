import React from 'react'
import Logo from "./../assets/Logo.svg"
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className='w-full'>
    <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]'>
    <div className='flex flex-col gap-10 laptop:flex-row laptop:items-start laptop:justify-between'>
    <a href="index.html" className="flex items-center">
                        <img src={Logo} className="w-[149px] h-[37px] mr-3"
                            alt="PPTDesign Logo" />
                    </a>

                    <div className='flex flex-col gap-4'>
                      <p className='text-[16px] font-bold leading-[22px] text-[#2E2E27]'>PRODUCTS</p>
                      <HashLink smooth to='/#works' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>How it works</HashLink>
                      <HashLink smooth to='/#faq' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>FAQ</HashLink>
                      <HashLink smooth to='/#pricing' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Pricing</HashLink>
                    </div>
                    <div className='flex flex-col gap-4'>
                      <p className='text-[16px] font-bold leading-[22px] text-[#2E2E27]'>LEGAL</p>
                      <HashLink smooth to='#' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Terms and Conditions</HashLink>
                      <HashLink smooth to='#' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Privacy policy</HashLink>
                    </div>
                    <div className='flex flex-col gap-4'>
                      <p className='text-[16px] font-bold leading-[22px] text-[#2E2E27]'>CONTACT INFORMATION</p>
                      <a href="mailto:pixelgum.design@gmail.com" className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Pixelgum.design@gmail.com</a>
                    </div>
    </div>
    </div>
    </div>  )
}

export default Footer