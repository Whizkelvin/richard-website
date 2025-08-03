
import React from 'react'

import {Router,Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Course from './pages/course'
import Services from './pages/services'
import Experience from './pages/experience'
import Header from './components/header'

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
       
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/course' element={<Course />}/>
          <Route path='/service' element={<Services />}/>
          <Route path='/experience' element={<Experience />}/>
        </Routes>
      
       
    </div>
     
      
      
    
      
      
      
   
  )
}

export default App