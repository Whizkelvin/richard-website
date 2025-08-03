import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import MenuProvider from './components/MenuProvider.jsx'


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <MenuProvider>
   <App />
 </MenuProvider>
 </BrowserRouter>
    

   
 
)
