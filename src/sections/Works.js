import React from 'react'
import { WorkCard, WorkCardImage } from '../component/Workcard'
import Maxim from "./../assets/maxim.png"
import Barista from "./../assets/barista.png"
import Frontier from "./../assets/frontier.png"
import Smile from "./../assets/smile.png"
// PDF'S
import MaximPdf from "./../assets/pdf/maxim.pdf"
import BaristaPdf from "./../assets/pdf/barrista.pdf"
import FrontierPdf from "./../assets/pdf/frontier yileds.pdf"
import SmilePdf from "./../assets/pdf/smile.pdf"
const Works = () => {
  return (
    <div className='bg-[#EEFCF5]' id='works'>
    <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]'>
      <p className='mb-[13px] text-[#2E2E27] text-[24px] font-bold leading-8 tracking-[-0.96px] tablet:text-[32px] tablet:leading-[39px] tablet:tracking-[-1px] laptop:text-[48px] laptop:leading-[40px]'>Our recent work </p>
      <p className='mb-[26px] tablet:mb-10 laptop:mb-[50px] text-[#64645F] text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px]'>Take a look at some of the works we have done  and what our clients say</p>
      <div className='gap-[40px] grid laptop:grid-cols-2 laptop:gap-[26px] laptop:gap-y-[50px] xl:gap-[33px] laptop:items-center'>
        <WorkCardImage link={MaximPdf} image={Maxim} title='Maxim project' description='Powerpoint pitch deck for a financial institution helping migrants get integrated into the financial ecosystem ' />
        <WorkCard author='Dana Smith' position='Content creator' description='I subscribed to the  monthly plan for my  
youtube content to get thumbnails, their 
thumbnail creatio service is really great , I 
recommend them to anybody that needs 
thumbnails for their business' />
        <WorkCardImage link={BaristaPdf} image={Barista} title='Barista Finder' description='Pitch deck for a marketplace app to connect coffee shops around Australia and European Union' />
        <WorkCardImage link={FrontierPdf} image={Frontier} title='Frontier Yields' description='Pitch deck for financing solutions which allow competitive interest rate arbitrage from developed markets' />
        <WorkCard author='Ward Prowse' position='Content Creator' description='They have a good response rate,  my design got sent to me within 24 hours,  really reilable, you should try them out' />
        <WorkCardImage link={SmilePdf} image={Smile} title='Smile' description='Powerpoint slides for identity management solution for B2B businesses' />

      </div>
    </div>
    </div>
  )
}

export default Works