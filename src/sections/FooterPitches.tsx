import  { useEffect, useState } from "react";
import PitchCard from "../component/pitchdeck/PitchCard";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import { createSlug } from "../component/slug";
import axios from "../lib/axios";
import { useQuery } from "react-query";

const loadPitches = async () => {
  try {
    const response = await axios.get(`/pitch/filter?tag=All`);
    const shuffledArray = [...response.data];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  } catch (error) {
    console.error("Error in sort function:", error);
    throw error; // Re-throw the error to propagate it further
  }
};
export default function FooterPitches(pitchTag: any) {
  let params = useParams();
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  const { data: pitches } = useQuery("pitches", loadPitches);

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const [array, setArray] = useState<any[]>([]);

  // Use the pitches to display based on the condition below
  useEffect(() => {
    if (pitches) {
      // Filter card by tag of the present pitch deck
      const filteredPitches = pitches?.filter(
        (pitch: any) => pitch.tag === pitchTag.pitchTag.tag
      );
      // If Tag is not more than 1 load function to shuffle pitches
      if (filteredPitches.length === 1) {
        setArray(pitches);
      } else {
        setArray(filteredPitches);
      }
    }
  }, [pitchTag.pitchTag.tag, pitches]);

  return (
    <div className="bg-white">
      <div className="w-full mx-auto px-4 py-[40px] tablet:px-6 tablet:py-[80px] laptop:max-w-[1152px] laptop:px-8 laptop:py-[100px] desktop:px-0">
        <p className="text-[24px] font-bold leading-8 tracking-[-0.96px] mb-5 tablet:text-[32px] tablet:leading-[39px] tablet:tracking-[-1px] tablet:mb-10 laptop:text-[48px] laptop:leading-10 laptop:mb-[50px]">
          More pitchdecks like this
        </p>

        <div className="grid gap-[54px] tablet:grid-cols-2 tablet:gap-x-8 tablet:gap-y-10 laptop:grid-cols-3 laptop:gap-y-[50px]">
          {array &&
            array.map(
              (pitch, i) =>
                // ((createSlug(pitch?.title) !== params.pitch) && (pitch.tag === pitchTag.pitchTag.tag)) &&
                createSlug(pitch?.title) !== params.pitch &&
                (isBigScreen ? i < 6 : i < 4) && (
                  <>
                    <PitchCard key={pitch?._id} pitch={pitch} />
                  </>
                )
            )}
        </div>
      </div>
    </div>
  );
}
