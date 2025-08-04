import React, { useState, useEffect, useContext } from "react";
import logo from "../assets/logo.svg";
import { AiOutlineMenuFold } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

import { menuContext } from "./MenuProvider";
import NavMenu from "./navmenu";

const Header = () => {
  const { updateMenu, isMenuOpen } = useContext(menuContext);
  const openMenu = () => updateMenu(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div className="fixed w-full font-Inter top-0 left-0 h-[10%] z-50 bg-[#ffffe3] shadow-xl rounded-b-md">
      <header className="p-5 w-full  z-0 ">
        <div className="flex justify-between items-center">
          <img src={logo} alt="" className="w-12 lg:w-24 md:24 xl:24" />

          <NavMenu />

          <button
            data-aos="fade-up"
            onClick={openMenu}
            className="md:hidden relative"
          >
            <AiOutlineMenuFold className="text-4xl" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
