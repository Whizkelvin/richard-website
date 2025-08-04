import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";


const Courses = () => {
    const Navigate = useNavigate()
     useEffect(() => {
        AOS.init({
          once: false,
        });
      }, []);
   
 return (
    <div className="text-center font-Inter mt-4">
      <h1 className='text-2xl font-bold text-red-700'>--- Courses ----</h1>
      <div className="grid grid-cols-2 p-4 font-Inter text-white gap-4">
        <div data-aos="fade-up" className="bg-black/90 w-full h-60px py-4 rounded-md">
            <p className='font-bold' >1976-1981</p>
            <p>St. Augustine's College - G.C.E. Ordinary Level</p>
        </div>
        <div data-aos="fade-up" className="bg-black/90 w-full h-60px py-4 rounded-md">
            <p className='font-bold'>1982-1984</p>
            <p>Accra Workers College - G.C.E. Advanced Level</p>
        </div>
        <div data-aos="fade-up" className="bg-black/90 w-full h-60px py-4 rounded-md">
            <p className='font-bold'>1986-1988</p>
            <p>Institut Biblique d'Abidjan - Diplôme en Théologie</p>
        </div>
        <div data-aos="fade-up" className="bg-black/90 w-full h-60px py-4 rounded-md">
            <p className='font-bold'>1989-1990</p>
            <p>Instituut voor Inpassing (Utrecht) - Universitaire Taalcursus Nederlands</p>
        </div>
        
      </div>
      <div data-aos="fade-up" className="font-Inter font-medium text-lg text-red-800 gap-4 text-end mr-5">
        <button onClick={()=>Navigate("/course")} className='cursor-pointer underline'>See More</button>
      </div>
      
    </div>
  );
}

export default Courses