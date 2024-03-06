
const Faq = () => {

  const faqs = [{
    question: "What is Pitchdeck Design?",
    answer: "Pitchdeck Design helps your business create wonderful pitch deck and presentation design for your next project and help your business standout."
  },
  {
    question: "Who is this for?",
    answer: "Pitchdeck Design is for companies or business people that find it difficult in creating designs for their powerpoint presentation."
  },
  {
    question: "Can you incorporate branding elements into the Pitchdeck Design?",
    answer: "Absolutely! We understand the importance of consistent branding across all communication channels. Our designers can seamlessly integrate your company's logo, color palette, typography, and other branding elements into the pitch deck design to ensure a cohesive visual identity."
  },
  {
    question: "How long does it take to create a beautiful presentation design?",
    answer: "The timeline for creating a pitch deck design depends on various factors such as the complexity of the content, the level of customization required and the plan subscribed to .  We have a plan for 4-7 days and another plan of 1-3 days depending on how fast you want it"
  },
  {
    question: "Can you help with content development for the pitch deck?",
    answer: "While our primary focus is on design, we understand the importance of compelling content in a pitch deck. We can provide guidance and best practices for structuring and refining your pitch deck content to ensure it effectively communicates your key messages and engages the audience."
  },
  {
    question: "What file formats will I receive for the final pitch deck design?",
    answer: "We provide the final pitch deck design in various file formats, including PowerPoint (PPTX), PDF, . This allows you to easily present and share your pitch deck across different platforms and devices."
  },
  {
    question: "Do you offer revisions after the initial design is delivered?",
    answer: "Yes, we offer a certain number of revisions based on the package or service you choose. We understand that feedback and changes may be necessary to achieve the desired outcome, and we strive to ensure your satisfaction with the final presentation  design."
  }, {
    question: "How much does your service cost?",
    answer: "We offer different packages tailored to meet various budgets and needs. You can select a standard plan or a pro plan"
  }, {
    question: "What tools do you use for design?",
    answer: "Depending on how challenging the presentation is, we use figma to create illustration and assets and transfer those assets to powerpoint to support our design work on powerpoint."
  },
  {
    question: "Do you add illustrations and stock pictures of your designs?",
    answer: "We offer illustrations as part of the pro plan along with using stock pictures to support the content and give it visual context."
  }
  ]
  return (
    <div className='w-full bg-[#EEFCF5]' id='faq'>
      <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]'>
        <p className='text-center  mb-5 tablet:mb-10 laptop:mb-[50px] text-[#0E0829] text-[24px] font-bold leading-8 tracking-[-0.96px] tablet:text-[32px] tablet:leading-[39px] tablet:tracking-[-1px] laptop:text-[48px] laptop:leading-[40px]'>Frequently asked Questions</p>

        <ul className="w-full mx-auto divide-y">
          {faqs.map(faq => <li key={faq.question}>
            <details className="group mb-6 p-6 bg-white border border-[#D2D2CF] rounded-[12px]">
              <summary className="flex w-full justify-between items-center font-medium marker:content-none hover:cursor-pointer">

                <span className='w-[90%] text-[#121416] text-[14px] leading-[20px] font-[600]  tablet:text-[16px] tablet:leading-[22px] laptop:text-[20px] laptop:leading-[28px] laptop:font-bold'>{faq.question}</span>

                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="17" y="8" width="2" height="16" rx="1" transform="rotate(90 17 8)" fill="#121416" stroke="#121416" />
                  <rect x="8" y="1" width="2" height="16" rx="1" fill="#121416" stroke="#121416" className="block group-open:hidden" />
                </svg>
              </summary>

              <article className="">
                <p className='text-[14px] pt-2 leading-5 tablet:text-[16px] tablet:leading-6 laptop:text-[20px] laptop:leading-[28px] text-[#50555B] w-[90%]'>
                  {faq.answer}
                </p>
              </article>
            </details>
          </li>)}

        </ul>
      </div>
    </div>)
}

export default Faq