import BaristerFinder from "./../assets/BaristerFinder.webp"
import PCRopsis from "./../assets/PCRopsis.webp"
import Wattpricer from "./../assets/Wattpricer.webp"
import FrontierYields from "./../assets/FrontierYields.webp"
import FeaturedOnly from "../component/FeaturedOnly";


const FeaturesOnly = () => {
  return (
    <div className="w-full bg-white ">
      <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 text-left pb-[40px] tablet:pb-[80px] laptop:pb-[100px]">
      <div className="grid tablet:grid-cols-2 tablet:!gap-x-10 laptop:!gap-x-20  gap-10 tablet:gap-[80px] laptop:gap-[100px]">
        <FeaturedOnly
         title={"PCRopsis Sales deck"}
          desc={"Unparalleled Direct PCR technologies for clinical testing"} image={PCRopsis}        />
            <FeaturedOnly
         title={"Wattpricer Sales deck"}
          desc={"Making credit facilities available for immigrants"} image={Wattpricer}        />
            <FeaturedOnly
         title={"BaristerFinder Pitch deck"}
          desc={"Finding the next generation of freelance barista"} image={BaristerFinder}        />
            <FeaturedOnly
         title={"FrontierYields Pitch deck"}
          desc={"Making credit facilities available for immigrants"} image={FrontierYields}        />
                </div>
      </div>
    </div>
  );
};

export default FeaturesOnly;
