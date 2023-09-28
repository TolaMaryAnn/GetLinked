import React, { createContext, useState } from "react";
import axios from "axios"; 


const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
});

export const ContactContext = createContext();
export const ContactProvider = ({ children }) => {
    const [contactSuccess, setContactSuccess] = useState(false);
  
    const contact = async (formData) => {
      try {
        const response = await api.post("/hackathon/contact-form", formData);
  
        if (response.status === 201) {
          console.log("Sent", response.data);
          setContactSuccess(true);
        } else {
          console.error("Message failed to send:", response.status);
        }
      } catch (error) {
        console.error("Error", error);
      }
    };
  
   
    const contextValue = { contact, contactSuccess, setContactSuccess };
  
    return (
      <ContactContext.Provider value={contextValue}>
        {children}
      </ContactContext.Provider>
    );
  };
