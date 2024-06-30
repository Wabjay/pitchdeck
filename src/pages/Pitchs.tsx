import Hero from "../sections/Pitch/PitchHero";
import PitchContent from "../sections/Pitch/PitchContent";
import MetadataComponent from "../component/Metadata";
import Helmet from "../component/MetadataNew";
import Schema from "../component/Schema";
// import ScrollToTopButton from "../component/ScrollToTopButton";

const Home = () => {



  return (
    <>
    
   <Helmet link="/" />
   <Schema name={undefined} description={undefined} url={undefined} imageUrl={undefined} />
      <div className="mt-[60px]">
        <Hero />
       <PitchContent />
      </div>
    </>
  );
};

export default Home;
