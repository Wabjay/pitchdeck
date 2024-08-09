import LoadImage from "./LoadImage";
import "react-lazy-load-image-component/src/effects/blur.css";

type FeaturedProps = {
  amount: string;
  text: string;
  title: string;
  desc: string;
  image: string;
};

const Featured: React.FC<FeaturedProps> = ({image, amount, text, title, desc }) => {
  return (
    <div className="w-full">
      <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0">
        <div className="grid tablet:grid-cols-2 gap-6 tablet:!gap-x-10 laptop:!gap-x-20 laptop:flex-row">
          <div className="w-full py-6 flex justify-center bg-[#F3F3F4] border border-[#F3F3F4]">
            <LoadImage
              alt="Featured Images"
              src={image}
              height={undefined}
              style={"w-full max-w-[407px] h-full max-h-[289px] mx-auto"} // Correct style as an object
            />
          </div>

          <div className="flex flex-col gap-6 border border-[#F3F3F4] text-left p-8">
            <h2 className='text-[32px] font-bold leading-[39px] tracking-[-1px] tablet:text-[48px] tablet:leading-[40px] laptop:text-[64px] laptop:leading-[72px] laptop:tracking-[-2px] text-[#2E2E27]'>
              ${amount}
            </h2>
            <p className="text-left w-full laptop:max-w-[758px] text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[20px] laptop:leading-8 text-[#000] font-normal">
              {text}
            </p>
          </div>
<div>
          <p className="underline text-20 font-bold tablet:text-32 text-[#000]">{title}</p>
          <p className="text-left w-full laptop:max-w-[758px] text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[20px] laptop:leading-8 text-[#000] font-normal">{desc}</p>
</div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
