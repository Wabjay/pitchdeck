import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Arrow from "../assets/back.svg";
import Helmet from "../component/MetadataNew";
import SideSection from "../component/pitchdeck/SideSection";
import { store } from "../store";
import FooterPitches from "../sections/FooterPitches";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import LoadImage from "../component/LoadImage";
import Schema from "../component/Schema";

const SinglePitch = () => {
  let params = useParams();
  const [cookies, setCookie] = useCookies(["pitch", "isLogged"]);
  // eslint-disable-next-line no-mixed-operators, no-use-before-define
  const [pitchDetail, setPitchDetail] = useState({})

  const { fetchSinglePitch, getId, pitch, user,  setShowLogin, componentLoading } = store();

  const navigate = useNavigate();

  useEffect(() => {
    const currentPathname = window.location.pathname;
    const path = currentPathname.split("/").pop();
    const pitchTitle = params.pitch !== "" ? params.pitch : path;
    
    getId(pitchTitle)
    // getId(pitch);
    fetchSinglePitch(pitchTitle);
    
    if(!cookies.isLogged){ 
      setShowLogin(true)
    } 

  }, [ fetchSinglePitch, params.pitch, getId, cookies.isLogged, setShowLogin]);


  const handleContextMenu = (e) =>{
    if(user.email !== "pixelgumstudio@gmail.com"){
       e.preventDefault()
    }
  }

  // const pitchSchema = {
  //   name: pitch.title,
  //   description: pitch.description,
  //   url: `https://pitchdeck.design/pitch/${pitch.title}`,
  //   imageUrl: pitch.coverImageUrl,
  // }


  return (
    <div className="mt-[60px] w-full">
      {pitch && (
        <>
          <Helmet
            title={pitch.title}
            description={pitch.about}
            imageCard={pitch.coverImageUrl}
            link={`/pitch/${params.pitch}`}
            addPostfixTitle={true}
          />
          <Schema
            name={pitch.title}
            description={pitch.description}
            url={`/pitch/${pitch.title}`}
            imageUrl={pitch.coverImageUrl}
          />
        </>
      )}
      {/* // Top Section */}

      <div onContextMenu={handleContextMenu} className="bg-[#F2F1E8]">
        <div className="w-full laptop:max-w-[1440px] mx-auto px-4 tablet:px-6 laptop:px-0 desktop:px-0 bg-white laptop:bg-[#F2F1E8]">
          <div className=" sticky top-10 laptop:py-5 w-full max-w-[1272px] mx-auto desktop:ml-[144px] bg-white laptop:px-8 laptop:bg-[#F2F1E8] desktop:px-0">
            <button
              className="p-[6px] mt-6 bg-white"
              onClick={() => navigate(-1)}
              type="button"
            >
              <img src={Arrow} alt="back button" className="" />
            </button>
          </div>

          <div className="w-full max-w-[1272px] mx-auto laptop:px-8 desktop:px-0 desktop:ml-[144px] laptop:grid laptop:grid-cols-big desktop:grid-cols-large laptop:gap-6 desktop:gap-8 laptop:justify-end">
            <SideSection />
            <div className="bg-[#F2F1E8] order-first w-full ">
              <div className="mx-auto  px-4 tablet:px-6 laptop:px-0 desktop:px-0 pb-[40px] tablet:pb-[80px] laptop:pb-[100px]">
                <div className="mt-6 mb-8 desktop:mt-8 flex flex-col gap-8 laptop:w-fit desktop:ml-auto desktop:mr-0">
                  <LoadImage
                    alt={`${pitch.title}`}
                    src={pitch.coverImageUrl}
                    height={205}
                    style={`w-full h-[205px] tablet:h-[456px] laptop:w-[640px] laptop:h-[537px] desktop:w-[757px]`}
                  />

                  {pitch.contentImagesUrls?.map((image, index) => (
                    <LoadImage
                      key={index}
                      alt={`${pitch.title} ${index}`}
                      src={image}
                      height={205}
                      style={`w-full h-[205px] tablet:h-[456px] laptop:w-[640px] laptop:h-[537px] desktop:w-[757px]`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <FooterPitches pitchTag={pitch} />
    </div>
  );
};

export default SinglePitch;
