import React, { useState, useEffect } from 'react';

type ImageStackProps = {
  images: string[];
  interval?: number; // Time interval for image change (default is 5000ms)
};

const ImageStack: React.FC<ImageStackProps> = ({ images, interval = 5000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const visibleImagesCount = 5; // Number of images to show behind the top one

  useEffect(() => {
    const changeImage = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(changeImage);
  }, [images.length, interval]);

  return (
    <div className="relative w-full max-w-xs tablet:max-w-md laptop:max-w-lg desktop:max-w-xl h-60 tablet:h-72 laptop:h-80 desktop:h-96 mx-auto">
    {images.map((image, index) => {
      const positionOffset = (index - currentImageIndex + images.length) % images.length;
      const isVisible = positionOffset < visibleImagesCount;
  
      return (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`rounded-2xl absolute w-full h-full transition-all duration-500 ease-in-out
            ${positionOffset === 0 ? 'transform scale-110 z-10 opacity-100' : 'opacity-80'}`}
          style={{
            left: '50%',
            transform: `translateX(-50%) scale(${1 - positionOffset * 0.05})`,
            zIndex: images.length - positionOffset,
            bottom: isVisible ? `-${positionOffset * 15}px` : `-${visibleImagesCount * 15}px`,
            opacity: isVisible ? 1 : 0,
          }}
        />
      );
    })}
  </div>
  
  );
};

export default ImageStack;
