import React from 'react'
import PresentationCard from '../component/PresentationCard'
import Plan from "./../assets/plan.svg"
import Design from "./../assets/design.svg"
import Iterate from "./../assets/iterate.svg"
const Presentation = () => {
  return (
    <div id='works' className='w-full lg:max-w-[1152px] mx-auto px-4 md:px-6 lg:px-8 xl:px-0 text-center  py-[40px] md:py-[80px] lg:py-[100px]'>
<p className='text-[24px] leading-[32px] tracking-[-0.96px] mb-6 md:text-[32px] md:leading-[39px] md:tracking-[-1px] md:mb-[40px] lg:text-[48px] lg:leading-[40px] lg:mb-[70px] font-bold w-[288px] md:w-[441px] lg:w-[690px] mx-auto' >How we create presentations for you</p>

      <div className='flex flex-col gap-5 md:gap-[40px] items-center lg:flex-row lg:gap-8 text-center'>
      <PresentationCard image={Plan} title='Subscribe to a plan' description='Subscribe to one of the plans we have, pause anytime you want' />
      <PresentationCard image={Design} title='Receive your design' description='Receive your design within specific days of placement of order' />
      <PresentationCard image={Iterate} title='Iterate and iterate' description='Iterate until you are satisfied with the design , unlimited number of revisions' />
      </div>
    </div>
  )
}

export default Presentation