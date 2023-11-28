import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Waitlist from "./sections/Waitlist";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import Blog from "./pages/Blog";
import SinglePost from "./pages/SinglePost";
import { ScrollToTop } from "./component/ScrollToTop";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";

function App() {

  const pathname = window.location.pathname;
  console.log(pathname);

  return (
    <PayPalScriptProvider  options={{ clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
      <div className="App">
        <Router>
          <ScrollToTop />

          {<Navbar />}
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blogpost/:post" element={<SinglePost />} />

          </Routes>
          <Waitlist />
          <Footer />
        </Router>
      </div>
      </PayPalScriptProvider>
  );
}

export default App;
