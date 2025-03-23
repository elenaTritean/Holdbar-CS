import React, { createContext, useContext } from 'react';

const theme = {
  h1:{
    fontSize: "1.3rem",
    lineHeight: "120%",
  },

  h3: {
    fontSize: "1rem",
    lineHeight: "120%",
  },
  h4: {
    fontSize: "0.875rem", 
    lineHeight: "120%"
  },

  h5: {
    fontSize: "0.65rem", 
    lineHeight: "120%"
  },

  h6: {
    fontSize: "0.55rem", 
    lineHeight: "120%"
  },

  greyColor:{
    color: "rgb(141, 143, 163)",
  },

  medium:{
    fontWeight: 500
  },

  normal: {
    fontWeight: 400
  }

}


const ThemeContext = createContext(theme);




export const ThemeProvider = ({ children }) => {


  return (
    <ThemeContext.Provider value={theme}>
       {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);