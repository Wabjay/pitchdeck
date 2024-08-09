import Featured from "../component/Featured";
import Maxim from "./../assets/Maxim-featured.webp"
import Frantable from "./../assets/Frantable.webp"
import Trinton from "./../assets/Trinton.webp"


const Features = () => {
  return (
    <div className="w-full bg-white ">
      <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 text-left py-[40px] tablet:py-[80px] laptop:py-[100px]">
      <div className="flex flex-col gap-10 tablet:gap-[80px] laptop:gap-[100px]">
          <div>
          <h1 className='text-[32px] font-bold leading-[39px] tracking-[-1px] tablet:text-[48px] tablet:leading-[40px] laptop:text-[64px] laptop:leading-[72px] laptop:tracking-[-2px] text-[#2E2E27] mb-2'>Our Featured work</h1>
          <h2 className='text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[24px] laptop:leading-8 text-[#64645F] w-full max-w-[700px]'>Some of our wonderful works that we have done for clients and the funds they have raised from the decks </h2>
          </div>
        <Featured
          amount={"150k"}
          text={"Raised in  a friends and family round from investors with the pitch deck we made for them. We also worked on their website and motion design from our studio "}
          title={"Maxim Pitch deck"}
          desc={"Making credit facilities available for immigrants"} image={Maxim}        />
         <Featured
          amount={"250k"}
          text={
            "Raised for Pre-seed round to help franchise brands scale better and boost their public presence. We also helped them with their product website and branding"
          }
          title={"Frantable Pitch deck"}
          desc={"Helping franchise brands scale better"} image={Frantable} 
        />
         <Featured
          amount={"250k"}
          text={
            "Raised for Pre-seed round to make a patented waterless natural disinfection technology for dentists"
          }
          title={"Trinton labs Pitch deck"}
          desc={"Patented, Waterless, Natural Disinfection Technology"} image={Trinton} 
        />
                </div>
      </div>
    </div>
  );
};

export default Features;
