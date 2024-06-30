import React, { useState, useEffect } from 'react';
import LoadImage from './LoadImage';
import Icon from '../assets/circle-up-solid.svg'
function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is over 700px
      if (window.scrollY > 700) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up by removing the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {showButton && (
        <button onClick={scrollToTop} className='animate-bounce fixed bottom-5 right-5 z-50'>
          <LoadImage
                  alt={`Back to top`}
                  src={Icon}
                  style={`h-[80px] w-[80px]`}/>
                 
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
