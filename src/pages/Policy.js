import React from 'react'

const Policy = () => {


    const policies = [
        {
            heading: "Privacy Policy",
            desc: 'This privacy policy (the "Policy") relates to the http://pptdesigner.co/ website operated by pptdesigner (“we,” “us,” or “our”) for the Pptdesigner product. This Policy outlines how we collect, use, disclose, and protect the personal information of our users and visitors.'
        },
        {
            heading: "Information Collection and Use",
            desc: "We may collect personal information, including but not limited to names, email addresses, and demographic information, when voluntarily provided by users for various purposes such as registration, communication, and product improvement. By providing such information, you consent to our collection and use of it as described in this Policy"
        },
        {
            heading: "Use of Personal Information",
            desc: "",
            list: ['We may use the personal information we collect for the following purposes:', '- Providing and personalizing our services', '- Communicating with users', '- Analyzing and improving our website and products', '- Conducting marketing and promotional activities' ]
        },
        {
            heading: "Disclosure of Personal Information",
            desc: "",
            list: ['We may disclose personal information to:', '- Service providers who assist us in operating our website and providing our services', '- Law enforcement agencies, government officials, or other third parties when required by law or to protect our rights and the rights of our users', '- Other parties in connection with a merger, acquisition, or sale of our business assets']
        },
        {
            heading: "Data Security",
            desc: "We employ industry-standard security measures to protect the personal information we collect. However, no method of transmission or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security."
        },
        {
            heading: "Cookies",
            desc: "Our website may use cookies to enhance user experience. Users can choose to accept or decline cookies through their web browser settings. Please note that disabling cookies may result in limited functionality of certain features on our website."
        },
        {
            heading: "Third-Party Website",
            desc: "Our website may contain links to third-party websites. We have no control over the content and practices of these websites, and therefore, we are not responsible for their privacy policies or practices."
        },
        {
            heading: "Children’s Privacy",
            desc: "Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13. If you believe we have collected personal information about a child under 13, please contact us immediately."
        },
        {
            heading: "Changes to this Policy",
            desc: "We reserve the right to update or revise this Policy at any time. The updated Policy will be effective as of the date stated at the beginning of this document."
        },
        {
            heading: "Contact Us",
            desc: "If you have any questions or concerns regarding this Privacy Policy or our privacy practices, please contact us at pptdesigner01@gmail.com."
        },
    ]

console.log("first")
    return (
        <div className='w-full mt-[60px]'>
            <div className='flex flex-col gap-5 tablet:gap-10 laptop:gap-[50px] w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]'>
               {policies.map((policy, index) => (
                <div key={index}  className='flex flex-col gap-4'>
                    <p className='text-[#2E2E27] text-[24px] font-bold leading-8 tracking-[-0.96px] tablet:text-[32px] tablet:leading-[39px] tablet:tracking-[-1px] laptop:text-[48px] laptop:leading-10'>{policy.heading}</p>
                   {policy.list ? 
                   <div className='flex flex-col gap-4'>
                    {policy.list.map((list, index)=>(
                   <p key={index} className='text-sm leading-5 tablet:text-[16px] tablet:leading-6 laptop:text-[20px] laptop:leading-7'>{list}</p> 
                    ))}
                    
                   </div>
                   : <p className='text-sm leading-5 tablet:text-[16px] tablet:leading-6 laptop:text-[20px] laptop:leading-7'>{policy.desc}</p>}
                </div>
               ))}
                
            </div>
        </div>
    )
}

export default Policy