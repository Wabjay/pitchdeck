import { useEffect } from "react";
import { store } from "../store";
import { useQuery } from "react-query";
import { loadTemplates } from "../lib/functions";
import TemplateCard from "../component/template/TemplateCard";

const Discover = () => {
  const { fetchTemplates, templates, setIsComponentLoading, componentLoading } =
    store();
  // Fetch All Templates
  const { data: loadedTemplates, isLoading } = useQuery(
    "templates",
    loadTemplates
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    // templates === null &&
    setIsComponentLoading(isLoading);
    fetchTemplates(loadedTemplates);
  }, [
    fetchTemplates,
    templates,
    setIsComponentLoading,
    componentLoading,
    isLoading,
    loadedTemplates,
  ]);

  return (
    <div className="bg-white">
      <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 text-center py-[40px] tablet:py-[80px] laptop:pt-[100px]">
        <div className="w-fit">
          <h2 className="text-left w-full laptop:max-w-[758px] text-24 font-bold tablet:text-32 laptop:text-40 desktop:text-48 text-[#000] mb-6">
            Discover ready made Pitch deck Templates to speed up your work
          </h2>
          <p className=" text-left w-full laptop:max-w-[758px] text-[16px] leading-6 tablet:text-[20px] tablet:leading-[28px] laptop:text-[20px] laptop:leading-8 text-[#000] mb-[40px] font-normal">
            We helped you save time from starting scratch with our high quality
            and easy to use Pitch deck templates to get you up to speed
          </p>

          <div className="w-full">
            <div className="w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-0 pt-[25px]">
              <div className="grid tablet:grid-cols-2 laptop:grid-cols-3 gap-6 tablet:gap-[30px] laptop:flex-row laptop:gap-[30px]">
                {templates?.map(
                  (item, index) =>
                    index < 3 && <TemplateCard key={item._id} template={item} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
