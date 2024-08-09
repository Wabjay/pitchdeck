import LoadImage from "./LoadImage";
import "react-lazy-load-image-component/src/effects/blur.css";

type FeaturedProps = {
  title: string;
  desc: string;
  image: string;
};

const FeaturedOnly: React.FC<FeaturedProps> = ({image, title, desc }) => {
  return (

    <div>
          <div className="w-full py-6 flex justify-center bg-[#F3F3F4] border border-[#F3F3F4] mb-7">
            <LoadImage
              alt="Featured Images"
              src={image}
              height={undefined}
              style={"w-full max-w-[407px] h-full max-h-[289px] mx-auto"} // Correct style as an object
            />
          </div>

          <p className="underline text-20 font-bold tablet:text-32 text-[#000]">{title}</p>
          <p className="text-left w-full laptop:max-w-[758px] text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[20px] laptop:leading-8 text-[#000] font-normal">{desc}</p>
</div>
  );
};

export default FeaturedOnly;
