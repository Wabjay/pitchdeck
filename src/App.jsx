import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { PaypalScriptProvider } from "@paypal/react-paypal-js";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase-config";
import Login from "./admin/Login";
import Home from "./pages/Home";
import Waitlist from "./sections/Waitlist";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import AdminBlog from "./admin/Blog";
import Blog from "./pages/Blog";
import SinglePost from "./pages/SinglePost";
import { ScrollToTop } from "./component/ScrollToTop";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";

function App() {
  const [user, error] = useAuthState(auth);

  const pathname = window.location.pathname;
  console.log(pathname);

  return (
    <PayPalScriptProvider  options={{ clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
      <div className="App">
        <Router>
          <ScrollToTop />

          {<Navbar />}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blogpost/:post" element={<SinglePost />} />

            {user && <Route path="/adminBlog" element={<AdminBlog />} />}
          </Routes>
          {/* <Footer /> */}
          {!user && pathname !== "/login" && <Waitlist />}
          {pathname !== "/login" && <Footer />}
        </Router>
        {console.log(user)}
      </div>
      </PayPalScriptProvider>
  );
}

export default App;
