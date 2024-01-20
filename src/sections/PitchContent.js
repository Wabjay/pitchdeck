import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from '../lib/axios';
import Loading from '../component/LoadingComponent';
import SearchPitch from '../component/pitchdeck/SearchPitch';
import DynamicListComponent from '../component/PitchAndTemplateArray';
import { Tags } from '../lib/data';
import { store } from '../store';


const loadTemplates = async () => {
  const response = await axios.get('/templates/getTemplates');
  const templates = response.data;
  return templates;
};

const sortOrSearch = async (active, query) => {
  // If Selected Tag is All decks change the value to All and fetch
  const activeTag = active.includes('All decks') ? 'All' : active;

  // If the search query is empty, change the url to tag url and fetch All
  const QueryTag = active === 'All' ? 'filter?tag=' : query;

  console.log(QueryTag)
  try {
    const response = await axios.get(`/pitch/${QueryTag}${activeTag}`);
    return response.data

  } catch (error) {
    console.error('Error in sort function:', error);
    throw error; // Re-throw the error to propagate it further
  }
};

const PitchContent = () => {
  const [active, setActive] = useState('All decks');
  const [query, setQuery] = useState('filter?tag=');
  const { setTags, tags, fetchTemplates, setIsComponentLoading, fetchPitches } = store();


  // Get Tag
  const sortTag = (tag) => {
    // Set Query url to sort
    setQuery('filter?tag=')
    setActive(tag)
    console.log(tag)
  }

  // Get Input from search component
  const search = (res) => {
    // Set Query url to search
    setQuery('search?title=')
    // If Input is empty change the value to All and fetch
    setActive(res === '' ? 'All' : res)
  }

  // Fetch Pitch based on query
  const { data: loadedPitches, isLoading, } = useQuery({
    queryFn: () => sortOrSearch(active, query),
    queryKey: ['pitches', { active, query }]
  });

  // Fetch All Templates
  const { data: loadedTemplates } = useQuery('templates', loadTemplates);


  useEffect(() => {
    if (isLoading) {
      setIsComponentLoading(true);
    } else {
      setIsComponentLoading(false);
    }
    fetchTemplates(loadedTemplates);
    fetchPitches(loadedPitches);
  }, [fetchPitches, fetchTemplates, isLoading, loadedPitches, loadedTemplates, setIsComponentLoading]);

  useEffect(() => {
    setTags(Tags);
  }, [setTags]);

  return (
    <div className='w-full bg-[#F2F1E8]' id='pricing'>
      <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0 pb-[40px] tablet:pb-[80px] laptop:pb-[100px]'>
        <SearchPitch enterSearch={search} />
        <div className='flex flex-wrap justify-center gap-x-2 gap-y-[10px] mb-6 desktop:mb-[50px] desktop:gap-x-6'>
          {tags.map(tag => (
            <p key={tag} onClick={()=>sortTag(tag)} className={`cursor-pointer bg-white text-14 font-medium rounded-[9999px] px-3 py-[6px] border hover:border-[#21AB68] ${active === tag ? "border-[#21AB68]" : "border-[#d2d2cf]"}`}>{tag}</p>
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