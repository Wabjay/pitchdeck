import Hero from "../sections/Hero";
import Carousel from "../sections/Carousel";
import Presentation from "../sections/Presentation";
import Pricing from "../sections/Pricing";
import Faq from "../sections/Faq";
import MetadataComponent from "../component/Metadata";
import Helmet from "../component/MetadataNew";
import Schema from "../component/Schema";
import Testimonials from "../sections/Testimonials";

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
        <Presentation />
        <Pricing />
        <Testimonials />
        <Faq />
      </div>
    </>
  );
};

export default PitchDeck;
