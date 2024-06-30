import { useEffect, useState } from "react";
import EmptyPitch from "./EmptyPitch";
import TemplateCard from "./template/TemplateCard";
import PitchCard from "./pitchdeck/PitchCard";
import { store } from "../store";

const CategoryArray = ({title}: {title: string}) => {
  const { templates, category } = store();
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
      if (category) {
        const shuffledArray = [...category];
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
  }, [category]);

  return category?.length === 0 ? (
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

export default CategoryArray;
