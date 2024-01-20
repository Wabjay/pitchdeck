import Hero from "../sections/Hero";
import Carousel from "../sections/Carousel";
import Presentation from "../sections/Presentation";
import MetadataComponent from "../component/Metadata";
import Pricing from "../sections/Pricing";
import Faq from "../sections/Faq";

const PitchDeck = () => {
  return (
    <>
    <MetadataComponent
        title="Pitchdeck Design"
        description="Pitchdeck Design supports your business to design beautiful powerpoint slides for your next presentation to get the numbers" 
        page="make-deck" image={undefined}     />

      <div className="mt-[60px]">
        <Hero />
        <Carousel />
        <Presentation />
        <Pricing />
        <Faq />
      </div>
    </>
  );
};

export default PitchDeck;
