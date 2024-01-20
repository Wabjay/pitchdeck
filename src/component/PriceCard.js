import Phone from "./../assets/phone.png"
import LoadImage from "./LoadImage";

export const PriceCard = ({ product }) => {

  return (
    <div className={`w-full max-w-[500px] mx-auto basis-1/3 p-8 border border-[#D2D2CF] ${product.color === "green" ? 'bg-[#061F13] text-white' : 'bg-[#F2F1E8] text-[#2E2E27]'}`}>
      <h3 className='mb-6 text-[24px] font-bold leading-8 tracking-[-0.96px]'>{product.plan}</h3>
      <h2 className='my-8 text-[48px] font-bold leading-10 tracking-[-1px]'>${product.price} <span className='text-[16px] leading-6'>per presentation</span></h2>
      <a href={product.link} target='_blank' rel='noreferrer'
        className="w-full my-8 bg-[#21AB68] border-[#21AB68] hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink inline-flex items-center justify-center p-2 text-[#ffffff]  font-sm leading-5 font-medium focus:outline-none ">
        {product.text}</a>
      <ul className={`pt-8 border-t-[0.5px] border-[#D5DDDC] flex flex-col gap-6`}>
        {product.benefits.map((benefit, i) => <li key={i} className={`pl-10 bg-left bg-[length:24px] bg-no-repeat text-[16px] leading-6 tablet:text-[20px] tablet:leading-7 ${product.color === "green" ? 'bg-white-tick' : 'bg-green-tick'}`}>{benefit}</li>)}
      </ul>
    </div>
  )
}


export const SupportCard = () => {


  return (
    <div className={`w-full max-w-[500px] mx-auto basis-1/3 p-8 border border-[#E3E3E2] bg-[#FFFFFF] text-[#2E2E27] text-center flex flex-col justify-center items-center`}>
      
      <div className={`w-[120px] h-[120px]`} >
      <LoadImage
        alt="Telephone"
        src={Phone}
      />
      </div>
      <h3 className='mb-6 text-[24px] font-bold leading-8 tracking-[-0.96px]'>Have Questions for us?</h3>
      <h7 className='text-[#64645F] text-[16px] leading-6 tablet:text-[20px] tablet:leading-7'>Learn more about how pitchdeck.design works and how it can help you.</h7>
      <a href='https://cal.com/olayanjuidris/pptdesignercall' target='_blank' rel='noreferrer'
        className="w-full my-8 bg-[#21AB68] border-[#21AB68] hover:bg-[#3E7B52] hover:border-[#3E7B52] shadow-navbarLink inline-flex items-center justify-center p-2 text-[#ffffff]  font-sm leading-5 font-medium focus:outline-none ">
        Schedule a call</a>
    </div>
  )
}
