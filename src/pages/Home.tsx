import Hero from "../sections/Hero";
import Carousel from "../sections/Carousel";
import Presentation from "../sections/Presentation";
import Pricing from "../sections/Pricing";
import Faq from "../sections/Faq";
import Helmet from "../component/MetadataNew";
import Schema from "../component/Schema";
import Testimonials from "../sections/Testimonials";
import Features from "../sections/Features";
import FeaturesOnly from "../sections/FeaturesOnly";
import Discover from "../sections/Discover";
import HandPick from "../sections/HandPick";
import CustomDeck from "../sections/CustomDeck";


const PitchDeck = () => {
  return (
    <>
      <Helmet link="/make-deck" />
      <Schema
        name={undefined}
        description={undefined}
        url="/make-deck"
        imageUrl={undefined}
      />
      <div className="mt-[60px]">
        <Hero />
        <Carousel />
        <Features />
        <FeaturesOnly />
        {/* <Presentation /> */}
        <Pricing />
        <Faq />
        <CustomDeck />
        <Discover />
        <HandPick />
        {/* <Testimonials /> */}
      </div>
    </>
  );
};

export default PitchDeck;
