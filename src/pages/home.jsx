import React from 'react'
import Banner from "../components/banner"
import Services from "../components/services"
import Courses from '../components/course'
import Experience from '../components/experience'

const home = () => {
  return (
    <div className='mt-[18.5%]'>
      {/* mobile version */}
      <div className='md:hidden'>
        <Banner />
      </div>
      {/* destop version */}
      <div>

      </div>
      <Courses />
      <Experience />
    </div>
  )
}

export default home