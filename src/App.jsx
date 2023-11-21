import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./firebase-config";
import Login from "./admin/Login";
import Home from "./Home";
import Waitlist from "./sections/Waitlist";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import AdminBlog from "./admin/Blog";
import Blog from './Blog';
import SinglePost from "./SinglePost";
import { ScrollToTop } from "./component/ScrollToTop";

function App() {
  const [user, error] = useAuthState(auth);

  return (
    <div className="App">

     <Router>
     <ScrollToTop/>

     {!user && <Navbar/>}
      <Routes>

        <Route path="/login" element={<Login/>} />
          <Route path="/blog" element={<Blog /> }/>
          <Route path="/adminBlog" element={<AdminBlog />} />
          <Route path="/blogpost/:id" element={<SinglePost />} />
          <Route path="*" element={user ? <AdminBlog/> : <Home />}/>
        </Routes>
        {/* <Footer /> */}
        {!user && <Waitlist/>}
<Footer />
     </Router>
     {console.log(user)}
        </div>
  );
}

export default App;
