// import Airtable from "airtable";
// import { useState } from "react";



const Waitlist = () => {
  // let Base_id = 'appr2fKF77qI95I1Z'
  // let Api_key = 'keyAs1krG80fTzo0c'

  // Airtable.configure({
  //   endpointUrl: 'https://api.airtable.com',
  //   apiKey: Api_key
  // });

  // const Base = Airtable.base(Base_id)
  // const [email, setEmail] = useState('')
  // const [submitted, setSubmitted] = useState(false)



  // const submit = (e) => {
  //   e.preventDefault();
  //   Base('Waitlist').create(
  //     { email: email },
  //     { typecast: true },
  //     function (err, record) {
  //       if (err) {
  //         console.error(err);
  //         return;
  //       }
  //       setEmail("")
  //       console.log("Message sent successfully");
  //       setSubmitted(true)
  //     });

  // }


  return (
    <div className='bg-[#061F13] ' id='waitlist'>
    <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 text-center pt-[40px] pb-[28px] tablet:pt-[80px] tablet:pb-[50px] laptop:pt-[100px] laptop:pb-[56px]'>
   <div className='w-[288px] tablet:w-[524px] laptop:w-[815px] mx-auto'>
   <p className='text-[32px] font-bold leading-[39px] tracking-[-1px] tablet:text-[48px] tablet:leading-[40px] laptop:text-[64px] laptop:leading-[72px] laptop:tracking-[-2px] text-[#FFF] mb-6'>Ready to start creating presentation</p>
   <p className='text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[24px] laptop:leading-8 text-[#FFF] mb-[40px]'>Subscribe and see how we turn your presentation  into wonderful visuals</p>
     <a href="#"
       className="bg-[#21AB68] border-[#21AB68] shadow-navbarLink inline-flex items-center justify-center p-2 h-[52px] text-[#ffffff]  font-sm leading-5 font-medium focus:outline-none ">
       Subscribe to a plan</a>
   </div>
 </div>
 </div>
  )
}

export default Waitlist