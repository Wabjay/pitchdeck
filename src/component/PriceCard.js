import Phone from "./../assets/phone.png"
import LoadImage from "./LoadImage";

export const PriceCard = ({ product }) => {

  return (
    <div className={` basis-1/3 p-8 border border-[#E3E3E2] ${product.color === "green" ? 'bg-[#061F13] text-white' : 'bg-[#D5DDDC] text-[#2E2E27]'}`}>
      <p className='mb-6 text-[24px] font-bold leading-8 tracking-[-0.96px]'>{product.plan}</p>
      <p className='my-8 text-[48px] font-bold leading-10 tracking-[-1px]'>${product.price} <span className='text-[16px] leading-6'>per presentation</span></p>
      <a href={product.link} target='_blank' rel='noreferrer'
        className="w-full my-8 bg-[#21AB68] border-[#21AB68] shadow-navbarLink inline-flex items-center justify-center p-2 text-[#ffffff]  font-sm leading-5 font-medium focus:outline-none ">
        {product.text}</a>
      <div className={`pt-8 border-t-[0.5px] border-[#D5DDDC] flex flex-col gap-6`}>
        {product.benefits.map((benefit, i) => <p key={i} className={`pl-10 bg-left bg-[length:24px] bg-no-repeat text-[16px] leading-6 tablet:text-[20px] tablet:leading-7 ${product.color === "green" ? 'bg-white-tick' : 'bg-green-tick'}`}>{benefit}</p>)}
      </div>
    </div>
  )
}


export const SupportCard = () => {


  return (
    <div className={`basis-1/3 p-8 border border-[#E3E3E2] bg-[#FFFFFF] text-[#2E2E27] text-center flex flex-col justify-center items-center`}>
      <LoadImage
        alt="Telephone"
        src={Phone}
        style={`w-[120px] h-[120px]`} />
      <p className='mb-6 text-[24px] font-bold leading-8 tracking-[-0.96px]'>Have Questions for us?</p>
      <p className='text-[#64645F] text-[16px] leading-6 tablet:text-[20px] tablet:leading-7'>Learn more about how pptdesigner works and how it can help you.</p>
      <a href='https://cal.com/olayanjuidris/pptdesignercall' target='_blank' rel='noreferrer'
        className="w-full my-8 bg-[#21AB68] border-[#21AB68] shadow-navbarLink inline-flex items-center justify-center p-2 text-[#ffffff]  font-sm leading-5 font-medium focus:outline-none ">
        Schedule a call</a>
    </div>
  )
}
