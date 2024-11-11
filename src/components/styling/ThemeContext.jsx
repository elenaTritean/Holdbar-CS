import React, { createContext, useContext } from 'react';
import theme from "./Theme.module.css";

const ThemeContext = createContext(theme);




export const ThemeProvider = ({ children }) => {


  return (
    <ThemeContext.Provider value={theme}>
       {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);