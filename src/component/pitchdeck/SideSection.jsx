import React from "react";
import { store } from "../../store";
import { HashLink } from 'react-router-hash-link';
import moment from "moment";
import Skeleton from "../Skeleton";


export default function SideSection() {

  const {pitch, componentLoading} = store()
  
  return (
    <div className="laptop:sticky laptop:top-[80px] py-6 laptop:p-6 text-[#2E2E27] bg-white laptop:h-fit laptop:mt-[-34px] w-full laptop:basis-big desktop:basis-large pb-4 laptop:pb-[100px]">
      <h1 className="text-24 font-bold mb-2"> <Skeleton>{pitch.title}</Skeleton></h1>
        <p className="text-[16px] leading-6 mb-2 flex items-center laptop:block desktop:flex"> 
        <Skeleton>
 {pitch.contentImagesUrls?.length} pages        </Skeleton>
     <Skeleton>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7.5" cy="8.97321" r="1.5" fill="#2E2E27" />
          </svg>  Uploaded on {moment(pitch.createdAt).format("MMM Do YY")}</Skeleton>
  </p>
      <p className="text-[16px] leading-6 mb-6">
      <Skeleton>{pitch.about}</Skeleton>
      </p>
   
      <div className="flex flex-col gap-4 p-3 bg-[#F2F1E8] border border-[#CCC8A4] mb-10">
   
        <div className="flex gap-2">
            <p className="w-[115px] whitespace-nowrap text-14 leading-6 font-normal"><Skeleton>Raised Amount</Skeleton></p>
            <p className="w-full text-14 leading-6 font-semibold"><Skeleton>Raised {pitch.amountRaised}</Skeleton></p>
        </div>

        <div className="flex gap-2">
            <p className=" w-fit text-14 leading-6 font-normal"><Skeleton>Tags</Skeleton></p>
            <p className="w-full text-14 leading-6 font-semibold capitalize"><Skeleton>{pitch.tag}</Skeleton></p>
        </div>
      </div>
      <Skeleton>
<HashLink smooth to='/make-deck/#pricing'
        className="bg-[#21AB68] border-[#21AB68] shadow-navbarLink inline-flex items-center justify-center p-2  text-[#ffffff]  text-sm leading-5 font-normal focus:outline-none "
      > Make your Deck</HashLink>
      </Skeleton>
    </div>
  );
}
