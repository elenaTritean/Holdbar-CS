import React, { createContext, useContext } from 'react';

const theme = {
  h3: {
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "21px"
  },
  h4: {
    fontWeight: 600,
    fontSize: "0.875rem", 
    lineHeight: "21px"
  },

  greyColor:{
    color: "rgb(181, 182, 196)",
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