import { useState } from 'react'
import Search from '../../assets/search.svg'




export default function SearchPitch({enterSearch}) {
  const [search, setSearch] =useState('')
 
const searchInput =(e)=>{
  setSearch(e.target.value)
  enterSearch(e.target.value)
}
  return (
    <div className='flex gap-2 p-3 bg-white w-full max-w-[560px] mx-auto border-[#C1C9C8] hover:border-myGreen-400 border mb-6 desktop:mb-10'>
        <img src={Search} alt="serach icon"  width="24px"height='24px'/>
        <input type="text" placeholder='Search for a pitchdeck' value={search} onChange={searchInput} className='outline-none w-full' />
    </div>
  )
}
