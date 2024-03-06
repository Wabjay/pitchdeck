import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from '../lib/axios';
import Loading from '../component/LoadingComponent';
import SearchPitch from '../component/pitchdeck/SearchPitch';
import DynamicListComponent from '../component/pitchdeck/PitchAndTemplateArray';
import { store } from '../store';
import { loadPitches, loadTemplates } from '../lib/functions';




const PitchContent = () => {
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
        const newArray = loadedPitches.filter(pitch => wordsArray.some(word =>  pitch.tag.toLowerCase().includes(word) || pitch.amountRaised.includes(word)  || pitch.title.toLowerCase().includes(word) || pitch.about.includes(word.length > 2 && word)));
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
    <div className='w-full bg-[#F2F1E8]' id='pricing'>
      <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0 pb-[40px] tablet:pb-[80px] laptop:pb-[100px]'>
        <SearchPitch enterSearch={search} />
        <div className='flex flex-wrap justify-center gap-x-2 gap-y-[10px] mb-6 desktop:mb-[50px] desktop:gap-x-6'>
          {tags?.map(tag => (
            <p key={tag._id} onClick={() => sortTag(tag)} className={`cursor-pointer bg-white text-14 font-medium rounded-[9999px] px-3 py-[6px] border hover:border-[#21AB68] capitalize ${activeTag === tag ? "border-[#21AB68]" : "border-[#d2d2cf]"}`}>{tag}</p>
          ))}
        </div>
        <div className='grid tablet:grid-cols-2 laptop:grid-cols-3 gap-6 tablet:gap-[30px] laptop:flex-row laptop:gap-[30px] min-h-[200px] relative h-fit'>
          <Loading />
          <DynamicListComponent />
        </div>
      </div>
    </div>
  )
}

export default PitchContent