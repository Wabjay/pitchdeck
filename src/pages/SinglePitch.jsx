import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Arrow from "../assets/back.svg";
import MetadataComponent from "../component/Metadata";
import SideSection from "../component/pitchdeck/SideSection";
import { store } from "../store";
import FooterPitches from "../sections/FooterPitches";

import LoadImage from "../component/LoadImage";

const SinglePitch = () => {
  let params = useParams();
  const { fetchSinglePitch, getId, pitch, isLogged, setShowLogin, setlink } = store();

  const navigate = useNavigate();

  useEffect(() => {
    const currentPathname = window.location.pathname;
    const path = currentPathname.split("/").pop();

    const pitch = params.pitch !== "" ? params.pitch : path;
     
    getId(pitch);
    fetchSinglePitch();
  }, [fetchSinglePitch,getId,isLogged,setShowLogin,setlink,pitch,params.pitch]);

  const handleContextMenu = (e) =>{
    e.preventDefault()
  }
  return (
    <div className="mt-[60px] w-full">
      {pitch && (
        <MetadataComponent
          title={pitch.title}
          description={pitch.about}
          image={pitch.coverImageUrl}
          page={params.title}
        />
      )}
      {/* // Top Section */}

      <div onContextMenu={handleContextMenu} className="bg-[#F2F1E8]">
        <div className="w-full laptop:max-w-[1440px] mx-auto px-4 tablet:px-6 laptop:px-0 desktop:px-0 bg-white laptop:bg-[#F2F1E8]">
          <div className="w-full max-w-[1272px] mx-auto desktop:ml-[144px] bg-white laptop:px-8 laptop:bg-transparent desktop:px-0">
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
                    alt={`${pitch.title}`}
                    src={pitch.coverImageUrl}
                    style={`w-full h-[205px] tablet:h-[456px] laptop:w-[640px] laptop:h-[537px] desktop:w-[757px]`}
                  />

                  {pitch.contentImagesUrls.map((image, index) => (
                    <LoadImage
                      key={index}
                      alt={`${pitch.title} ${index}`}
                      src={image}
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
      <FooterPitches />
    </div>
  );
};

export default SinglePitch;
