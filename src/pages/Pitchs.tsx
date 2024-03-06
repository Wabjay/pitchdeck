import Hero from "../sections/PitchHero";
import PitchContent from "../sections/PitchContent";
import MetadataComponent from "../component/Metadata";
import Helmet from "../component/MetadataNew";
import Schema from "../component/Schema";

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
