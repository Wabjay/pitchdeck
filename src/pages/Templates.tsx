import Hero from "../sections/TemplateHero";
import TemplateContent from "../sections/TemplateContent";
import Helmet from "../component/MetadataNew";

const Home = () => {



  return (
    <>
        <Helmet
                title="Templates"
                description="Save hundred hours of Pitchdeck visual and idea research by browsing a library of 1000+ handpicked screenshots from popular startups"
                link='/template'
                addPostfixTitle={true}
            />

      <div className="mt-[60px]">
        <Hero />
       <TemplateContent/>
      </div>
    </>
  );
};

export default Home;
