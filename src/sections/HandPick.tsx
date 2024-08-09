import { Link } from "react-router-dom";
import LoadImage from "../component/LoadImage";
import 'react-lazy-load-image-component/src/effects/blur.css';
import ImageStack from "../component/ImageStack";
import BaristerFinder from "./../assets/BaristerFinder.webp";
import PCRopsis from "./../assets/PCRopsis.webp";
import Wattpricer from "./../assets/Wattpricer.webp";
import FrontierYields from "./../assets/FrontierYields.webp";
import Maxim from "./../assets/Maxim-featured.webp";
import Frantable from "./../assets/Frantable.webp";
import Trinton from "./../assets/Trinton.webp";

const HandPick = () => {
  const images = [BaristerFinder, PCRopsis, Wattpricer, FrontierYields, Maxim, Frantable, Trinton];

  return (
    <div className='w-full bg-[#F8F8F1]' id='pricing'>
      <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]'>
        <div className='grid ipad:grid-cols-2 gap-6 ipad:gap-[30px] laptop:flex-row laptop:gap-[30px]'>
          <div className='mb-5'>
            <h2 className="text-left w-full laptop:max-w-[758px] text-24 font-bold tablet:text-32 laptop:text-40 desktop:text-48 text-[#000] mb-6">
              Transform Your Product Idea into a Compelling Pitch Deck for Fundraising
            </h2>
            <p className="text-left w-full laptop:max-w-[758px] text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[20px] laptop:leading-8 text-[#000] mb-[40px] font-normal">
              Our expertly crafted pitch deck is designed to support you in raising capital for your business. Get started making one today starting at $299.
            </p>
            <Link to='./make-deck' className="text:left w-fit cursor-pointer bg-white border-grey-100 border shadow-supportButton p-3 h-[52px] text-[#000]">
              Make a Pitch Deck
            </Link>
          </div>
          <div className="flex justify-center items-center bg-white p-6 !pb-12 laptop:!p-10 laptop:!pb-16">
            <ImageStack images={images} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HandPick;
