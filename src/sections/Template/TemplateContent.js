import { store } from '../../store'
import { useEffect, useMemo } from 'react'
import axios from '../../lib/axios'
import TemplateCard from '../../component/template/TemplateCard'
import { useQuery } from 'react-query';
import { loadTemplates } from '../../lib/functions';



const TemplateContent = () => {

  const { fetchTemplates, templates, setIsComponentLoading, componentLoading } = store();



  // Fetch All Templates
  const { data: loadedTemplates, isLoading } = useQuery('templates', loadTemplates);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    // templates === null &&
    setIsComponentLoading(isLoading);
    fetchTemplates(loadedTemplates);

  }, [fetchTemplates, templates, setIsComponentLoading, componentLoading, isLoading, loadedTemplates])

  return (
    <div className='w-full bg-white' id='pricing'>
      <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0 pt-[25px] pb-[40px] tablet:pb-[80px] laptop:pb-[100px]'>
        <div className='grid tablet:grid-cols-2 laptop:grid-cols-3 gap-6 tablet:gap-[30px] laptop:flex-row laptop:gap-[30px]'>
          {templates?.map(item => (
            <TemplateCard
              key={item._id}
              template={item}
            />
          ))}
        </div>
     </div>
    </div>
  )
}

export default TemplateContent