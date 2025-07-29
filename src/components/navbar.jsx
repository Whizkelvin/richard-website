import React, { useState,useEffect } from "react";
import logo from "../assets/logo.svg";
import { AiOutlineMenuFold } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { CiLocationOn,CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import Banner from '../components/banner'

const Navbar = () => {

  useEffect(() => {
    AOS.init({
      
      once: false     // whether animation should happen only once
    });
  }, []);

  const nav = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    { name: "About", path: "/about" },
    { name: "Contact us", path: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = ()=> setIsMenuOpen(true)
  const closeMenu = ()=> setIsMenuOpen(false)

  return (
    <div className="relative">
      
    <div className="w-full h-16 border-black border-b-2 flex justify-between items-center  z-50 top-0">
      <div className="justify-between w-full p-3 fixed top-0 left-0 bg-[#ffffe3]">
        <div className="flex justify-between items-center w-full">
          <img src={logo} alt="" className="sm:w-40 md:24 w-9" />
          <button data-aos="fade-up" onClick={openMenu}><AiOutlineMenuFold  className="text-4xl"/></button>
       </div>
      </div>
       </div>
       <div>
        <Banner />
       </div>
      
      <div className={`trans h-screen absolute z-50 w-full top-0 left-0 lg:hidden md:hidden justify-end transform transition-transform duration-500 ease-in-out flex ${isMenuOpen ? "translate-x-0":"translate-x-full"}`} >
        <div className="bg-white flex flex-col w-[77%] p-4 border-0 border-l-3 border-red-800 h-screen  transform transition-transform duration-300 ease-in-out translate-x-0">
          <div className="flex justify-between mb-7 items-center">
            <img src={logo} alt="" className="sm:w-40 md:24 w-16" />
            <button data-aos='fade-left' onClick={closeMenu} className="rounded-full bg-red-800 w-9 h-9 font-extrabold text-white">
              X
            </button>
          </div>
          <div >
               {nav.map((element, index) => (
            <div
              key={index}
              className="mt-1 text-md  font-medium "
            >
              <ul>
                <Link to={element.path}>
                  <li data-aos ="zoom-in-left" data-aos-easing="ease-in-sine" data-aos-duration = "2000" data-aos-delay = "600" className="border-0 border-b-[0.5px] uppercase py-2 ">{element.name}</li>
                </Link>
              </ul>
            </div>
          ))}
          </div>
         
          <div  className="mt-16 flex flex-col ">
            <h1 className=" font-medium  text-2xl">CONTACT INFO</h1>
            <div className="text-sm font-medium " >
              <p className="my-2 flex items-center text-md gap-3" data-aos="fade-up" data-aos-duration="2500" data-aos-delay="600"><CiLocationOn className="text-2xl text-red-800"/>  simonshavenstraat 38</p>
              <p className="mb-2 flex items-center text-md gap-3" data-aos="fade-up" data-aos-duration="2500" data-aos-delay="700"><CiLocationArrow1 className="text-2xl text-red-800"/>1107 VB Amsterdam</p>
              <p className="mb-2 flex items-center text-md gap-3" data-aos="fade-up" data-aos-duration="2500" data-aos-delay="800"><MdOutlineMarkEmailRead className="text-xl text-red-800"/>nyaku@planet.nl</p>
              <p className="mb-2 flex items-center text-md gap-3" data-aos="fade-up" data-aos-duration="2500" data-aos-delay="900"><FiPhone className="text-xl text-red-800"/>06 51893722 / 020 620 5598</p>
              <p></p>
            </div>
            <div data-aos="fade-up" className="flex items-center justify-center">
            <a href=""><button className="bg-red-800 px-6 py-4 text-white rounded-lg mt-9">BOOK APPOINTMENT</button></a>
          </div>
          </div>
         
        </div>
        
      </div>
   
    </div>
  );
};

export default Navbar;
