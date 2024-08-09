
import Helmet from "../component/MetadataNew";
// import MetadataComponent from "../component/Metadata";


const AboutUs = () => {
  return (
    <>
      
      <Helmet
        title="About"
        link={"/aboutus"}
        addPostfixTitle ={true}
        />

      <div className="mt-[60px] bg-[#F2F1E8]">
        <div className="w-full max-w-[744px] mx-auto px-4 tablet:px-6 laptop:px-0 py-10 tablet:py-20 laptop:py-[100px]">
          <h1 className="text-20 tablet:text-24 mb-2">ABOUT US</h1>
          <h2 className="text-24 font-bold tablet:text-32 laptop:text-48 mb-8">
            I am always lost looking for high quality pitch decks from top
            founders who has raised. It was always scattered over the internet
            so i decided to compile them in one single directory.
          </h2>
          <h3 className="text-16 tablet:text-20 mb-2">
            My name is Olayanju Idris, I am a senior product designer who runs a
            small design studio called Pixelgum studios. I curated this platform
            to help pitchdeck and presentation designers who don’t like
            searching for stuff all over the internet. This is a directory of
            over 500+ carefully curated pitchdecks divided into different
            categories depending on what type of pitchdeck you are looking to
            design or pick inspiration from. We have done all the hardwork for
            you and we hope you like it.
          </h3>
          <h4 className="text-16 tablet:text-[20px] leading-[30px] tracking-[0] mb-8">
            Shoutout to Amod, Islamiyyah, Wahab, Adeshina, Teslim and Abdulzeez
            who poured out their hearts and soul to make this deck curation,
            design, building and development a success.
          </h4>
          <h3 className="text-24 font-bold tablet:text-32 mb-2">
            For sponsorship
          </h3>
          <p className="text-16 tablet:text-[20px] leading-[30px] tracking-[0]">
            As we grow to more reach, we are always welcome to sponsorships and
            collaborations. To reach us Please write to{" "}
            <a href="mailto:hello@pitchdeck.design" className="underline">
              hello@pitchdeck.design
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
