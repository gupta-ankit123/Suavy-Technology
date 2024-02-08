import "./App.css";
import Navbar from "./components/Navbar";
import Newsletter from "./pages/Newsletter";
import Patentfiled from "./pages/Patentfiled";
import Projectcomp from "./pages/Projectcomp";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs";
import Investor from "./pages/Investor";
import Progress from "./pages/Progress";
import Footer from "./components/Footer";
import Incubated from "./pages/Incubated";

function App() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/patentfiled" element={<Patentfiled />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/projectcomp" element={<Projectcomp />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/incubated" element={<Incubated />} />
      </Routes>
    </div>
  );
}

export default App;
