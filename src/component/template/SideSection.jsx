import React, { useEffect, useState } from "react";
import { store } from "../../store";
// import { Link } from "react-router-dom";
import moment from "moment";
import Skeleton from "../Skeleton";
import HiddenText from "./HiddenText";

export default function SideSection() {

  const { template, address } = store();


  const highlight = template?.pageHighlights
  // const {naira, foriegn} = template?.linkToPurchase


  return (
    <div className="laptop:sticky laptop:top-[80px] py-6 laptop:p-6 text-[#2E2E27] bg-white laptop:h-fit laptop:mt-[-34px] w-full laptop:basis-big desktop:basis-large pb-4 laptop:pb-[100px]">
      <p className="text-24 font-bold mb-2">
        <Skeleton>{template?.name}</Skeleton>
      </p>
      <p className="text-[16px] leading-6 mb-4 flex items-center laptop:block desktop:flex">
        <Skeleton> {template?.numberOfPages} pages
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle cx="7.5" cy="8.97321" r="1.5" fill="#2E2E27" />
          </svg>
          Uploaded on {moment(template?.createdAt).format("Do MMM YY")}
        </Skeleton>
      </p>

      <p className="text-16 font-bold text-[#2E2E27] mb-1">
        <Skeleton>About template</Skeleton>
      </p>
      <p className="text-[16px] leading-6 mb-4">
        <Skeleton><HiddenText text={template?.about} maxLength={150} /></Skeleton>
      </p>

      <p className="text-16 font-bold text-[#2E2E27] mb-1">
        <Skeleton>Page highlights</Skeleton>
      </p>
      <p className="text-[16px] leading-6 mb-6">
        <Skeleton><HiddenText text={highlight} maxLength={150} /></Skeleton>
      </p>




      <div className="flex flex-col gap-4 p-3 bg-[#F2F1E8] border border-[#CCC8A4] mb-10">
        <div className="flex gap-2">
          <p className="w-[115px] whitespace-nowrap text-14 leading-6 font-normal">
            <Skeleton>Deliverables</Skeleton>
          </p>
          <p className="w-full text-14 leading-6 font-semibold">
            <Skeleton> {template?.deliverables.toString()}</Skeleton>
          </p>
        </div>
        <div className="flex gap-2">
          <p className=" w-fit text-14 leading-6 font-normal">
            <Skeleton>Price</Skeleton>
          </p>
          <p className="w-full text-14 leading-6 font-semibold capitalize">
            <Skeleton>{address === "Nigeria" ?  template?.cost.naira : template?.cost.dollar}</Skeleton>
          </p>
        </div>
      </div>
      <Skeleton>
        {/* {console.log(naira)} */}
        <a href={address === "Nigeria" ? template?.linkToPurchase.nigeria :  template?.linkToPurchase.foreign}
          target="_blank" rel="noopener noreferrer"
          className="bg-[#21AB68] border-[#21AB68] shadow-navbarLink inline-flex items-center justify-center p-2  text-[#ffffff]  text-sm leading-5 font-normal focus:outline-none "
        > Buy This Template </a>
      </Skeleton>

    </div>
  );
}
