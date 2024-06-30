import React from "react";
import Terms from "../../assets/terms.svg";
import Policy from "../../assets/privacy.svg";
import Refund from '../../assets/refund.svg'
import { Link } from "react-router-dom";

function Cards({ img, title, link }) {
  return (
    <div>
      <img src={img} alt={`${title} icon`} className="w-[60px] h-[60px] mb-6" />
      <p className="mb-2 text-[#000] text-16 tablet:text-20 laptop::text-32 font-bold ">{title} agreement</p>
      <p className="mb-6 text-[#414143] text-16 lowercase w-[90%]"> Generate a free {title} for your website in seconds. </p>
      <Link
        to={`/generate-${link}`}
        className="p-2 px-3 text-[#0B0B00] text-center text-14 font-medium border border-[#E8E8EA] bg-tools-button shadow-buttonDefault"
      >
        Generate {title}
      </Link>
    </div>
  );
}

export default function OtherSection({page}) {
  return (
    <div
      id="presentation"
      className="w-full laptop:max-w-[951px] mx-auto px-4 tablet:px-6 laptop:px-0 xl:px-0 py-[40px] tablet:py-[80px] laptop:py-[100px]"
    >
      <div className="w-full">
        <h2 className="text-[#000] text-24  tablet:text-32 laptop:text-48 font-bold mb-3">
          Checkout our other tools
        </h2>
        <p className="text-[#414143] text-16 tablet:text-20 ">
          We provide tools tailored to help your business succeed, feel free to
          use our other tools to improve your business process
        </p>
        <div className="mt-[60px] flex flex-col gap-6 laptop:flex-row laptop:justify-between">
            {
                page === "policy" ? 
                <>
                <Cards img={Refund} title="Refund policy" link="refund" />
                <Cards img={Terms} title="Terms and conditions" link="terms" /> 
                </> :
                page === "terms" ? 
                <>
                <Cards img={Policy} title="Privacy policy" link="policy" />
                <Cards img={Refund} title="Refund policy" link="refund" />
                </> :
                <>
                <Cards img={Policy} title="Privacy policy" link="policy" />
                <Cards img={Terms} title="Terms and conditions" link="terms" /> :
                </>

            }
        
        </div>
      </div>
    </div>
  );
}
