import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import pic from '../assets/my-foto-1.jpg'


const banner = () => {
  useEffect(() => {
    AOS.init({
      duration:500,
      delay:300,
      once: false     // whether animation should happen only once
    });
  }, []);
  return (
    <div>
        <div className='relative w-full mt-2'>
            <img src={pic} alt="" className='w-full blur-[2px]'/>
            <div data-aos = "fade-up" className="p-4 w-full text-red-700 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 picbg ">
            <p className='font-inter text-4xl text-white font-bold mb-4'>Drs. Agbeko Kwame Nyaku</p>
            <p className='text-white font-inter mb-4'>TOLK-VERTALER</p>
            <p className='text-white font-inter'>EWE - TWI - GA - PIDGIN - KRIO - ENGELS - FRANS</p>
            </div>
        </div>
        <div>
            <h1 className='text-red-700 font-extrabold text-3xl'>OUR SERVICES ➡</h1>
           
               
        </div>
    </div>
  )
}

export default banner