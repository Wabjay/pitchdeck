import React from 'react'
import PitchCard from '../component/pitchdeck/PitchCard'
import { store } from '../store';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import { createSlug } from '../component/slug';

export default function FooterPitches() {
  let params = useParams();
    const { pitches } = store();
    const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });

    function shuffleArray(array:any[]) {
      const shuffledArray = [...array]; // Create a shallow copy to avoid mutating the original array
    
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
      }
    
      return shuffledArray;
    }

    const shuffledArray = shuffleArray(pitches);

  return (
    <div className="bg-white">
    <div className="w-full mx-auto px-4 py-[40px] tablet:px-6 tablet:py-[80px] laptop:max-w-[1152px] laptop:px-8 laptop:py-[100px] desktop:px-0">
      <p className="text-[24px] font-bold leading-8 tracking-[-0.96px] mb-5 tablet:text-[32px] tablet:leading-[39px] tablet:tracking-[-1px] tablet:mb-10 laptop:text-[48px] laptop:leading-10 laptop:mb-[50px]">
        More pitchdecks like this
      </p>

      <div className="grid gap-[54px] tablet:grid-cols-2 tablet:gap-x-8 tablet:gap-y-10 laptop:grid-cols-3 laptop:gap-y-[50px]">
        {shuffledArray.map(
          (pitch, i) =>
          createSlug(pitch.title) !== params.pitch && 
            (isBigScreen ? i < 6 : i < 4) &&
            (
              <>
                <PitchCard key={pitch._id} pitch={pitch} />
              </>
            )
        )}
      </div>
    </div>
  </div>
  )
}
