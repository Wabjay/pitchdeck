
const Hero = () => {
  return (
    <div className='bg-[#F2F1E8] '>
       <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 text-center py-[40px] tablet:py-[80px] laptop:py-[100px]'>
      <div className='w-[288px] tablet:w-[524px] laptop:w-[815px] mx-auto'>
      <p className='text-[32px] font-bold leading-[39px] tracking-[-1px] tablet:text-[48px] tablet:leading-[40px] laptop:text-[64px] laptop:leading-[72px] laptop:tracking-[-2px] text-[#2E2E27] mb-6'>Beautiful powerpoint presentation for your next project</p>
      <p className='text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[24px] laptop:leading-8 text-[#64645F] mb-[40px]'>Pptdesigner supports your business to design beautiful powerpoint slides for your next presentation to get the numbers</p>
        <a href="#"
          className="bg-[#21AB68] border-[#21AB68] shadow-navbarLink inline-flex items-center justify-center py-3 px-4  text-[#ffffff] text-sm leading-5 font-medium focus:outline-none ">
          Design a presentation</a>
      </div>
    </div>
    </div>
   
  )
}

export default Hero