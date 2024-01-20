import { store } from "../store";
import PitchCard from "./pitchdeck/PitchCard";
import TemplateCard from "./template/TemplateCard";

const DynamicListComponent = () => {
  const { templates, pitches } = store();

  const mappedArray = pitches?.flatMap((item: any, index: number) => {
    // Introduce an object from the secondary array after every two items from the primary array
    const additionalObject =
      index % 3 === 1 && templates[Math.floor(index / 3)]
        ? [templates[Math.floor(index / 3)]]
        : [];

    return [item, ...additionalObject];
  });

  return (
    <>
      {mappedArray?.map((item, index) => (
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

export default DynamicListComponent;
