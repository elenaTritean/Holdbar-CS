import React, { createContext, useContext } from 'react';
import classes from "./FontContext.module.css"




const FontContext = createContext(classes);



export const FontProvider = ({ children }) => {


  return (
    <FontContext.Provider value={`${classes.fontStyles}`}>
      {children}
    </FontContext.Provider>
  )
}

export const useFontStyles = () => useContext(FontContext);