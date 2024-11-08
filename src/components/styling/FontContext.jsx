import React, { createContext, useContext } from 'react';
import classes from "./FontContext.module.css"




const FontContext = createContext(classes);



export const FontProvider = ({ children }) => {

  console.log(classes.fontStyles)
  return (
    <FontContext.Provider value={`${classes.fontStyles}`}>
      {children}
    </FontContext.Provider>
  )
}

export const useFontStyles = () => useContext(FontContext);