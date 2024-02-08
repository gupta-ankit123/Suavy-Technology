import React from "react";
import Footer from "../components/Footer";

import investor from "../assets/investors.jpg";
const Investor = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col lg:flex-row lg:gap-48">
          <div className="lg:w-[50%] mt-28">
            <img
              src={investor}
              className="w-full lg:w-[600px] mx-auto lg:ml-28"
              alt="Investor"
            />
          </div>
          <div className="flex flex-col justify-center lg:mt-20 lg:ml-24 gap-5">
            <p className="text-center mt-0 lg:text-left text-sm">Namaste</p>
            <p className="text-[32px] font-bold font-serif text-center lg:text-left">
              Welcome Investors
            </p>
            <p className="text-[24px] font-medium text-center lg:text-left">
              We Need Investment. Please give
            </p>
          </div>
        </div>

        <div className="mt-10   bg-gray-300 lg:mt-20 w-full h-[20vh]">
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-[32px] font-bold font-serif mt-2">
              Company Files
            </p>
            <p className="font-normal text-[20px] p-2 bg-slate-50">
              Files Coming Soon!
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Investor;
