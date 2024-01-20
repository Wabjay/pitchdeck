import axios from "../lib/axios";
import { store } from "../store";
import PitchCard from "./pitchdeck/PitchCard";
import TemplateCard from "./template/TemplateCard";
import { useMemo } from "react";

const DynamicListComponent = () => {
  const { templates, pitches, setIsLoading, fetchPitches, fetchTemplates } =
    store();

  useMemo(() => {
    // eslint-disable-next-line no-unused-expressions
    setIsLoading(true);
    try {
      axios.get("/pitch/getAll").then(function (response) {
        fetchPitches(response.data.pitchDecks);
        try {
          axios.get("/templates/getTemplates").then(function (response) {
            fetchTemplates(response.data);
            setIsLoading(false);
          });
        } catch (error) {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        }
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  }, [fetchPitches, fetchTemplates, setIsLoading]);

  // Map the primary array while injecting objects from the secondary array
  const mappedArray = pitches.flatMap((item, index) => {
    // Introduce an object from the secondary array after every two items from the primary array
    const additionalObject =
      index % 3 === 1 && templates[Math.floor(index / 3)]
        ? [templates[Math.floor(index / 3)]]
        : [];

    return [item, ...additionalObject];
  });

  return (
    <>
      {mappedArray.map((item, index) => (
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
