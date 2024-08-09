import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from '../../lib/axios';
import Loading from '../../component/LoadingComponent';
import SearchPitch from '../../component/pitchdeck/SearchPitch';
import DynamicListComponent from '../../component/pitchdeck/PitchAndTemplateArray';
import { store } from '../../store';
import { loadPitches, loadTemplates } from '../../lib/functions';




const PitchContent = ({loggedIn}) => {
  const [searchInput, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All decks');


  const { tags, fetchTemplates, setIsComponentLoading, fetchPitches, componentLoading } = store();


  // Get Tag
  const sortTag = (tag) => {
    setActiveTag(tag)
    setSearch('')
  }

  // Get Input from search component
  const search = (res) => setSearch(res)


  // Fetch Pitch based on query
  const { data: loadedPitches, isLoading, } = useQuery('pitches', loadPitches);

  // Fetch All Templates
  const { data: loadedTemplates } = useQuery('templates', loadTemplates);


  useEffect(() => {
    setIsComponentLoading(isLoading);
    const wordsArray = searchInput?.split(/\s+/);
    const sortPitchesByTagOrSearchInput = () => {
      if (activeTag === 'All decks' && !searchInput) {
        return loadedPitches;
      }
      // If name is provided but keyword is not, return object containing the name
      if (activeTag && !searchInput) {
        return loadedPitches?.filter(pitch => pitch.tag === activeTag);
      }

      // Filter the original array to get objects containing the keyword
      if (searchInput) {
        setActiveTag('All decks')
        // return loadedPitches.filter(pitch => pitch.title.toLowerCase().includes(wordsArray) || pitch.about.includes(wordsArray));
        const newArray = loadedPitches.filter(pitch => wordsArray.some(word =>  pitch.tag.toLowerCase().includes(word) || pitch.amountRaised.includes(word)  || pitch.title.toLowerCase().includes(word) || (pitch.about.includes(word) && word.length > 2)));
        return newArray
      }
      if (!searchInput && !activeTag) {
        return loadedPitches;
      }
      if (searchInput) {
        setActiveTag('All decks')
        return loadedPitches.filter(pitch => pitch.title.toLowerCase().includes(wordsArray));
      }
      return loadedPitches;
    }

    fetchTemplates(loadedTemplates);
    fetchPitches(sortPitchesByTagOrSearchInput());


  }, [componentLoading, fetchPitches, fetchTemplates, isLoading, loadedPitches, loadedTemplates, searchInput, setIsComponentLoading, activeTag]);




  // useEffect(() => {
  //   const wordsArray = sentence.split(/\s+/);
  //   const isSentenceArray = wordsArray.map(word => {
  //     const lastChar = word.charAt(word.length - 1);
  //     return /[.!?]/.test(lastChar);
  //   });

  //   setWords(wordsArray);
  //   setIsSentence(isSentenceArray);
  // }, [sentence]);


  return (
    <div className='relative z-20 w-full bg-white' id='pricing'>
      <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]'>
        
        <div className='flex flex-col gap-4 tablet:!flex-row tablet:!gap-10 justify-between items-center mb-6'>
        <p className='text-20 font-bold whitespace-nowrap tablet:text-32 text-[#000]'>Pitch decks</p>  
        <SearchPitch enterSearch={search} />
        </div>
        <div className='flex flex-wrap justify-center tablet:!justify-start gap-x-2 gap-y-[10px] mb-6 desktop:gap-x-6'>
          {tags?.map(tag => (
            <p key={tag._id} onClick={() => sortTag(tag)} className={`cursor-pointer bg-white text-14 font-medium rounded-[9999px] px-3 py-[6px] border hover:border-[#21AB68] capitalize ${activeTag === tag ? "border-[#21AB68]" : "border-[#d2d2cf]"}`}>{tag}</p>
          ))}
        </div>
        <div className='grid tablet:grid-cols-2 laptop:grid-cols-3 gap-6 tablet:gap-[30px] laptop:flex-row laptop:gap-[30px] min-h-[200px] relative h-fit'>
          <Loading />
          <DynamicListComponent loggedIn={loggedIn} />
        </div>
      </div>
      <div className="absolute bottom-0 tablet:bottom-[50px] laptop:bottom-[70px]  left-0 w-full h-24 bg-gradient-to-b from-[rgba(243, 244, 246, 0.3)] to-white  filter blur-[2px] backdrop-blur-0"></div>
    </div>
  )
}

export default PitchContent