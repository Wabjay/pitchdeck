import React from 'react'

import Image1 from "./../assets/image1.png"
import Image2 from "./../assets/image2.png"
import Image3 from "./../assets/image3.png"
import Image4 from "./../assets/image4.png"
import Image5 from "./../assets/image5.png"
import Image6 from "./../assets/image6.png"
import Image7 from "./../assets/image7.png"
import Image8 from "./../assets/image8.png"
import Image9 from "./../assets/image9.png"
import Image10 from "./../assets/image10.png"
import Image11 from "./../assets/image11.png"
import Image12 from "./../assets/image12.png"
import Image13 from "./../assets/image13.png"
import Image14 from "./../assets/image14.png"
const Carousels = () => {


  const topImages = [Image1,Image2,Image3,Image4,Image5,Image6,Image7]
  const bottomImages = [Image8,Image9,Image10,Image11,Image12,Image13,Image14]
  return (
    <div className='bg-[#F2F1E8]'>
    <div className='w-full lg:max-w-[1440px] mx-auto overflow-hidden	'>
      <div className='flex gap-[13px] md:gap-[18px] mb-5 md:mb-10 lg:mb-[50px]'>
        {topImages.map(image => <img className='w-[155px] h-[108px] md:w-[206px] md:h-[144px] lg:w-[286px] lg:h-[200px]' src={image} alt=""/>)}
      </div>
      <div className='flex gap-[13px] md:gap-[18px]'>
        {bottomImages.map(image => <img className='w-[155px] h-[108px] md:w-[206px] md:h-[144px] lg:w-[286px] lg:h-[200px]' src={image} alt=""/>)}
      </div>

    </div>
        </div>

  )
}

export default Carousels