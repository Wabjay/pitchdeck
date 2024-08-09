import { Link } from "react-router-dom"

const Hero = () => {

  return (
    <div className='bg-white '>
       <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0 text-center pt-[40px] tablet:pt-[80px] laptop:pt-[100px] '>
      <div className='w-full text-left text-32 font-bold tablet:text-48 laptop:text-64'>
      <h1 className=' text-[#0B0B00]'>Handpicked Pitch Deck Inspirations that has Raised $100bn.</h1>
      <Link to='/make-deck' className=' underline text-[#10894E] mb-6'>
      Grab Yours Today Starting at $299  
    </Link>
      <div className='w-full max-w-[854px] mt-8'>
          <h2 className="text-[#64645F] text-16 tablet:text-20 laptop:text-24 mb-[40px]">
          Browse a list of winning pitch deck examples from founders that have closed rounds of investments from angel investors
          </h2>
     
        </div>
      </div>
    </div>
    </div>
   
  )
}

export default Hero