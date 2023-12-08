import Hero from "../sections/Hero";
import Carousel from "../sections/Carousel";
import Presentation from "../sections/Presentation";
import Works from "../sections/Works";
import Pricing from "../sections/Pricing";
import Faq from "../sections/Faq";
import MetadataComponent from "../component/Metadata";

const Home = () => {
  return (
    <>
    <MetadataComponent
        title="PPTDesigner"
        description="Pptdesigner supports your business to design beautiful powerpoint slides for your next presentation to get the numbers" 
        page={undefined} image={undefined} tags={undefined}      />

      <div className="mt-[60px]">
        <Hero />
        <Carousel />
        <Presentation />
        <Works />
        <Pricing />
        <Faq />
      </div>
    </>
  );
};

export default Home;
