import { HashLink } from 'react-router-hash-link';
import { tags } from '../../lib/category';
import { useEffect, useState } from 'react';


const TagsHero = ({title}) => {

  const [data, setData] = useState('')



useEffect(()=>{
  tags.map(cat => cat.title.toLowerCase() === title.replace(/-/g, ' ') && setData(cat))
},[title])

  return (
    <div className='bg-[#F2F1E8] '>
       <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 text-center py-[40px] tablet:py-[80px] laptop:py-[100px]'>
      <div className='w-[288px] tablet:w-[524px] laptop:w-[815px] mx-auto'>
      <h1 className='text-[32px] font-bold leading-[39px] tracking-[-1px] tablet:text-[48px] tablet:leading-[40px] laptop:text-[64px] laptop:leading-[72px] laptop:tracking-[-2px] text-[#2E2E27] mb-6 capitalize'>{data.title}</h1>
      <h2 className='text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[24px] laptop:leading-8 text-[#64645F] mb-[40px]'>{data.desc}</h2>
      </div>
    </div>
    </div>
   
  )
}

export default TagsHero