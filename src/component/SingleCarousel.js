import React from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import times from "lodash/times";

import LoadImage from "./LoadImage";


const Height = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
  `;

const Box = styled.div`
  padding: ${(props) => props.scale * 25}px;
  padding-bottom: 0
`;


const FullWidth = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;



const SingleCarousel = ({ images, direction }) => {


  return (
    <FullWidth>
      <Height height={0}>
        <Marquee
          velocity={50}
          direction={direction}
          minScale={0.7}
          styles={{ gap: "10px" }}
        >
          {times(9, String).map((id) => (
            <Box key={`marquee-example-review-${id}`}>
              <div className="">
                <LoadImage
                  alt="Pitch sample"
                  src={images[id]}
                  style={`w-[155px] h-[108px] tablet:w-[206px] tablet:h-[144px] laptop:w-[286px] laptop:h-[200px] mr-3 tablet:mr-4 laptop:mr-6`}
                />

              </div>
            </Box>
          ))}
        </Marquee>
      </Height>
    </FullWidth>
  );
};

// will end in a loop without React.memo
export default React.memo((SingleCarousel));