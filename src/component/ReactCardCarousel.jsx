import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

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
    initialSlide: 0,
    speed: carouselSpeed,
    slidesToShow: 2, // Always show 2 slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: carouselSpeed,
    cssEase: "linear",
    className: "center",
    centerMode: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
            className="w-full mx-auto"
            style={{ margin: "0 10px" }} // Adjust margin as needed
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full"
              // style={{ maxWidth: "420px", height: "auto" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
