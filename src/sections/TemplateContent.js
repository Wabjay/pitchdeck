import { store } from '../store'
import { useMemo } from 'react'
import axios from '../lib/axios'
import TemplateCard from '../component/template/TemplateCard'

const TemplateContent = () => {

  const { templates, setIsLoading, fetchTemplates } = store()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => {
    // eslint-disable-next-line no-unused-expressions
    templates === null &&
    setIsLoading(true);
    try {
      axios.get('/templates/getTemplates')
        .then(function (response) {
          fetchTemplates(response.data)
          setIsLoading(false);
        })

    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  }, [fetchTemplates, setIsLoading])

  return (
    <div className='w-full bg-[#F2F1E8]' id='pricing'>
      <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0 pt-[25px] pb-[40px] tablet:pb-[80px] laptop:pb-[100px]'>
        <div className='grid tablet:grid-cols-2 laptop:grid-cols-3 gap-6 tablet:gap-[30px] laptop:flex-row laptop:gap-[30px]'>
          {templates.map(item => (
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