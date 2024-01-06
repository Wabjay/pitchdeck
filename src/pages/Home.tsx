import Hero from "../sections/Hero";
import Carousel from "../sections/Carousel";
import Presentation from "../sections/Presentation";
import Works from "../sections/Works";
import MetadataComponent from "../component/Metadata";
import Pricing from "../sections/Pricing";

const PitchDeck = () => {
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
        <Pricing />
        <Works />
      </div>
    </>
  );
};

export default PitchDeck;
