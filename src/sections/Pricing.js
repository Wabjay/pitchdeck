import Starter from '../assets/Starter.svg'
import Budget from '../assets/Budget.svg'
import Standard from '../assets/Standard.svg'
import Pro from '../assets/Company.svg'
import { PriceCard, SupportCard } from '../component/PriceCard'
import './../index.css';


const Pricing = () => {

  const product = [
    { plan: 'Starter', active: false, icon: Starter, heading: 'For testing out our capabilities', price: '99', color: 'grey', text: "Design a presentation", link: "https://olayanjuidris.gumroad.com/l/starter-plan?_gl=1*1pj32tz*_ga*MTk2ODkyNDEwMS4xNjkyODgzODM2*_ga_6LJN6D94N6*MTcxMDI4NjUwNS4yMy4xLjE3MTAyODk3ODIuMC4wLjA", benefits: ["1-day turnaround time", "5 pages deck slides", "2 revisions on pitcchdeck", "Get figma file "] },
    { plan: 'Budget Friendly', active: false, icon: Budget, heading: 'For startups with a mini-budget', price: '229', color: 'grey', text: "Design a presentation", link: "https://olayanjuidris.gumroad.com/l/BudgetFriendlyplan?_gl=1*1xt6kcr*_ga*MTk2ODkyNDEwMS4xNjkyODgzODM2*_ga_6LJN6D94N6*MTcwMTAyMzE2My43LjEuMTcwMTAyNDY5OC4wLjAuMA", benefits: ["5-7 days turnaround time", "10 pages deck slides", "4 revisions on pitcchdeck", "Customer support", 'Figma design', 'PDF export'] },
    { plan: 'Standard', active: true,  icon: Standard, heading: 'For startups with a small budget', price: '429', color: 'grey', text: "Design a presentation", link: "https://olayanjuidris.gumroad.com/l/standardplan?_gl=1*1xt6kcr*_ga*MTk2ODkyNDEwMS4xNjkyODgzODM2*_ga_6LJN6D94N6*MTcwMTAyMzE2My43LjEuMTcwMTAyNDY5OC4wLjAuMA", benefits: ["2 - 4  days turnaround time", "12+ pages deck", "Unlimited revisions", "Content copy changes", "Customer support","Figma design","PDF export", "Powerpoint copy", "Canva design", 'Stock photos'] },
    { plan: 'Pro', active: false, icon: Pro, heading: 'For startups with funding', price: '729', color: 'grey', text: "Design a presentation", link: "https://olayanjuidris.gumroad.com/l/Professionalplan?_gl=1*1q8lwtt*_ga*MTk2ODkyNDEwMS4xNjkyODgzODM2*_ga_6LJN6D94N6*MTcxMDI4NjUwNS4yMy4xLjE3MTAyODk3ODUuMC4wLjA", benefits: ["1 - 2  days turnaround time","12+ pages deck", "Unlimited revisions", "Content copy changes", "Customer support","Figma design","PDF export", "Powerpoint copy", "Canva design", 'Stock photos', "Illustrations"] },
  ]
  return (
    <div className=''>
      <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px] desktop:px-0'>
        <div className='flex flex-col gap-[13px] pb-5 tablet:pb-10 laptop:pb-[50px] '>

          <h2 className='text-center text-[#2E2E27] text-[24px] font-bold leading-8 tracking-[-0.96px] tablet:text-[32px] tablet:leading-[39px] tablet:tracking-[-1px] laptop:text-[48px] laptop:leading-[40px]'>Our pricing plans</h2>
          <p className='text-center text-[#2E2E27] text-[20px] leading-8 tracking-[-0.96px] laptop::w-[528px]'>Create beautiful powerpoint and pitchdeck presentation for your next project</p>
        </div>

        <div className={`flex flex-col laptop:flex-row tablet:grid tablet:grid-cols-2 gap-5 tablet:gap-[30px] pricingCards`}>
          {product.map(plan => <PriceCard key={plan.plan} product={plan} />)}
        </div>
          <SupportCard />

      </div>
    </div>
  )
}

export default Pricing