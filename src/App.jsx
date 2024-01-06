import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PitchDeck from "./pages/Pitchs";
import Waitlist from "./sections/Waitlist";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import Blog from "./pages/Blog";
import SinglePost from "./pages/SinglePost";
import SinglePitch from "./pages/SinglePitch";
import { ScrollToTop } from "./component/ScrollToTop";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";
import { useCookies, CookiesProvider } from "react-cookie";
import { useEffect } from "react";
import { store } from "./store";
import Loading from "./component/Loading";

function App() {
  // const pathname = window.location.pathname;
  const [cookies] = useCookies(["user", "token", "isLogged"]);
  const { setIsLoggedin, setUser, setToken } = store();

  useEffect(() => {
    setUser(cookies.user);
    setToken(cookies.token);
    setIsLoggedin(cookies.isLogged);
  }, [setToken, setUser, setIsLoggedin, cookies]);

  return (
    <CookiesProvider>
      <div className="App">
        <Router>
          <ScrollToTop />
          <Loading />
          <Navbar />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pitch-decks" element={<PitchDeck />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blogpost/:post" element={<SinglePost />} />
            <Route path="/pitch/:pitch" element={<SinglePitch />} />
          </Routes>
          <Waitlist />
          <Footer />
        </Router>
      </div>
    </CookiesProvider>
  );
}

export default App;
