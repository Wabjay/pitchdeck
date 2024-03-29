import Hero from "../sections/PitchHero";
import MetadataComponent from "../component/Metadata";
import PitchContent from "../sections/PitchContent";

const Home = () => {



  return (
    <>
    <MetadataComponent
        title="Pitch Decks"
        description="Save hundred hours of Pitchdeck visual and idea research by browsing a library of 1000+ handpicked screenshots from popular startups" 
        page='pitch-decks' image={undefined}
         />

      <div className="mt-[60px]">
        <Hero />
       <PitchContent />
      </div>
    </>
  );
};

export default Home;
