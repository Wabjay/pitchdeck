import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Arrow from "../assets/back.svg";
import MetadataComponent from "../component/Metadata";
import SideSection from "../component/template/SideSection";
import { store } from "../store";
import { createSlug } from "../component/slug";
import FooterPitches from "../sections/FooterPitches"

import LoadImage from "../component/LoadImage";

const SingleTemplate = () => {
  let params = useParams();
  const { fetchSingleTemplate, templates, template, setShowLogin, isLogged, setlink, token } = store();

  const navigate = useNavigate();



  useEffect(() => {
    if(!isLogged){ 
    setShowLogin(true)
    // console.log(("Logged: " + isLogged))
    setlink(`/template/${createSlug(params.template)}`)
    } else {
      token !== "" &&
      templates.map(
        (item) =>
          createSlug(item.name) === params.template && fetchSingleTemplate(item._id)
      );
    }
    
    }, [fetchSingleTemplate, isLogged, params.template, setShowLogin, setlink, templates, token]);

  return (
    <div className="mt-[60px] w-full">
      {template && (
        <MetadataComponent
          title={template.name}
          description={template.about}
          image={template.templateCoverImageUrl}
          page={params.name}
        />
      )}
      {/* // Top Section */}
      <div className="bg-[#F2F1E8]">
        <div className="w-full laptop:max-w-[1440px] mx-auto px-4 tablet:px-6 laptop:px-0 desktop:px-0 bg-white laptop:bg-[#F2F1E8]">
          <div className="w-full  max-w-[1272px] mx-auto desktop:ml-[144px] bg-white laptop:px-8 laptop:bg-transparent desktop:px-0">
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
              <div className=" mx-auto  px-4 tablet:px-6 laptop:px-0 desktop:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]">
                <div className="my-6 flex flex-col gap-8 laptop:w-fit desktop:ml-auto desktop:mr-0">
                  <LoadImage 
                  alt={`${template.name}`}
                  src={template.templateCoverImageUrl}
                  style={`w-full h-[205px] tablet:h-[456px] laptop:w-[640px] laptop:h-[537px] desktop:w-[757px]`}/>
                 
                  {template.templateImagesUrl.map((image, index) => (
                    <LoadImage  key={index}
                    alt={`${template.name} ${index}`}
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
     <FooterPitches />
    </div>
  );
};

export default SingleTemplate;
