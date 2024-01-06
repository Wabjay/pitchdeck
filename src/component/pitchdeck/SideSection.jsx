import React from "react";
import { store } from "../../store";

export default function SideSection() {

  const {pitch} = store()
  console.log(pitch)
  return (
    <div className="py-6 laptop:p-6 text-[#2E2E27] bg-white laptop:h-[auto] laptop:mt-[-58px] w-full laptop:basis-big desktop:basis-large pb-4 laptop:pb-[100px]">
      <p className="text-24 font-bold mb-2">{pitch.title}</p>
      <p className="text-[16px] leading-6 mb-2">
        {pitch.contentImagesUrls?.length} pages . Uploaded on {pitch.date}
      </p>
      <p className="text-[16px] leading-6 mb-6">
       {pitch.about}
      </p>
      <div className="flex flex-col gap-4 p-3 bg-[#F2F1E8] border border-[#CCC8A4] mb-10">
        <div className="flex">
            <p className="w-[100px] text-14 leading-6">Amount</p>
            <p className="w-full text-14 leading-6 font-medium">{pitch.amountRaised}</p>
        </div>
        <div className="flex">
            <p className="w-[100px] text-14 leading-6">Tags</p>
            <p className="w-full text-14 leading-6 font-medium">{pitch.tag}</p>
        </div>
      </div>
      <p
        onClick={() => console.log("make your deck")}
        className="bg-[#21AB68] border-[#21AB68] shadow-navbarLink inline-flex items-center justify-center p-2  text-[#ffffff]  text-sm leading-5 font-normal focus:outline-none "
      >
        Make your Deck
      </p>
    </div>
  );
}
