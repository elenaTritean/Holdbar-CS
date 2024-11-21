import React, { createContext, useContext, useState } from "react";

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

export const FormInput = ({ label, name, placeholder }) => {
  const { formState, handleChange } = useForm();

  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        value={formState[name] || ""}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};
