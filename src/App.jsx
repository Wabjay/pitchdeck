/* eslint-disable jsx-a11y/iframe-has-title */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {QueryClient, QueryClientProvider} from 'react-query'
import Home from "./pages/Home";
import PitchDeck from "./pages/Pitchs";
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

function App() {

  const queryClient = new QueryClient()

  // const pathname = window.location.pathname;
  const [cookies] = useCookies(["user", "token", "isLogged"]);
  const {  setUser, setToken, showLogin, showData, loginWithCard, setTags, showOTP } = store();
  const [email, setEmail] = useState('')
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



  return (
    <QueryClientProvider client={queryClient}>
    <CookiesProvider>
  
      <Helmet link="/" 
       />
      <div className={`App h-[100vh] ${showLogin || showData || loginWithCard ? 'overflow-hidden' : 'overflow-overflow'}`} >
        <Router>
          <ScrollToTop />
          {/* <Loading /> */}
          <Navbar />
          <Routes>
            <Route  path="*" element={<NotFound />} />
            <Route path="/" element={<PitchDeck />} />
            <Route path="/make-deck" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/template" element={<Templates />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/blogpost/:post" element={<SinglePost />} />
            <Route path="/pitch/:pitch" element={<SinglePitch />} />
            <Route path="/template/:template" element={<SingleTemplate />} />
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
