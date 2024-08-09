import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Arrow from "../assets/back.svg";
import Helmet from "../component/MetadataNew";
import SideSection from "../component/template/SideSection";
import { store } from "../store";
import { createSlug } from "../component/slug";
import FooterPitches from "../sections/Pitch/FooterPitches"
import { useCookies } from "react-cookie";

import LoadImage from "../component/LoadImage";
import Schema from "../component/Schema";

const SingleTemplate = () => {
  let params = useParams();
  const { fetchSingleTemplate, getId, template, user, setShowLogin } = store();
  const [cookies, setCookie] = useCookies(["template", "isLogged"]);
 

  const navigate = useNavigate();



  useEffect(() => {

    const currentPathname = window.location.pathname;
    const path = currentPathname.split("/").pop();
    const templateTitle = params.template !== "" ? params.template : path;

    getId(templateTitle)
    // getId(pitch);
    fetchSingleTemplate(templateTitle);
    
    // if(!cookies.isLogged){ 
    //   setShowLogin(true)
    // } 
  
    
    }, [cookies.isLogged, fetchSingleTemplate, getId, params.template, setShowLogin]);


    const handleContextMenu = (e) =>{
      if(user.email !== "pixelgumstudio@gmail.com"){
         e.preventDefault()
      }
    }


  return (
    <div  onContextMenu={handleContextMenu}  className="mt-[60px] w-full">
      {template && (
        <>
        <Helmet
        title={template.name}
        description={template.about}
        image={template.templateCoverImageUrl}
        link={'/template/' + template.name}
        addPostfixTitle={true}
    />
    <Schema
            name={template.title}
            description={template.about}
            url={`/template/${template.title}`}
            imageUrl={template.templateCoverImageUrl}
          />
          </>
      )}
      {/* // Top Section */}
      <div className="bg-[#F2F1E8]">
        <div className="w-full laptop:max-w-[1440px] mx-auto px-4 tablet:px-6 laptop:px-0 desktop:px-0 bg-white laptop:bg-[#F2F1E8]">
          <div className="sticky top-10 laptop:py-5 w-full max-w-[1272px] mx-auto desktop:ml-[144px] bg-white laptop:px-8 laptop:bg-[#F2F1E8] desktop:px-0">
            <button
              className="p-[6px] mt-6 bg-white"
              onClick={() => navigate(-1)}
              type="button"
            >
              <img src={Arrow} alt="" className="" />
            </button>
          </div>
          <div className="w-full max-w-[1272px] mx-auto laptop:px-8 desktop:px-0 desktop:ml-[144px] laptop:grid laptop:grid-cols-big desktop:grid-cols-large laptop:gap-6 desktop:gap-8 laptop:justify-end">
            <SideSection />
            <div className="bg-[#F2F1E8] order-first w-full ">
            <div className="mx-auto  px-4 tablet:px-6 laptop:px-0 desktop:px-0 pb-[40px] tablet:pb-[80px] laptop:pb-[100px]">
                <div className="mt-6 mb-8 desktop:mt-8 flex flex-col gap-8 laptop:w-fit desktop:ml-auto desktop:mr-0">
                  <LoadImage 
                  alt={`${template?.name}`}
                  src={template?.templateCoverImageUrl}
                  style={`w-full h-[205px] tablet:h-[456px] laptop:w-[640px] laptop:h-[537px] desktop:w-[757px]`}/>
                 
                  {template?.templateImagesUrl.map((image, index) => (
                    <LoadImage  key={index}
                    alt={`${template?.name} ${index}`}
                    src={image}
                    style={`w-full h-[205px] tablet:h-[456px] laptop:w-[640px] laptop:h-[537px] desktop:w-[757px]`}/>
                  ))}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
     {/* <FooterPitches /> */}
    </div>
  );
};

export default SingleTemplate;
