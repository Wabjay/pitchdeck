import { Link } from "react-router-dom"

const Hero = () => {

  return (
    <div className='bg-[#F2F1E8] '>
       <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-0 text-center pt-[40px] tablet:pt-[80px] laptop:pt-[100px] '>
      <div className='w-full text-left '>
      <h1 className='text-32 font-bold tablet:text-64 text-[#0B0B00]'>Handpicked Pitch Deck Inspirations that has Raised $100bn.</h1>
      <Link to='/make-deck' className=' underline text-32 font-bold tablet:text-64 text-[#10894E] mb-6'>
      Grab Yours Today Starting at $299  
    </Link>
      <div className='w-full max-w-[931px] mt-8'>
      <h7 className=' text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[24px] laptop:leading-8 text-[#64645F] mb-[40px]'>Browse a list of winning pitch deck examples from founders that have closed rounds of investments from angel investors</h7>
        </div>
      </div>
    </div>
    </div>
   
  )
}

export default Hero