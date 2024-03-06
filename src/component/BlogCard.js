import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Arrow from "./../assets/arrowRight.svg"
import { useParams } from 'react-router-dom';
import LoadImage from './LoadImage';
import Skeleton from './Skeleton';
import { createSlug } from './slug';
import { store } from '../store';



const BlogCard = ({ image, date, id, desc }) => {

  const {getBlogId} = store()
  let params = useParams();
  
  useEffect(()=>{
    getBlogId(id)
  },[getBlogId, id])
  return (
    <div className='h-fit tablet:pb-[80px] laptop:pb-0'>
      <LoadImage src={image} style={`mb-6 w-full h-full max-h-[342px]`} alt={desc.substring(0, 20)}  />
      {!params.id && <p className='text-[#64645F] text-[16px] leading-6'><Skeleton>{date}</Skeleton></p>}
        <p className='my-2 text-[#2E2E27] text-[16px] font-[600] leading-[22px] laptop:text-[20px] laptop:font-bold laptop:leading-[28px] tracking-[-0.8px]' dangerouslySetInnerHTML={{ __html: (desc.length > 70 ?
        `${desc.substring(0, 70)} ...` : desc) }}></p>
      <Link to={{
        pathname: `/blogpost/${createSlug(desc.substring(0, 20))}`,
        state: { id: id },
       
      }} className='flex w-fit items-center'>
        <p className='text-[#21AB68] text-[16px] font-medium leading-[22px]'>Read more</p>
        <img src={Arrow} alt="" />
      </Link>
    </div>
  )
}

export default BlogCard