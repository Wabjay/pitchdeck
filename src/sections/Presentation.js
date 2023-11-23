import PresentationCard from '../component/PresentationCard'
import Plan from "./../assets/plan.svg"
import Design from "./../assets/design.svg"
import Iterate from "./../assets/iterate.svg"
const Presentation = () => {
  return (
    <div id='works' className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 text-center  py-[40px] tablet:py-[80px] laptop:py-[100px]'>
<p className='text-[24px] leading-[32px] tracking-[-0.96px] mb-6 tablet:text-[32px] tablet:leading-[39px] tablet:tracking-[-1px] tablet:mb-[40px] laptop:text-[48px] laptop:leading-[40px] laptop:mb-[70px] font-bold w-[288px] tablet:w-[441px] laptop:w-[690px] mx-auto' >How we create presentations for you</p>

      <div className='flex flex-col gap-5 tablet:gap-[40px] items-center laptop:flex-row laptop:gap-8 text-center'>
      <PresentationCard image={Plan} title='Subscribe to a plan' description='Subscribe to one of the plans we have, pause anytime you want' />
      <PresentationCard image={Design} title='Receive your design' description='Receive your design within specific days of placement of order' />
      <PresentationCard image={Iterate} title='Iterate and iterate' description='Iterate until you are satisfied with the design , unlimited number of revisions' />
      </div>
    </div>
  )
}

export default Presentation