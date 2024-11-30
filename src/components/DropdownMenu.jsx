import React, {useState} from 'react';
import Select from 'react-select';
import { useTheme } from "./styling/ThemeContext";


export default function DropdownMenu({ options, placeholder}) {
    const theme = useTheme();

    const [selectedOption, setSelectedOption]=useState("")
    const [isError, setIsError] = useState(false);

    const handleValidation = () => {
        if (!selectedOption) {
            setIsError(true); 
        }
    };

    const handleChange = (option) => {
        setSelectedOption(option); 
        setIsError(false); 
    };

    return (
        <Select
            onChange={handleChange}
            onBlur={handleValidation} 
            placeholder={placeholder}
            styles={{
                control: (provided) => ({
                    ...provided,
                    border: isError
                    ? "1px solid rgb(225,51,51)" 
                    : "1px solid rgb(194, 194, 194)", 
                    display: "flex",
                    backgroundColor: "rgb(250, 250, 251)",
                    borderRadius: "6px",
                    height: "27px",
                    minHeight: "27px",
                    alignItems: "center",
                    maxWidth: "fit-content",
                    width: "100%",
                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
                    padding: "0",
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
