import React from 'react'
import { Link } from 'react-router-dom'
import Arrow from "./../assets/arrowRight.svg"
import { useParams } from 'react-router-dom';



const BlogCard = ({ image, date, id, desc }) => {

  let params = useParams();

  return (
    <div className='h-fit tablet:h-full tablet:pb-[80px] laptop:pb-0'>
      <img src={image} className='mb-6 w-full h-full max-h-[342px]' alt="" />
      {!params.id && <p className='text-[#64645F] text-[16px] leading-6'>{date}</p>}
        <p className='my-2 text-[#2E2E27] text-[16px] font-[600] leading-[22px] laptop:text-[20px] laptop:font-bold laptop:leading-[28px] tracking-[-0.8px]' dangerouslySetInnerHTML={{ __html: (desc.length > 70 ?
        `${desc.substring(0, 70)} ...` : desc) }}></p>
      <Link to={{
        pathname: `/blogpost/${id}`,
        state: { id: id }
      }} className='flex w-fit items-center'>
        <p className='text-[#21AB68] text-[16px] font-medium leading-[22px]'>Read more</p>
        <img src={Arrow} alt="" />
      </Link>
    </div>
  )
}

export default BlogCard