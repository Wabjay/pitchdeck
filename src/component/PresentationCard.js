import LoadImage from "./LoadImage"

const PresentationCard = ({image, title, description}) => {
  return (
    <div className='flex flex-col items-center justify-center laptop:basis-1/3 max-w-[368px]'>
      <LoadImage src={image} alt="Pesentation Icon" style={`w-[80px] h-[80px] mb-6`} />
        <p className='font-semibold leading-[22px] text-[16px] text-[#2E2E27] mb-2 tablet:text-[20px] tablet:font-bold tablet:leading-[28px] tablet:tracking-[-0.8px] laptop:text-[24px] laptop:leading-8 '>{title}</p>
        <p className='text-[16px] font-medium leading-[22px] text-[#64645F] laptop:text-[20px] laptop:leading-[28px]'>{description}</p>
    </div>
  )
}

export default PresentationCard