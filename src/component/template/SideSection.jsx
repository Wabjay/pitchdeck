import React from "react";
import { store } from "../../store";
import { Link } from "react-router-dom";
import moment from "moment";

export default function SideSection() {

  const {template} = store()
  
   return (
    <div className="py-6 laptop:p-6 text-[#2E2E27] bg-white laptop:h-[auto] laptop:mt-[-58px] w-full laptop:basis-big desktop:basis-large pb-4 laptop:pb-[100px]">
      <p className="text-24 font-bold mb-2">{template.title}</p>
      <p className="text-[16px] leading-6 mb-2">
        {template.numberOfPages} pages <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7.5" cy="8.97321" r="1.5" fill="#2E2E27" />
          </svg> Uploaded on {moment(template.createdAt).format("MMM Do YY")}
      </p>
      <p className="text-[16px] leading-6 mb-6">
       {template.about}
      </p>
      <div className="flex flex-col gap-4 p-3 bg-[#F2F1E8] border border-[#CCC8A4] mb-10">
        <div className="flex gap-2">
            <p className="w-[100px] text-14 leading-6">Deliverables: </p>
            <p className="w-full text-14 leading-6 font-medium"> {template.deliverables.toString()}</p>
        </div>
        <div className="flex gap-2">
            <p className="w-fit text-14 leading-6">Price</p>
            <p className="w-full text-14 leading-6 font-medium">{template.cost}</p>
        </div>
      </div>
      <Link href={template.linkToPurchase} 
        className="bg-[#21AB68] border-[#21AB68] shadow-navbarLink inline-flex items-center justify-center p-2  text-[#ffffff]  text-sm leading-5 font-normal focus:outline-none "
      >
        Buy This Template
      </Link>
    </div>
  );
}
