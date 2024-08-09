import { store } from "../store";


const ViewMore = () => {

  const {setShowLogin} = store();


  return (
    <div className='bg-white relative'>
      <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 text-center py-[40px] tablet:py-[80px] laptop:pt-[100px]'>
        <div className='w-fit mx-auto'>
          <h2 className='mx-auto w-[288px] tablet:w-[524px] desktop:w-[655px] text-24 font-bold tablet:text-32 laptop:text-40 desktop:text-48 text-[#000] mb-6'>Need more Pitch deck inspiration?</h2>
          <p className=' w-full max-w-[400px] laptop:max-w-[558px] mx-auto text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[20px] laptop:leading-8 text-[#000] mb-[40px] font-normal'>Signup today to get more access to pitch decks and industries without no barriers</p>
          <p onClick={()=> setShowLogin(true)}
            className="cursor-pointer bg-[#21AB68] border-[#21AB68] hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink inline-flex items-center justify-center p-3 h-[52px] text-[#fff]  font-sm leading-5 font-medium focus:outline-none ">
            Get more inspiration</p>
        </div>
      </div>
    </div>
  )
}

export default ViewMore