import React from 'react'
import Banner from "../components/banner"

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
    </div>
  )
}

export default home