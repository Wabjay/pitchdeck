/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import Arrow from "../../assets/arrowUp.svg"
import { createSlug } from '../slug';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const PitchCard = ({ pitch }) => {

  return (

    <Link to={{
      pathname: `/pitch/${createSlug(pitch?.title)}`,
      state: { id: pitch._id }
    }}>
      <div className={`flex flex-col h-full  border border-[#D2D2CF] hover:border-[#21AB68]  `}>

        <LazyLoadImage
          alt="Pitch deck"
          effect="blur"
          src={pitch?.coverImageUrl}
          className="w-full h-[240px]"
          width="100%" height="100%"
        />
        <div className='p-3 laptop:p-[14px] desktop:p-4 bg-white'>
          <div className='flex justify-between mb-1'>
            <h5 className='text-16 font-medium text-[#2E2E27] P-3 text-20 tablet:font-bold'>{pitch.title}</h5>
            <img src={Arrow} alt="Arrow Up" width="24px" height='24px' className='hover:border-[#F2F1E8] hover:border hover:bg-[#F2F1E8]' />
          </div>

          <p className='text-12 font-normal text-[#2E2E27] P-3 flex'>{pitch?.contentImagesUrls?.length} pages <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7.5" cy="8.97321" r="1.5" fill="#2E2E27" />
          </svg> Raised {pitch.amountRaised}</p>
        </div>
      </div>
    </Link>
  )
}

export default PitchCard