
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
import Image15 from "./../assets/image13.png"
import Image16 from "./../assets/image14.png"
import Image17 from "./../assets/image7.png"
import Image18 from "./../assets/image6.png"
import SingleCarousel from "../component/SingleCarousel";


const topImages = [Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image15,Image16]
const bottomImages = [Image8,Image9,Image10,Image11,Image12,Image13,Image14,Image17,Image18]

const Carousel = () => {


  return (
    <div className='bg-[#F2F1E8]'>
    <div className={`w-full laptop:max-w-[1440px] mx-auto overflow-hidden`} >
  
<div className="flex flex-col gap-5 tablet:gap-10 laptop:gap-[50px]">
<SingleCarousel images={topImages} direction="rtl" />
<SingleCarousel images={bottomImages} direction="ltr" />
</div>
</div>
</div>

  );
};

// will end in a loop without React.memo
export default Carousel;