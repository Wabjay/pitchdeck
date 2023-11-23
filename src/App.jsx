
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


  const pathname = window.location.pathname
  console.log(pathname)



  return (
    <div className="App">

     <Router>
     <ScrollToTop/>

     {(pathname !== "/login" ) && <Navbar/>}
      <Routes>

        <Route path="/login" element={<Login/>} />
                    <Route path="*" element={<Home />}/>
                    <Route path="/blog" element={<Blog /> }/>
          <Route path="/blogpost/:post" element={<SinglePost />} />

          {user && <Route path="/adminBlog" element={<AdminBlog />} /> }

        </Routes>
        {/* <Footer /> */}
        {(!user && pathname !== "/login" ) && <Waitlist/>}
{(pathname !== "/login" ) &&<Footer />}
     </Router>
     {console.log(user)}
        </div>
  );
}

export default App;
