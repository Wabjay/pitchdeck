import Arrow from "./../assets/arrowUp.svg"
import LoadImage from "./LoadImage";
export const WorkCardImage = ({ image, title, description, link }) => {
  return (
    <div className='w-full tablet:max-w-[600px] laptop:w-[468px]  xl:w-[560px]'>
      <div className="{`w-full h-[209px] tablet:h-[381px] laptop:h-[338px] xl:h-[405px]`}">
      <LoadImage
        alt="work pictures"
        src={image}
        />
 </div>
      <a href={link} className='flex w-fit items-center mt-6'
        target='_blank' rel="noreferrer">
        <h2 className='text-[#2E2E27] text-[16px] font-[600] leading-[22px] tablet:text-[20px] tablet:font-bold tablet:leading-[28px] tablet:tracking-[-0.8px] laptop:text-[24px] laptop:leading-[32px] laptop:tracking-[-0.96px]'>{title}</h2>
        <img src={Arrow} alt="" width="32px" height="32px" />
      </a>
      <h7 className='text-[#2E2E27] text-[16px] leading-6 mt-2'>{description}</h7>
    </div>
  )
}

export const WorkCard = ({ author, position, description }) => {
  return (
    <div className='border-[3px] border-[#3E7B52] bg-white p-6 w-full tablet:max-w-[600px]'>
      <p className='text-[#1E1E1E] text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[24px] laptop:leading-[32px]'>{description}</p>
      <h2 className='mt-6 mb-2 text-[#2E2E27] text-[16px] font-[600] leading-[22px] tablet:text-[20px] tablet:font-bold tablet:leading-[28px] tablet:tracking-[-0.8px] laptop:text-[24px] laptop:leading-[32px] laptop:tracking-[-0.96px]'>{author}</h2>
      <h7 className='text-[#0E0829] text-[16px] leading-6 laptop:text-[20px] laptop:leading-[28px]'>{position}</h7>
    </div>
  )
}