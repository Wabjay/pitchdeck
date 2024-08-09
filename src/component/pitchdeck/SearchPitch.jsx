import { useState } from 'react'
import Search from '../../assets/search.svg'




export default function SearchPitch({enterSearch}) {
  const [search, setSearch] =useState('')
 
const searchInput =(e)=>{
  setSearch(e.target.value)
  enterSearch(e.target.value.toLowerCase())
}
  return (
    <div className='flex gap-2 p-3 bg-white w-[80%] tablet:!w-[50%] max-w-[560px] border-[#C1C9C8] hover:border-myGreen-400 border'>
        <img src={Search} alt="search icon"  width="24px"height='24px'/>
        <input type="text" placeholder='Search for a pitchdeck' value={search} onChange={searchInput} className='outline-none w-full' />
    </div>
  )
}
