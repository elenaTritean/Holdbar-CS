import React, { createContext, useContext, useState } from "react";
import { ThemeProvider, useTheme } from "../components/styling/ThemeContext"



const FormContext = createContext();

export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formState, setFormState] = useState({});

  const handleChange = ({ target: { name, value } }) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const contextValue = { formState, handleChange };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

export const FormInput = ({ label, name, placeholder, style }) => {
  const { formState, handleChange } = useForm();
  const theme= useTheme()

  const styles = {
    container: {
      position: "relative",
      width: "100%",
      maxWidth: "100vw",
      marginTop:"22px",
    },

    label: {
      position: "absolute",
      top: "-10px", 
      left: "10px", 
      backgroundColor: "white",
      height:"2px",
      padding: "5px",
      ...theme.greyColor,
      ...theme.h5
      
    },

    input: {

        backgroundColor: "white", 
        width:"100%",
        maxWidth:"100%",
        border:"1px solid rgb(220,220,220)",
        borderRadius:"4px",
        height:"32px",
        boxSizing:"border-box",
        paddingLeft:"10px",
        ...theme.greyColor,
        ...theme.h5,
        ...style,

    },
  };


  return (
    <ThemeProvider>
      <div style={styles.container}>
        <label style={styles.label}>{label}</label>
        <input
          type="text"
          name={name}
          value={formState[name] || ""}
          onChange={handleChange}
          placeholder={placeholder}
          style={styles.input}
        />
      </div>
    </ThemeProvider>
  );
};
