import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import pic from '../assets/my-foto-1.jpg'
import { useNavigate } from 'react-router-dom';


const banner = () => {
  useEffect(() => {
    AOS.init({
      duration:500,
      delay:300,
      once: false     // whether animation should happen only once
    });
  }, []);

  const navigate = useNavigate()
  return (
    <div>
        <div className='relative w-full z-0 font-Inter'>
            <img src={pic} alt="" className='w-full blur-[0px] rounded-md'/>
            <div data-aos = "fade-up" className="p-4 w-full bg-black/50 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 picbg ">
            <p className='font-inter text-4xl text-white font-bold mb-4'>Drs. Agbeko Kwame Nyaku</p>
            <p className='text-white font-inter mb-4'>TOLK-VERTALER</p>
            <p className='text-white font-inter'>EWE - TWI - GA - PIDGIN - KRIO - ENGELS - FRANS</p>
            <button className='bg-red-700 text-white p-2 mt-4 cursor-pointer rounded-sm' onClick={() => navigate("/about")}>KNOW MORE</button>
            </div>
        </div>
       
    </div>
  )
}

export default banner