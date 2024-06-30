import MetadataComponent from "../component/Metadata";
import Helmet from "../component/MetadataNew";
import Schema from "../component/Schema";
import { useParams } from "react-router-dom";
import TagsHero from "../sections/Tags/TagsHero";
import TagsContent from "../sections/Tags/TagsContent";
import Testimonials from "../sections/Testimonials";
import { tags } from "../lib/category";
import { useEffect, useState } from "react";

const Tags = () => {

  let params = useParams();

  const title = params.tag

  

  const [tag, setTag] = useState<any>({})
  

  useEffect(()=>{
    tags.map(cat => cat.title.toLowerCase() === title?.replace(/-/g, ' ') && setTag(cat.tag))
// console.log(seotags)
  },[title,  tag])
  

  // console.log(title)
  return (
    <>
          <Helmet
            title={tag?.title}
            description={tag?.desc}
            link={`/${title}`}
            addPostfixTitle={true}
          />
          <Schema
          name={tag?.title}
          description={tag.desc}
          url={`/${tag?.title}`} imageUrl={undefined}         
           />
      <div className="mt-[60px]">
        <TagsHero title={title}/>
       <TagsContent  title={title}/>
       <Testimonials />
      </div>
    </>
    
  );
};

export default Tags;
