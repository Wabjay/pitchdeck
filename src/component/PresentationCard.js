import React from 'react'

const PresentationCard = ({image, title, description}) => {
  return (
    <div className='flex flex-col items-center justify-center lg:basis-1/3 max-w-[368px]'>
        <img src={image} className='w-[80px] h-[80px] mb-6' alt="Pesentation Icon"/>
        <p className='font-bold leading-8 text-[24px] text-[#2E2E27] mb-2'>{title}</p>
        <p className='text-[20px] font-normal leading-[28px] text-[#64645F]'>{description}</p>
    </div>
  )
}

export default PresentationCard