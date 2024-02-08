import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Footer from "./Footer";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const links = [
    { name: "HOME", link: "/" },
    {
      name: "ABOUT US",
      link: "/",
      dropdownItems: ["Company", "Investor", "Careers", "Newsletter"],
    },
    {
      name: "PRODUCTS",
      link: "/",
      dropdownItems: ["Smart Dome", "Smart Microgrid", "Upcoming Products"],
    },
    {
      name: "SOLUTIONS",
      link: "/",
      dropdownItems: [
        "ARMC Network Architecture",
        "Industrial IoT",
        "Industrial MicroGrid",
        "Industrial Automation",
        "Custom Power Converters",
      ],
    },
    { name: "CONTACT US", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState("transparent");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // Change the threshold based on when you want the color to change
    const threshold = 0;

    if (scrollPosition > threshold) {
      setNavbarColor("white");
    } else {
      setNavbarColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className={`shadow-md w-full fixed top-0 z-50 bg-${navbarColor}`}>
        <div className="md:flex items-center justify-between bg-grey py-5 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 ">
            <div>
              <Link to="">
                <img className="h-[30px] w-10" src={logo}></img>
              </Link>
            </div>
            SUAVY
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 opacity-100" : "top-[-490px]"
            } md:opacity-100 opacity-0`}
          >
            {links.map((link) => (
              <Dropdown key={link.name} {...link} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
