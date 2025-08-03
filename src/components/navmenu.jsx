import React, { useState, useEffect, useContext } from "react";

import AOS from "aos";
import { motion, AnimatePresence } from "framer-motion";
import "aos/dist/aos.css";
import { CiLocationOn, CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { menuContext } from "./MenuProvider";

const NavMenu = () => {
  const nav = [
    { name: "Home", path: "/" },
    { name: "Course", path: "/course" },
    { name: "Experience", path: "/experience" },
    { name: "Services", path: "/service" },
    { name: "About Me", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const { isMenuOpen, updateMenu } = useContext(menuContext);



  const closeMenu = () => updateMenu(true);
  const navVariants = {
    hidden: {
      x: "100%", // completely offscreen to the right
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <div className=" z-40">
      <AnimatePresence>
        {!isMenuOpen && (
          <motion.div
            className="font-Inter w-full bg-gray-400/60 h-screen absolute top-0 left-0 justify-end flex md:hidden z-50"
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* {mobile navigation} */}
            <nav className="w-[70%] bg-white p-4 border-l-2 border-red-700">
              {/* mobile navigatio logo and close button */}
              <div className="flex justify-between items-center">
                <img src={logo} alt="" className="w-16" />
                <button
                  onClick={closeMenu}
                  className="bg-red-700 text-white rounded-full font-bold w-10 h-10"
                >
                  X
                </button>
              </div>

              {/* navigation Menus */}
              <div className="mt-7">
                {nav.map((item, index) => (
                  <ul key={index}>
                    <li className="font-semibold font-Inter border-b-1 border-red-700 py-2 uppercase">
                      <Link to={item.path} onClick={closeMenu}>
                        {item.name}
                      </Link>
                    </li>
                  </ul>
                ))}

                {/* contact information */}
                <div className="mt-9">
                  <h1 className="font-bold text-xl">CONTACT INFO</h1>
                  <div>
                    <p
                      className="my-2 flex items-center text-md gap-3"
                      data-aos="fade-up"
                      data-aos-duration="2500"
                      data-aos-delay="200"
                    >
                      <CiLocationOn className="text-2xl text-red-800" />{" "}
                      simonshavenstraat 38
                    </p>
                    <p
                      className="mb-2 flex items-center text-md gap-3"
                      data-aos="fade-up"
                      data-aos-duration="2500"
                      data-aos-delay="200"
                    >
                      <CiLocationArrow1 className="text-2xl text-red-800" />
                      1107 VB Amsterdam
                    </p>
                    <p
                      className="mb-2 flex items-center text-md gap-3"
                      data-aos="fade-up"
                      data-aos-duration="2500"
                      data-aos-delay="200"
                    >
                      <MdOutlineMarkEmailRead className="text-xl text-red-800" />
                      nyaku@planet.nl
                    </p>
                    <p
                      className="mb-2 flex items-center text-md gap-3"
                      data-aos="fade-up"
                      data-aos-duration="2500"
                      data-aos-delay="200"
                    >
                      <FiPhone className="text-xl text-red-800" />
                      06 51893722 / 020 620 5598
                    </p>
                  </div>
                  <div
                    data-aos="fade-up"
                    className="flex items-center justify-center"
                  >
                    <button className="bg-red-800 px-6 py-4 text-white rounded-lg mt-9">
                      BOOK APPOINTMENT
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Destop navigation */}
      <div className="hidden md:flex">
        <div className="flex items-center justify-between">
          {nav.map((item, index) => (
            <ul key={index}>
              <li className="font-Inter mr-3 font-semibold text-md active:border-b-2 active:border-red-700 lg:text-xl lg:mr-5">
                <Link to={item.path} onClick={closeMenu}>
                  {item.name}
                </Link>
              </li>
            </ul>
          ))}
        </div>

        <button className="bg-red-800 px-4 py-2 text-white rounded-lg lg:ml-9">
          BOOK APPOINTMENT
        </button>
      </div>
    </div>
  );
};

export default NavMenu;
