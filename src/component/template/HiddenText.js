
import { useState } from 'react';

const HiddenText = ({ text, maxLength }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      {showFullText ? (
        <div>
          {text}
          <button className='text-[#21AB68] font-medium block' onClick={toggleTextVisibility}>Read less</button>
        </div>
      ) : (
        <div>
          {text?.slice(0, maxLength)}
          {text?.length > maxLength && <button className='text-[#21AB68] font-medium block' onClick={toggleTextVisibility}>Read more</button>}
        </div>
      )}
    </div>
  );
};

export default HiddenText;
