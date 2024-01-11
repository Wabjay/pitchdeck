import Logo from "./../assets/Logo.svg"
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import LoadImage from "../component/LoadImage";

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]'>
        <div className='flex flex-col gap-10 laptop:flex-row laptop:items-start laptop:justify-between'>
        <Link to='/' className="flex items-center">
            <LoadImage src={Logo} alt="PPTDesign Logo" style={`w-full max-w-[149px] h-[37px] mr-3`} />
          </Link>

          <div className='flex flex-col gap-4'>
            <p className='text-[16px] font-bold leading-[22px] text-[#2E2E27]'>PRODUCTS</p>
            <HashLink smooth to='/#works' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>How it works</HashLink>
            <HashLink smooth to='/#faq' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>FAQ</HashLink>
            <HashLink smooth to='/#pricing' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Pricing</HashLink>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-[16px] font-bold leading-[22px] text-[#2E2E27]'>LEGAL</p>
            <Link to='/terms' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Terms and Conditions</Link>
            <Link to='/policy' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Privacy policy</Link>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-[16px] font-bold leading-[22px] text-[#2E2E27]'>CONTACT INFORMATION</p>
            <a href="mailto:pixelgum.design@gmail.com" className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>contactus@pptdesigner.co</a>
          </div>
        </div>
      </div>
    </div>)
}

export default Footer