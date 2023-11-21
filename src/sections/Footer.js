import React from 'react'
import Logo from "./../assets/Logo.svg"

const Footer = () => {
  return (
    <div className='w-full'>
    <div className='w-full lg:max-w-[1152px] mx-auto px-4 md:px-6 lg:px-8 xl:px-0 py-[40px] md:py-[80px] lg:py-[100px]'>
    <div className='flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between'>
    <a href="index.html" className="flex items-center">
                        <img src={Logo} className="w-[149px] h-[37px] mr-3"
                            alt="PPTDesign Logo" />
                    </a>

                    <div className='flex flex-col gap-4'>
                      <p className='text-[16px] font-bold leading-[22px] text-[#2E2E27]'>PRODUCTS</p>
                      <a href="#" className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>How it bworks</a>
                      <a href="#" className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>FAQ</a>
                      <a href="#" className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Pricing</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                      <p className='text-[16px] font-bold leading-[22px] text-[#2E2E27]'>LEGAL</p>
                      <a href="#" className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Terms and Conditions</a>
                      <a href="#" className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Privacy policy</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                      <p className='text-[16px] font-bold leading-[22px] text-[#2E2E27]'>CONTACT INFORMATION</p>
                      <a href="#" className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Pixelgum.design@gmail.com</a>
                    </div>
    </div>
    </div>
    </div>  )
}

export default Footer