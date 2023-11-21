import React from 'react'

const Faq = () => {

  const faqs =[{
    question: "What is Ppt designer",
    answer: "Absolutely! We understand the importance of consistent branding across all communication channels. Our designers can seamlessly integrate your company's logo, color palette, typography, and other branding elements into the pitch deck design to ensure a cohesive visual identity."
  },
  {
    question: "Who is this for",
    answer: "Absolutely! We understand the importance of consistent branding across all communication channels. Our designers can seamlessly integrate your company's logo, color palette, typography, and other branding elements into the pitch deck design to ensure a cohesive visual identity."
  },
  {
    question: "Can you incorporate branding elements into the pitch deck design?",
    answer: "Absolutely! We understand the importance of consistent branding across all communication channels. Our designers can seamlessly integrate your company's logo, color palette, typography, and other branding elements into the pitch deck design to ensure a cohesive visual identity."
  },
  {
    question: "Which payment options and currencies do you accept",
    answer: "Absolutely! We understand the importance of consistent branding across all communication channels. Our designers can seamlessly integrate your company's logo, color palette, typography, and other branding elements into the pitch deck design to ensure a cohesive visual identity."
  },
  {
    question: "How long does it take to create a beautiful presentation  design?",
    answer: "Absolutely! We understand the importance of consistent branding across all communication channels. Our designers can seamlessly integrate your company's logo, color palette, typography, and other branding elements into the pitch deck design to ensure a cohesive visual identity."
  },
  {
    question: "How much does your service cost?",
    answer: "Absolutely! We understand the importance of consistent branding across all communication channels. Our designers can seamlessly integrate your company's logo, color palette, typography, and other branding elements into the pitch deck design to ensure a cohesive visual identity."
  },
  {
    question: "What tools do you use for design?",
    answer: "Absolutely! We understand the importance of consistent branding across all communication channels. Our designers can seamlessly integrate your company's logo, color palette, typography, and other branding elements into the pitch deck design to ensure a cohesive visual identity."
  },
  {
    question: "Do you add illustrations and stock pictures your designs ?",
    answer: "Absolutely! We understand the importance of consistent branding across all communication channels. Our designers can seamlessly integrate your company's logo, color palette, typography, and other branding elements into the pitch deck design to ensure a cohesive visual identity."
  }
]
  return (
    <div className='w-full bg-[#EEFCF5]'>
    <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]'>
    <p className='text-center  mb-5 tablet:mb-10 laptop:mb-[50px] text-[#0E0829] text-[24px] font-bold leading-8 tracking-[-0.96px] tablet:text-[32px] tablet:leading-[39px] tablet:tracking-[-1px] laptop:text-[48px] laptop:leading-[40px]'>Frequently asked Questions</p>

    <ul class="w-full mx-auto mt-20">
   {faqs.map(faq => <li key={faq.question}>
        <details class="group mb-6 p-6 bg-white border border-[#D2D2CF] rounded-[12px]">
       <summary class="flex w-full justify-between items-center font-medium  hover:cursor-pointer">

         <span className='text-[#121416] text-[14px] leading-[20px] font-[600]  tablet:text-[16px] tablet:leading-[22px] laptop:text-[20px] laptop:leading-[28px] laptop:font-bold'>{faq.question}</span>
      
         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
           <rect x="17" y="8" width="2" height="16" rx="1" transform="rotate(90 17 8)" fill="#121416" stroke="#121416" />
           <rect x="8" y="1" width="2" height="16" rx="1" fill="#121416" stroke="#121416"  class="block group-open:hidden" />
         </svg>
       </summary>

            <article class="">
                <p className='text-[14px] pt-2 leading-5 tablet:text-[16px] tablet:leading-6 laptop:text-[20px] laptop:leading-[28px] text-[#50555B] w-[90%]'>
                  {faq.answer}
                </p>
            </article>
        </details>
    </li> )} 
  

</ul>
</div>
      </div>  )
}

export default Faq