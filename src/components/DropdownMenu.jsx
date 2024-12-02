import React, { useState } from "react";
import Select from "react-select";
import { useTheme } from "./styling/ThemeContext";
import { useForm } from "./FormContext"

export default function DropdownMenu({ options, placeholder,name }) {
  const theme = useTheme();
  const {handleChange:handleFormContextChange}=useForm()

  const [selectedOption, setSelectedOption] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isFocused, setIsFocused] = useState(false); 
  const [isHovered, setIsHovered] = useState(false); 

  const handleValidation = () => {
    if (!selectedOption) {
      setIsError(true);
    }
  };

  const handleChange = (option) => {
    setSelectedOption(option);
    handleFormContextChange({ target: { name, value:option.value } });
    setIsError(false);
  };


  
  return (

      <Select
        name={name}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
        onChange={handleChange}
        onBlur={() => {
          handleValidation();
          setIsFocused(false); 
        }}
        onFocus={() => setIsFocused(true)} 
        placeholder={placeholder}
        styles={{
          control: (provided) => ({
            ...provided,
            border: isError
              ? "1px solid rgb(225,51,51)" 
              : isFocused
              ? "1px solid rgb(24,65,233)" 
              : isHovered
              ? "1px solid rgb(24,65,233)" 
              : "1px solid rgb(194, 194, 194)", 
            backgroundColor: "rgb(250, 250, 251)",
            borderRadius: "6px",
            height: "27px",
            minHeight: "27px",
            display: "flex",
            alignItems: "center",
            maxWidth: "fit-content",
            width: "100%",
            boxShadow: isFocused
              ? "0 0 3px rgba(24, 65, 233, 0.5)" 
              : "0px 1px 2px rgba(0, 0, 0, 0.1)",
            padding: "0",
            transition: "border 0.2s ease, box-shadow 0.2s ease", 
            ...theme.h4,
            ...theme.normal,
          }),
          placeholder: (base) => ({
            ...base,
            ...theme.h4,
            ...theme.select,
            display: "flex",
            alignItems: "center",
            margin: "0",
            padding: "0",
          }),
          singleValue: (base) => ({
            ...base,
            display: "flex",
            alignItems: "center",
          }),
          indicatorsContainer: (base) => ({
            ...base,
            padding: "0",
            margin: "0",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }),
          menu: (base) => ({
            ...base,
            ...theme.h4,
            ...theme.normal,
          }),
        }}
        options={options}
      />
  );
}
