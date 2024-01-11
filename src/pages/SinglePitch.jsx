import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useMediaQuery } from "react-responsive";
import Arrow from "../assets/back.svg";
import MetadataComponent from "../component/Metadata";
import PitchCard from "../component/pitchdeck/PitchCard";
import SideSection from "../component/pitchdeck/SideSection";
import { store } from "../store";
import { createSlug } from "../component/slug";

import LoadImage from "../component/LoadImage";

const SinglePitch = () => {
  let params = useParams();
  const { fetchSinglePitch, pitches, pitch } = store();

  const navigate = useNavigate();

  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    pitches.map(
      (item) =>
        createSlug(item.title) === params.pitch && fetchSinglePitch(item._id)
    );
  }, [fetchSinglePitch, params.pitch, pitches]);

  return (
    <div className="mt-[60px] w-full">
      {pitch && (
        <MetadataComponent
          title={pitch.title}
          description={pitch.about}
          image={pitch.coverImageUrl}
          page={params.title}
          tags={pitch?.tag}
        />
      )}
      {/* // Top Section */}
      <div className="bg-[#F2F1E8]">
        <div className="w-full laptop:max-w-[1440px] mx-auto px-4 tablet:px-6 laptop:px-0 desktop:px-0 bg-white laptop:bg-[#F2F1E8]">
          <div className="w-full max-w-[1152px] mx-auto bg-white laptop:px-8 laptop:bg-transparent desktop:px-0">
            <button
              className="p-[6px] mt-6 bg-white"
              onClick={() => navigate(-1)}
              type="button"
            >
              <img src={Arrow} alt="" className="" />
            </button>
          </div>

          <div className="laptop:grid laptop:grid-cols-big desktop:grid-cols-large laptop:gap-6 desktop:gap-8 laptop:justify-end">
            <SideSection />
            <div className="bg-[#F2F1E8] order-first w-full ">
              <div className=" mx-auto  px-4 tablet:px-6 laptop:px-8 desktop:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]">
                <div className="my-6 flex flex-col gap-8 laptop:w-fit desktop:ml-auto desktop:mr-0">
                  <LoadImage 
                  alt={`${pitch.title}`}
                  src={pitch.coverImageUrl}
                  style={`w-full h-[205px] tablet:h-[456px] laptop:w-[640px] laptop:h-[537px] desktop:w-[757px]`}/>
                 
                  {pitch.contentImagesUrls.map((image, index) => (
                    <LoadImage  key={index}
                    alt={`${pitch.title} ${index}`}
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
      <div className="bg-white">
        <div className="w-full laptop:max-w-[1440px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]">
          <p className="text-[24px] font-bold leading-8 tracking-[-0.96px] mb-5 tablet:text-[32px] tablet:leading-[39px] tablet:tracking-[-1px] tablet:mb-10 laptop:text-[48px] laptop:leading-10 laptop:mb-[50px]">
            More pitchdecks like this
          </p>

          <div className="grid gap-[54px] tablet:grid-cols-2 tablet:gap-x-8 tablet:gap-y-10 laptop:grid-cols-3 laptop:gap-y-[50px]">
            {pitches.map(
              (pitch, i) =>
                (isBigScreen ? i < 6 : i < 4) &&
                pitch._id !== params.pitch && (
                  <>
                    <PitchCard border={true} key={pitch._id} pitch={pitch} />
                  </>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePitch;
