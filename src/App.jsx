/* eslint-disable jsx-a11y/iframe-has-title */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {QueryClient, QueryClientProvider} from 'react-query'
import Home from "./pages/Home";
import PitchDeck from "./pages/Pitchs";
import Category from "./pages/Category";
import Tags from "./pages/Tags";
import Templates from "./pages/Templates";
import Waitlist from "./sections/Waitlist";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import Blog from "./pages/Blog";
import SinglePost from "./pages/SinglePost";
import SinglePitch from "./pages/SinglePitch";
import { ScrollToTop } from "./component/ScrollToTop";
import Policy from "./pages/Policy";
import NotFound from "./pages/Notfound";
import ServerError from "./pages/serverError";
import Terms from "./pages/Terms";
import AboutUs from "./pages/AboutUs";
import { useCookies, CookiesProvider } from "react-cookie";
import { useEffect, useState } from "react";
import { store } from "./store";
// import Loading from "./component/Loading";
import SingleTemplate from "./pages/SingleTemplate";
import LoginCard from "./component/Auth/LoginCard";
import DataCard from "./component/Auth/DataCard"
import Login from "./component/Auth/Login";
import axios from "./lib/axios";
import Helmet from "./component/MetadataNew";
import OTPCard from "./component/Auth/OTPCard";
import './tailwind.css'
import PolicyGenerator from "./pages/Generator/policy";
import TermsGenerator from "./pages/Generator/terms";
import RefundGenerator from "./pages/Generator/Refund";
import Sitemap from "./pages/Sitemap";
import ScrollToTopButton from "./component/ScrollToTopButton";

function App() {

  const queryClient = new QueryClient()

  // const pathname = window.location.pathname;
  const [cookies] = useCookies(["user", "token", "isLogged"]);
  const { setUser, setToken, showLogin, showData, loginWithCard, setTags, showOTP, setAddress } = store();
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null);
  // const [userInfo, setUserInfo] = useState({})

  const getEmail = (res) =>{
    setEmail(res)
    }
  
// const getUserInfoForOTP =(res)=>{
//       setUserInfo(res)
//       }

  useEffect(() => {
    setUser(cookies.user);
    setToken(cookies.token);
    // setIsLoggedin(cookies.isLogged);
  }, [setToken, setUser, cookies]);
  
  // Get Tags 
  useEffect(() => {
    axios.get('/pitch/tags')
      .then(function (response) {
        setTags(response.data);
      })
  }, [setTags]);

  // Get Location

  useEffect(() => {
    fetchLocationInfo();
  }, []);


  const fetchLocationInfo = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      setAddress(data.country_name);
      // console.log(data.country_name);

    } catch (error) {
      console.error("Error fetching location info:", error);
    }
  };

  const down = false

  return (
    <QueryClientProvider client={queryClient}>
    <CookiesProvider>
  
      <Helmet link="/" 
       />
      <div className={`App h-[100vh] ${showLogin || showData || loginWithCard ? 'overflow-hidden' : 'overflow-overflow'}`} >
        <Router>
          <ScrollToTop />
       <ScrollToTopButton />

          {/* <Loading /> */}
          <Navbar />
          <Routes>
            {down ? 
            <>
            <Route path="/" element={<ServerError />} />
            <Route  path="*" element={<ServerError />} />
            </>
            : <>
            <Route  path="*" element={<NotFound />} />
            <Route path="/" element={<PitchDeck />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/:tag" element={<Tags />} />
            <Route path="/make-deck" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/template" element={<Templates />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/blogpost/:post" element={<SinglePost />} />
            <Route path="/pitch/:pitch" element={<SinglePitch />} />
            <Route path="/template/:template" element={<SingleTemplate />} />
            <Route path="/generate-policy" element={<PolicyGenerator />} />
            <Route path="/generate-terms" element={<TermsGenerator />} />
            <Route path="/generate-refund" element={<RefundGenerator />} />
            {/* <Route path="/sitemap" element={<Sitemap />} /> */}
            </>}
            </Routes>
          <Waitlist />
          <Footer />
          {showLogin && <Login/>}
          {loginWithCard && <LoginCard getEmail={getEmail}/>}
       {showData && <DataCard email={email}/>}
       {showOTP && <OTPCard email={email}/>}
        </Router>
      </div>
    </CookiesProvider>
   
    </QueryClientProvider>
  );
}

export default App;
