import React from 'react';
import Select from 'react-select';
import { useTheme } from "./styling/ThemeContext";

export default function DropdownMenu({ options, placeholder }) {
    const theme = useTheme();

    return (
        <Select
            placeholder={placeholder}
            styles={{
                control: (provided) => ({
                    ...provided,
                    display: "flex",
                    backgroundColor: "rgb(250, 250, 251)",
                    borderRadius: "6px",
                    border: "1px solid rgb(194, 194, 194)",
                    height: "27px",
                    minHeight: "27px",
                    alignItems: "center",
                    maxWidth: "200px",
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
