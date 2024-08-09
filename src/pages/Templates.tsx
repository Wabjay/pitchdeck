import Hero from "../sections/Template/TemplateHero";
import TemplateContent from "../sections/Template/TemplateContent";
import Helmet from "../component/MetadataNew";
import Schema from "../component/Schema";
import Features from "../sections/FeaturedTemplate";

const Home = () => {



  return (
    <>
        <Helmet
                title="Templates"
                description="Pre-made Powerpoint, Google slides templates, and Pitch deck templates for your startup"
                link='/template'
                addPostfixTitle={true}
            />
 <Schema
          name={'Templates'}
          description={'Pre-made Powerpoint, Google slides templates, and Pitch deck templates for your startup'}
          url={`/template`} imageUrl={undefined}         
           />
      <div className="mt-[60px]">
        <Hero />
       <TemplateContent/>
       <Features />
      </div>
    </>
  );
};

export default Home;
