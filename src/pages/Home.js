import React from "react";
import home from "../assets/home1.jpg";
import Footer from "../components/Footer";

const Home = () => {
  const imageUrl = "https://example.com/your-image.jpg";

  return (
    <div className="mt-20 overflow-hidden">
      <img src={home} alt="Your Image" className="w-full h-[85vh]" />
      <Footer></Footer>
    </div>
  );
};

export default Home;
