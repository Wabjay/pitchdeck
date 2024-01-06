import React from 'react'
import Search from '../../assets/search.svg'

export default function SearchPitch() {


  return (
    <div className='flex gap-2 p-3 bg-white w-full max-w-[560px] mx-auto border-[#C1C9C8] border mb-6'>
        <img src={Search} alt="serach icon"  className='w-6 h-6'/>
        <input type="text" placeholder='Search for a pitchdeck' className='outline-none w-full' />
    </div>
  )
}
