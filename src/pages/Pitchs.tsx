import Hero from "../sections/Pitch/PitchHero";
import PitchContent from "../sections/Pitch/PitchContent";
import Helmet from "../component/MetadataNew";
import Schema from "../component/Schema";
import { useCookies } from "react-cookie";
import ViewMore from "../sections/Viewmore";
import Discover from "../sections/Discover";
import MakeDeck from "../sections/MakeDeck";
// import ScrollToTopButton from "../component/ScrollToTopButton";

const Home = () => {
  const [cookies, setCookie] = useCookies(["pitch", "isLogged"]);

  return (
    <>
      <Helmet link="/" />
      <Schema
        name={undefined}
        description={undefined}
        url={undefined}
        imageUrl={undefined}
      />
      <div className="mt-[60px]">
      {!cookies.isLogged && <Hero />}
        <PitchContent loggedIn={cookies.isLogged} />
      {!cookies.isLogged && <ViewMore/>}
      <Discover />
      <MakeDeck />

      </div>
    </>
  );
};

export default Home;
