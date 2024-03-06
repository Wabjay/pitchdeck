/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import Arrow from "../../assets/arrowUp.svg"
import { createSlug } from '../slug';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Skeleton from '../Skeleton';
import LoadImage from '../LoadImage';



const TemplateCard = ({ template }) => {


  return (
    <Link to={{
      pathname: `/template/${createSlug(template.name)}`,
      state: { id: template._id }
    }}>
      <div className={`flex flex-col h-full border border-[#D2D2CF] hover:border-[#21AB68] hover:border-[2px]`}>
       <LoadImage
           alt="Template deck"
           effect="blur"
           src={template?.templateCoverImageUrl}
          height={240}
          style={`w-full h-full max-h-[240px]`}
        />

        <div className='p-3 laptop:p-[14px] desktop:p-4 bg-white'>
          <div className='flex justify-between mb-1'>
            <Skeleton > <h5 className='text-16 font-medium text-[#2E2E27] P-3 text-20 tablet:font-bold'>{template.name}</h5> </Skeleton>
            <Skeleton height={24} width={24}> <img src={Arrow} alt="Arrow Up" width="24px" height='24px' className='hover:border-[#F2F1E8] hover:border hover:bg-[#F2F1E8]' /></Skeleton>
          </div>
         


          <p className='text-12 font-normal text-[#2E2E27] P-3 flex'>
            <Skeleton> {template?.numberOfPages} pages </Skeleton>
            <Skeleton height={0}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="7.5" cy="8.97321" r="1.5" fill="#2E2E27" />
              </svg>{template.cost.dollar}
            </Skeleton>
          </p>

        </div>
      </div>
    </Link>

  )
}

export default TemplateCard