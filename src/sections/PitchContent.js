import SearchPitch from '../component/pitchdeck/SearchPitch'
import PitchCard from '../component/pitchdeck/PitchCard'
import { Tags } from '../lib/data'
import { store } from '../store'
import { useEffect } from 'react'
import axios from '../lib/axios'

const PitchContent = () => {

  // Sort by tag
  const sort = (tag)=>{
    console.log(tag.target.textContent)
    // set items = content filtered by tag
  }

  const {setTags, tags, pitches, setIsLoading, fetchPitches} = store()

  useEffect(()=>{
    setTags(Tags)
  },[setTags]) 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=> {
    // eslint-disable-next-line no-unused-expressions
      setIsLoading(true);
    try {
       axios.get('/pitch/getAll')
      .then(function (response) {
      fetchPitches(response.data.pitchDecks)
      setIsLoading(false);
       
      })
      
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
},[fetchPitches, setIsLoading]) 


//   useEffect(()=> {
//       fetchPitches()
// },[fetchPitches, setIsLoading]) 


  return (
    <div className='w-full bg-[#F2F1E8]' id='pricing'>
      <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0 pt-[25px] pb-[40px] tablet:pb-[80px] laptop:pb-[100px]'>
        <SearchPitch />

        <div className='flex flex-wrap justify-center gap-x-2 gap-y-[10px] mb-6 desktop:gap-x-6'>
          {tags.map(tag => (
            <p key={tag} onClick={sort} className=' cursor-pointer bg-white text-14 font-medium rounded-[9999px] px-3 py-[6px] border border-[#d2d2cf]'>{tag}</p>
          ))}
        </div>

        <div className='grid tablet:grid-cols-2 laptop:grid-cols-3 gap-6 tablet:gap-[30px] laptop:flex-row laptop:gap-[30px]'>
        
        
        {/* The real pitch file */}
          {pitches.map(item => (

          // {/* {items.map(item => ( */}
              <PitchCard
               key={item._id}
                 pitch={item} 
                 />
          ))}


        </div>

      </div>
    </div>
  )
}

export default PitchContent