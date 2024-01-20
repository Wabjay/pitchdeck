import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

// eslint-disable-next-line no-empty-pattern
export const ImageCarousel = ({ images, rtl }) => {
  const [carouselSpeed, setCarouselSpeed] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      // Adjust speed based on screen width
      const screenWidth = window.innerWidth;
      const newSpeed = screenWidth < 600 ? 1000 : 1000;

      setCarouselSpeed(newSpeed);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on initial render

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    rtl: rtl,
    infinite: true,
    lazyLoad: true,
    initialSlide: 5,
    speed: carouselSpeed,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: carouselSpeed,
    cssEase: "linear",
    className: "center",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-[130px] small:w-[155px] tablet:w-[206px] tablet:h-[144px] laptop:w-[286px] laptop:h-[200px] mr-3`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              width={100}
              height={100}
              className={`w-[130px] small:w-[155px] tablet:w-[206px] tablet:h-[144px] laptop:w-[286px] laptop:h-[200px]`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
