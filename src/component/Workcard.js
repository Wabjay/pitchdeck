import React from 'react'
import Arrow from "./../assets/arrowUp.svg"

export const WorkCardImage = ({image, title, description, link}) => {
  return (
    <div className='w-full md:max-w-[600px] lg:w-[468px]  xl:w-[560px]'>
        <img src={image} className='w-full h-[209px] md:h-[381px] lg:h-[338px] xl:h-[405px]' alt="work pictures" />
     
     <a  href={link} className='flex w-fit items-center mt-6'
    target='_blank' rel="noreferrer">
        <p className='text-[#2E2E27] text-[16px] font-[600] leading-[22px] md:text-[20px] md:font-bold md:leading-[28px] md:tracking-[-0.8px] lg:text-[24px] lg:leading-[32px] lg:tracking-[-0.96px]'>{title}</p>
        <img src={Arrow} alt="" />
        </a>
        <p className='text-[#2E2E27] text-[16px] leading-6 mt-2'>{description}</p>
    </div>
  )
}

export const WorkCard = ({author, position, description}) => {
    return (
      <div className='border-[3px] border-[#3E7B52] bg-white p-6 w-full md:max-w-[600px]'>
          <p className='text-[#1E1E1E] text-[16px] leading-6 md:text-[20px] md:leading-[28px] lg:text-[24px] lg:leading-[32px]'>{description}</p>
          <p className='mt-6 mb-2 text-[#2E2E27] text-[16px] font-[600] leading-[22px] md:text-[20px] md:font-bold md:leading-[28px] md:tracking-[-0.8px] lg:text-[24px] lg:leading-[32px] lg:tracking-[-0.96px]'>{author}</p>
          <p className='text-[#0E0829] text-[16px] leading-6 lg:text-[20px] lg:leading-[28px]'>{position}</p>
      </div>
    )
  }