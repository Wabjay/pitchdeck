import React, { useEffect, useState } from "react";
import {
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
} from "react-share";
import Cancel from "../assets/cancel.svg";
import Copy from "../assets/copy.svg";
import Logo from "../assets/Pitchdeck-Logo.svg";
import LinkedIn from "../assets/share-linkedin.svg";
import Twitter from "../assets/share-twitter.svg";
import Email from "../assets/share-email.svg";

import { buttonStyles } from "./classes/styles";
import Confetti from 'react-confetti';
// import { buttonStyles } from "../../classes/styles";

const ShareButton = ({ url, title, close }) => {
  const [textToCopy, setTextToCopy] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  const link = `https://pitchdeck.design${url}`;


  const startConfetti = () => {
    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
    }, 4000); // Stop confetti after 4 seconds
  };


  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500); // Reset copied state after 1.5 seconds
        startConfetti()
        // close(false);
      })
      .catch((err) => console.error("Error copying text: ", err));
  };

  const closeTab =()=>{
    close(false)
  }
  useEffect(() => {
    setTextToCopy(link);
  }, [link]);

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-overlay fixed top-0 left-0 z-20">
      <div className="w-[90%] max-w-[499px] flex flex-col gap-6 p-6 rounded-[12px] bg-white border-[rgb(232,232,234)] border">
        <img
          src={Cancel}
          alt=""
          className="mr-0 ml-auto w-6 h-6"
          onClick={closeTab}
        />

        <div className="">
          <img src={Logo} alt="Pitchdeck logo" className="mb-6 w-[224px] h-8" />
          <p className="mb-4 text-24 text-[#414143] font-bold">Share {title} Pitchdeck </p>
          <div className="mb-6 border border-[#FFF] bg-[#FFF] shadow-shareCard p-4">
            <p className="text-16 font-bold text-[#141415]">Pitch deck link</p>
            <p className="text-14 leading-5 font-normal text-[#414143] mb-6">Click to copy and paste your deck link</p>
            <div onClick={handleCopy} 
            className={`${buttonStyles} w-fit flex items-center justify-center gap-3 py-[6px] border border-[#E8E8EA] bg-tools-button shadow-supportButton`}
            >
              <span className="text-[#0B0B00] text-14 font-medium"> {link}</span>
              <img src={Copy} alt="Copy content" className="w-5 h-5 mr-1" />
            </div>
          </div>
          <div className="border border-[#FFF] bg-[#FFF] shadow-shareCard p-4">
          <p className="text-16 font-bold text-[#141415]">Share on socials</p>
          <p className="text-14 leading-5 font-normal text-[#414143] mb-6">Share your decks on social media and messaging apps with one click</p>

<div className="flex gap-4">
       <TwitterShareButton url={link} title={title} >
<img src={Twitter} alt="Twitter icon" className="w-9 h-9 p-2 border border-[#21AB68] shadow-shareLinks" />  
      </TwitterShareButton>

        <LinkedinShareButton url={link} title={title}>
        <img src={LinkedIn} alt="LinkedIn icon" className="w-9 h-9 p-2 border border-[#21AB68] shadow-shareLinks"  />  
        </LinkedinShareButton>

        <EmailShareButton url={link} title={title}>
        <img src={Email} alt="Email icon" className="w-9 h-9 p-2 border border-[#21AB68] shadow-shareLinks"  />  
        </EmailShareButton>
</div>
     
          </div>
        </div>
        {confettiActive && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      </div>
    </div>
  );
};

export default ShareButton;
