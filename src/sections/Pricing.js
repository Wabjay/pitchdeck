import {PriceCard, SupportCard} from '../component/PriceCard'

const Pricing = () => {
  return (
    <div className='w-full' id='pricing'>
    <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px] desktop:px-0'>
    <p className='text-center mb-[13px] text-[#2E2E27] text-[24px] font-bold leading-8 tracking-[-0.96px] tablet:text-[32px] tablet:leading-[39px] tablet:tracking-[-1px] laptop:text-[48px] laptop:leading-[40px]'>Our pricing plans</p>
    <p className='text-center text-[20px] text-[#64645F] mb-5 tablet:mb-10 laptop:mb-[50px] tablet:w-[528px] mx-auto'>Create beautiful powerpoint presentation for your next project</p>
      <div className='flex flex-col gap-5 tablet:gap-[30px] laptop:flex-row laptop:gap-[30px]'>
      <PriceCard plan='Standard' price='1200' color='grey' text="Design a presentation" link="" benefits={["5-7 days turnaround time", "4 revisions", "10-15 pages presentation", "Customer support","Stock photos",'Stock photos']}/>
      <PriceCard plan='Pro' price='1500' color='green' text="Design a presentation" link="" benefits={["5-7 days turnaround time", "Unlimited revisions ", "Custom illustrations", "Customer support","Stock photos",'Stock photos']}/>
     <SupportCard />
      
    </div>

      </div>
    </div>
  )
}

export default Pricing