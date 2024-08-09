import { useEffect, useState } from "react";
import EmptyPitch from "./EmptyPitch";
import TemplateCard from "./template/TemplateCard";
import PitchCard from "./pitchdeck/PitchCard";
import { store } from "../store";

const TagsArray = ({tag}: {tag: string}) => {
  const { templates, pitches } = store();
  const [array, setArray] = useState<any[]>([]);
  const [filterPitches, setFilterPitches] = useState<any[]>([])

  // Filter based on the tag of the page
useEffect(() => {
  const filter = pitches?.filter((pitch) => pitch.tag === tag)
  setFilterPitches(filter)
}, [pitches, tag]);

  const mappedArray = array?.flatMap((item: any, index: number) => {
    // Introduce an object from the secondary array after every two items from the primary array
    const additionalObject =
      templates && index % 5 === 1 && templates[Math.floor(index / 5)]
        ? [templates[Math.floor(index / 5)]]
        : [];
    return [item, ...additionalObject];
  });

  useEffect(() => {
    const shuffleArray = async () => {
      // Create a copy of the array to avoid modifying the original array
      if (filterPitches) {
        const shuffledArray = [...filterPitches];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
          ];
        }
        setArray(shuffledArray);
      }
    };

    shuffleArray();
  }, [filterPitches]);

  return filterPitches?.length === 0 ? (
    <EmptyPitch />
  ) : (
    <>
      {mappedArray?.map((item: any[], index: number) => (
        <div key={index}>
          {typeof item === "object" &&
            (item.hasOwnProperty("cost") ? (
              <TemplateCard key={index} template={item} />
            ) : (
              <PitchCard key={index} pitch={item} />
            ))}
        </div>
      ))}
    </>
  );
};

export default TagsArray;
