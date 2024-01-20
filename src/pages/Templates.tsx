import Hero from "../sections/TemplateHero";
import MetadataComponent from "../component/Metadata";
import TemplateContent from "../sections/TemplateContent";

const Home = () => {



  return (
    <>
    <MetadataComponent
        title="PitchDeck Design Templates"
        description="Save hundred hours of Pitchdeck visual and idea research by browsing a library of 1000+ handpicked screenshots from popular startups" 
        page='template' image={undefined}    />

      <div className="mt-[60px]">
        <Hero />
       <TemplateContent/>
      </div>
    </>
  );
};

export default Home;
