import React from 'react'
import {PriceCard, SupportCard} from '../component/PriceCard'

const Pricing = () => {
  return (
    <div className='w-full' id='pricing'>
    <div className='w-full lg:max-w-[1152px] mx-auto px-4 md:px-6 lg:px-8 xl:px-0 py-[40px] md:py-[80px] lg:py-[100px]'>
    <p className='text-center mb-[13px] text-[#2E2E27] text-[24px] font-bold leading-8 tracking-[-0.96px] md:text-[32px] md:leading-[39px] md:tracking-[-1px] lg:text-[48px] lg:leading-[40px]'>Our pricing plans</p>
    <p className='text-center text-[20px] text-[#64645F] mb-5 md:mb-10 lg:mb-[50px] md:w-[528px] mx-auto'>Create beautiful powerpoint presentation for your next project</p>
      <div className='flex flex-col gap-5 md:gap-[30px] lg:flex-row lg:gap-[30px]'>
      <PriceCard plan='Standard' price='1200' color='grey' text="SignUp for free" link="" benefits={["5-7 days turnaround time", "4 revisions", "10-15 pages presentation", "Customer support","Stock photos",'Stock photos']}/>
      <PriceCard plan='Pro' price='1500' color='green' text="Upgrade to pro" link="" benefits={["5-7 days turnaround time", "Unlimited revisions ", "Custom illustrations", "Customer support","Stock photos",'Stock photos']}/>
     <SupportCard />
      
    </div>

      </div>
    </div>
  )
}

export default Pricing