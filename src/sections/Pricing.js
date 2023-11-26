import {PriceCard, SupportCard} from '../component/PriceCard'

const Pricing = () => {

  const product = [
    {plan:'Standard', price:'1200', color:'grey', text:"Design a presentation", link:"https://olayanjuidris.gumroad.com/l/standard-plan?_gl=1*8udghh*_ga*MTk2ODkyNDEwMS4xNjkyODgzODM2*_ga_6LJN6D94N6*MTcwMTAyMzE2My43LjEuMTcwMTAyNDcwMC4wLjAuMA", benefits:["5-7 days turnaround time", "4 revisions", "10-15 pages presentation", "Customer support","Stock photos",'Stock photos']},
    {plan:'Pro', price:'1500', color:'green', text:"Design a presentation", link:"https://olayanjuidris.gumroad.com/l/pro-plan?_gl=1*1xt6kcr*_ga*MTk2ODkyNDEwMS4xNjkyODgzODM2*_ga_6LJN6D94N6*MTcwMTAyMzE2My43LjEuMTcwMTAyNDY5OC4wLjAuMA", benefits:["5-7 days turnaround time", "Unlimited revisions", "Custom illustrations", "Customer support","Stock photos",'Stock photos']},
  ]
  return (
    <div className='w-full' id='pricing'>
    <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px] desktop:px-0'>
   <div className='flex flex-col gap-[13px] pb-5 tablet:pb-10 laptop:pb-[50px] '>
    
    <p className='text-center text-[#2E2E27] text-[24px] font-bold leading-8 tracking-[-0.96px] tablet:text-[32px] tablet:leading-[39px] tablet:tracking-[-1px] laptop:text-[48px] laptop:leading-[40px]'>Our pricing plans</p>
    <p className='text-center text-[#2E2E27] text-[20px] leading-8 tracking-[-0.96px] laptop::w-[528px]'>Create beautiful powerpoint presentation for your next project</p>
   </div>
      
      <div className='flex flex-col gap-5 tablet:gap-[30px] laptop:flex-row laptop:gap-[30px]'>
      <PriceCard product={product[0]} />
      <PriceCard product={product[1]}/>
     <SupportCard />
      
    </div>

      </div>
    </div>
  )
}

export default Pricing