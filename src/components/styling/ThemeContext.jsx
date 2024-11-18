import React, { createContext, useContext } from 'react';

const theme = {
  h3: {
    fontSize: "16px",
    lineHeight: "120%"
  },
  h4: {
    fontSize: "0.875rem", 
    lineHeight: "120%"
  },

  h5: {
    fontSize: "0.75rem", 
    lineHeight: "120%"
  },

  greyColor:{
    color: "rgb(181, 182, 196)",
  },

  medium:{
    fontWeight: 600
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