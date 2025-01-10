import React, { createContext, useContext, useState } from "react";
import { useTheme } from "../components/styling/ThemeContext";

//FormContext is created as an empty object to be shared across components
const FormContext = createContext();

//FormProvider specifies the FormContext object's value
export const FormProvider = ({ children }) => {
  const [formState, setFormState] = useState({});//initialized and empty state objects for the form

  //HandleChange updates formState when a form field changes
  const handleChange = ({ target: { name, value } }) =>//The parameter used in the function is a destructured object. It destructures name and value from the target object
    setFormState( //setFormState is the function used to update the form's state.
      (previous) => // setFormState is called with another function that guarantees the update is based on the previous state.
        ({ ...previous, [name]: value }));// Javascript object literal. It is used to create a new object.
  //With the "..." spread operator, 

  const contextValue = { formState, handleChange };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};


export const useForm = () => useContext(FormContext);

export const FormInput = ({ label, name, placeholder, style, textAid, pattern, onBlur, type }) => {
  const [inputState, setInputState] = useState("default");
  const [isError, setIsError] = useState(false);
  const { formState, handleChange } = useForm();
  const theme = useTheme();



  const styles = {
    container: {
      position: "relative",
      width: "100%",
      maxWidth: "100vw",
      marginTop: "22px",
    },
    label: {
      position: "absolute",
      top: "-10px",
      left: "10px",
      backgroundColor: "white",
      height: "2px",
      padding: "5px",
      ...theme.greyColor,
      ...theme.h5,
    },
    input: {
      backgroundColor: "white",
      width: "100%",
      maxWidth: "100%",
      borderRadius: "4px",
      height: "32px",
      border: "1.2px solid rgb(220,220,220)",
      boxSizing: "border-box",
      paddingLeft: "10px",
      ...theme.greyColor,
      ...theme.h5,
      ...style,
      outline: "none",
    },
    onError: {
      border: "1px solid rgb(225,51,51)",
      color: "rgb(225,51,51)",
    },
    onSuccess: {
      border: "1.2px solid rgb(14,217,108)",
    },
    onHover: {
      border: "1px solid rgb(24,65,233)",
    },
    onActive: {
      border: "1px solid rgb(24,65,233)",
    },
    onSuccessLabel: {
      color: "rgb(14,217,108)",
    },
    onErrorLabel: {
      color: "rgb(225,51,51)",
    },
    onHoverLabel: {
      color: "rgb(24,65,233)",
    },
    onActiveLabel: {
      color: "rgb(24,65,233)",
    },
  };

  return (
    <div style={styles.container}>
      <label
        onMouseEnter={() => setInputState((prev) => (prev === "active" ? "active" : "hover"))}
        onFocus={() => setInputState("active")}
        onMouseLeave={() => setInputState((prev) => (prev === "active" ? "active" : "default"))}

        style={{
          ...styles.label,
          ...(inputState === "active"
            ? styles.onActiveLabel
            : inputState === "hover"
              ? styles.onHoverLabel
              : inputState === "error"
                ? styles.onErrorLabel
                : inputState === "success"
                  ? styles.onSuccessLabel
                  : {}),
        }}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={formState[name] || ""}
        onBlur={() => { const value = formState[name] || "";
          if (required && !value ) {
            setInputState("error");
            setIsError(true);
          } else {
            setInputState("success");
            setIsError(false);
          }}}

        placeholder={placeholder}
        onMouseEnter={() => setInputState((prev) => (prev === "active" ? "active" : "hover"))}
        onFocus={() => setInputState("active")}
        onMouseLeave={() => setInputState((prev) => (prev === "success" ? "active" : "default"))}

        style={{
          ...styles.input,
          ...(inputState === "active"
            ? styles.onActive
            : inputState === "hover"
              ? styles.onHover
              : inputState === "error"
                ? styles.onError
                : inputState === "success"
                  ? styles.onSuccess
                  : {}),
        }}

        required
      />
      <p style={isError ? { color: "rgb(225,51,51)", ...theme.h5 } : { display: "none" }}>
        {textAid}
      </p>
    </div>
  );
};