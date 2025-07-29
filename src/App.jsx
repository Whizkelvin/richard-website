
import React from 'react'
import Navbar from './components/navbar'
import Banner from './components/banner'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    
     
       <Router>
        <Routes>
          <Route path='/' element={<Navbar/>}/>
          
        </Routes>
       </Router>
      
    
      
      
      
   
  )
}

export default App