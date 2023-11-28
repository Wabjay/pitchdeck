import Hero from "../sections/Hero";
import Carousel from "../sections/Carousel";
import Presentation from "../sections/Presentation";
import Works from "../sections/Works";
import Pricing from "../sections/Pricing";
import Faq from "../sections/Faq";

const Home = () => {
  return (
    <>
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
