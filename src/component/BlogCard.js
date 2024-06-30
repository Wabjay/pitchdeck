import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Arrow from "./../assets/arrowRight.svg"
import { useParams } from 'react-router-dom';
import LoadImage from './LoadImage';
import Skeleton from './Skeleton';
import { createSlug } from './slug';
import { store } from '../store';



const BlogCard = ({ image, date, id, title }) => {

  const {getBlogId, getBlogTitle} = store()
  let params = useParams();

  const changeUrl = (id, title)=>{
  getBlogId(id)
    getBlogTitle(title)
  // console.log(id, title)
  }
  return (
    <div className='h-fit tablet:pb-[80px] laptop:pb-0'>
      <LoadImage src={image} style={`mb-6 w-full h-full max-h-[342px]`} alt={title}  />
      {(!params.id && title) && <p className='text-[#64645F] text-[16px] leading-6'><Skeleton>{date}</Skeleton></p>}
        <p className='my-2 text-[#2E2E27] text-[16px] font-[600] leading-[22px] laptop:text-[20px] laptop:font-bold laptop:leading-[28px] tracking-[-0.8px]' dangerouslySetInnerHTML={{ __html: (title?.length > 70 ?
        `${title?.substring(0, 70)} ...` : title) }}></p>
      <Link to={{
        pathname: `/blogpost/${createSlug(title)}`,
        state: { id: id },
       
      }} className='flex w-fit items-center' onClick={()=>changeUrl(id, title)}>
   
        <p className='text-[#21AB68] text-[16px] font-medium leading-[22px]'>Read more</p>
        <img src={Arrow} alt="" />
      </Link>
    </div>
  )
}

export default BlogCard