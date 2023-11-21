import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#F2F1E8] '>
       <div className='w-full lg:max-w-[1152px] mx-auto px-4 md:px-6 lg:px-8 xl:px-0 text-center pt-[40px] pb-[28px] md:pt-[80px] md:pb-[50px] lg:pt-[100px] lg:pb-[56px]'>
      <div className='w-[288px] md:w-[524px] lg:w-[815px] mx-auto'>
      <p className='text-[32px] font-bold leading-[39px] tracking-[-1px] md:text-[48px] md:leading-[40px] lg:text-[64px] lg:leading-[72px] lg:tracking-[-2px] text-[#2E2E27] mb-6'>Beautiful powerpoint presentation for your next project</p>
      <p className='text-[16px] leading-6 md:text-[20px] md:leading-[28px] lg:text-[24px] lg:leading-8 text-[#64645F] mb-[40px]'>Pptdesigner supports your business to design beautiful powerpoint slides for your next presentation to get the numbers</p>
        <a href="#"
          className="bg-[#21AB68] border-[#21AB68] shadow-navbarLink inline-flex items-center justify-center p-2  text-[#ffffff]  font-sm leading-5 font-medium focus:outline-none ">
          Hire a designer</a>
      </div>
    </div>
    </div>
   
  )
}

export default Hero