import axios from "axios";
import { createContext, useState, useEffect, Children } from "react";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,

  mode: "cors",

  headers: {
    "Content-Type": "application/json",
  },
});

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [registrationData, setRegistrationData] = useState(null);

  const register = async (formData, setRegistrationSuccess) => {
    try {
      const response = await api.post("/hackathon/registration", formData);

      if (response.status === 201) {
        setRegistrationData(response.data);
        console.log("Registration successful", response.data);
        setRegistrationSuccess(true);
      } else {
        console.error("Registration failed with status code:", response.status);
      }
    } catch (error) {
      console.error("Registration error", error);
    }
  };
  return (
    <RegistrationContext.Provider
      value={{
        registrationData,
        register,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};
