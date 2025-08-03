import React, { createContext, useState } from 'react'

 export const menuContext = createContext()

const MenuProvider  = ({children}) => {

const [isMenuOpen, setIsMenuOpen] = useState(true)

const updateMenu = (menu) =>{
    setIsMenuOpen(menu)
}
 const value = {
    isMenuOpen,
    updateMenu,
  };
   
  return (
    <menuContext.Provider value={value}>
        {children}
    </menuContext.Provider>
  )
}

export default MenuProvider 