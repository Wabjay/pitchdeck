/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Arrow from "../../assets/arrowUp.svg"
import { useParams } from 'react-router-dom';
import { store } from '../../store';
import { createSlug } from '../slug';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const PitchCard = ({ pitch, border }) => {
  const {isLogged, setShowLogin, setlink } = store()

  const login = ()=>{
    setShowLogin(true)
    setlink(`/pitch/${createSlug(pitch.title)}`)
    
  }

  return (

    <div className={`flex flex-col ${border && 'border border-[#D2D2CF]'}`}>
          
      <LazyLoadImage
    alt="Pitch deck"
    effect="blur"
    // style={{display: 'block'}}
    src={pitch.coverImageUrl}
    className="w-full"
   />
      <div className='p-3 laptop:p-[14px] desktop:p-4 bg-white'>
        {!isLogged ? <>
        <div className='flex justify-between mb-1' onClick={login}>
            <p className='text-16 font-medium text-[#2E2E27] P-3 text-20 tablet:font-bold'>{pitch.title}</p>
              <img src={Arrow} alt="Arrow Up" className='w-[22.14px] h-[22.14px]' />
          </div>

          <p className='text-12 font-normal text-[#2E2E27] P-3 flex'>{pitch.contentImagesUrls?.length} pages <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7.5" cy="8.97321" r="1.5" fill="#2E2E27" />
          </svg> Raised {pitch.amountRaised} pre-seed</p>
          </>  :  <Link to={{
          pathname: `/pitch/${createSlug(pitch.title)}`,
          state: { id: pitch._id }
        }}> 
          <div className='flex justify-between mb-1'>
            <p className='text-16 font-medium text-[#2E2E27] P-3 text-20 tablet:font-bold'>{pitch.title}</p>
            <img src={Arrow} alt="Arrow Up" className='w-[22.14px] h-[22.14px]' />
          </div>

          <p className='text-12 font-normal text-[#2E2E27] P-3 flex'>{pitch?.contentImagesUrls?.length} pages <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7.5" cy="8.97321" r="1.5" fill="#2E2E27" />
          </svg> Raised {pitch.amountRaised} pre-seed</p>
        </Link>}
      </div>
    </div>
  )
}

export default PitchCard