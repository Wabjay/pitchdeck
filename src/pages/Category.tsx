import MetadataComponent from "../component/Metadata";
import Helmet from "../component/MetadataNew";
import Schema from "../component/Schema";
import CategoryHero from "../sections/Category/CategoryHero";
import CategoryContent from "../sections/Category/CategoryContent";
import { useParams } from "react-router-dom";
import Testimonials from "../sections/Testimonials";
import { useEffect, useState } from "react";
import { categories } from "../lib/category";

const Category = () => {

  let params = useParams();

  const title = params.category

  const [tag, setTag] = useState<any>({})
 
  useEffect(()=>{
    categories.map(cat => cat.title.toLowerCase() === title?.replace(/-/g, ' ') && setTag(cat.tag))
  },[title])
  

  return (
    <>
       
          <Helmet
            title={tag.title}
            description={tag.desc}
            link={`/category/${title}`}
            addPostfixTitle={true}
          />
          <Schema
          name={tag.title}
          description={tag.desc}
          url={`/category/${tag.title}`} imageUrl={undefined}         
           />
      <div className="mt-[60px]">
        <CategoryHero title={title}/>
       <CategoryContent title={title}/>
        <Testimonials  />
      </div>
    </>
  );
};

export default Category;
