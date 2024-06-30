import { createSlug } from "../component/slug";
import { categories, tags } from "../lib/category";
import Logo from "./../assets/Logo.svg"
import { Link } from 'react-router-dom';

const Footer = () => {


  return (
    <div className='w-full'>
      <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-4 desktop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]'>
        <div className='flex flex-col gap-10 laptop:flex-row  laptop:gap-0 laptop:justify-between desktop:gap-10'>
        <Link to='/' className="flex items-center w-full max-w-[180px] h-[37px] mr-3">
            <img src={Logo} alt="Pitchdeck Design Logo" width="100%" height="100%" className={`w-full max-w-[180px] h-[37px] mr-3`} />
          </Link>

          <div className='flex flex-col gap-4 whitespace-nowrap'>
            <p className='text-[16px] font-bold leading-[22px] text-[#2E2E27]'>PRODUCTS</p>
            <Link to='/make-deck' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Make a deck</Link>
            <Link to='/template' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Shop</Link>
            <Link to='/blog' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Blog</Link>
            <Link to='/aboutus' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>About us</Link>
          </div>
          <div className='flex flex-col gap-4 whitespace-nowrap'>
            <p className='text-[16px] font-bold leading-[22px] text-[#2E2E27]'>PRODUCT CATEGORIES</p>
            {tags.map((cat, i)=>(
            <Link key={i} to={`/${createSlug(cat.title)}`} className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>{cat.title}</Link>
            ))}
             {categories.map((cat, i)=>(
            <Link key={i} to={`/category/${createSlug(cat.title)}`} className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>{cat.title}</Link>
            ))}
            {/* <Link to='/policy' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Privacy policy</Link> */}
          </div>

          <div>
          <div className='flex flex-col gap-4 whitespace-nowrap'>
            <p className='text-[16px] font-bold leading-[22px] text-[#2E2E27]'>FREE TOOLS</p>
            <Link to='/generate-terms' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Terms and conditions generator</Link>
            <Link to='/generate-policy' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Privacy policy generator</Link>
            <Link to='/generate-refund' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Refund policy generator</Link>
          </div>
 <div className="hidden desktop:!hidden laptop:block mt-8">

          <div  className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4 whitespace-nowrap'>
            <p className='text-[16px] font-bold leading-[22px] text-[#2E2E27]'>CONTACT INFORMATION</p>
            <a href="mailto:contactus@pitchdeck.design" className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>contactus@pitchdeck.design</a>
          </div>

          <div className='flex flex-col gap-4 whitespace-nowrap'>
            <p className='text-[16px] font-bold leading-[22px] text-[#2E2E27]'>LEGAL</p>
            <Link to='/terms' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Terms and Conditions</Link>
            <Link to='/policy' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Privacy policy</Link>
          </div>
          </div>
          </div>
          </div>
          <div className="laptop:hidden desktop:block">

          <div  className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4 whitespace-nowrap'>
            <p className='text-[16px] font-bold leading-[22px] text-[#2E2E27]'>CONTACT INFORMATION</p>
            <a href="mailto:contactus@pitchdeck.design" className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>contactus@pitchdeck.design</a>
          </div>

          <div className='flex flex-col gap-4 whitespace-nowrap'>
            <p className='text-[16px] font-bold leading-[22px] text-[#2E2E27]'>LEGAL</p>
            <Link to='/terms' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Terms and Conditions</Link>
            <Link to='/policy' className='text-[16px] font-[300] leading-[22px] text-[#2E2E27]'>Privacy policy</Link>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>)
}

export default Footer