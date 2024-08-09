import { useEffect, useState } from "react";
import EmptyPitch from "../EmptyPitch";
import TemplateCard from "../template/TemplateCard";
import PitchCard from "./PitchCard";
import { store } from "../../store";

const DynamicListComponent = ({loggedIn} :{loggedIn: boolean}) => {
  const { templates, pitches } = store();
  const [array, setArray] = useState<any[]>([]);

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
      if (pitches) {
        const shuffledArray = [...pitches];
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
  }, [pitches]);

  return pitches?.length === 0 ? (
    <EmptyPitch />
  ) : (
    <>
   {mappedArray?.map((item: any[], index: number) => {
  const shouldShow = !loggedIn ? index <= 11 : true;

  if (!shouldShow || typeof item !== "object") return null;

  // Choose the appropriate component based on whether "cost" exists in item
  const Component = item.hasOwnProperty("cost") ? TemplateCard : PitchCard;

  return (
    <div key={index}>
      <Component template={item} pitch={item} />
    </div>
  );
})}

    {/* <GenerateSitemap templates={templates} blogs={null} pitches={pitches} /> */}

    </>
  );
};

export default DynamicListComponent;
