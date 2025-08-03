import React, { useState, useEffect, useContext } from "react";
import logo from "../assets/logo.svg";
import { AiOutlineMenuFold } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import NavMenu from "./navmenu";
import {menuContext} from "./MenuProvider";

const Header = () => {
  
  const { updateMenu,isMenuOpen } = useContext(menuContext);
  const openMenu = () => updateMenu(true);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div className="relative w-full font-Inter">
      <header className="p-5 w-full shadow-lg z-0">
        <div className="flex justify-between">
          <img src={logo} alt="" className="w-12 lg:w-24 md:24 xl:24" />
          <button data-aos="fade-up" onClick={openMenu}>
            <AiOutlineMenuFold className="text-4xl md:hidden" />
          </button>
        </div>
      </header>
      <nav>
        <NavMenu/>
      </nav>
    </div>
  );
};

export default Header;
