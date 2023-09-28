import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RegistrationProvider } from './context/registration/RegistrationContext.jsx'
import { ContactProvider } from "./context/contact/ContactContext.jsx";
import Home from "./components/Home";
import ContactUs from "./pages/contact/ContactUs";
import RegisterHere from "./pages/register/RegisterHere";
function App() {
  return (
    <div className="bg-[#150E28]">
    <Router>
      <RegistrationProvider>
        <ContactProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/register" element={<RegisterHere />} />
          </Routes>
        </ContactProvider>
      </RegistrationProvider>
    </Router>
  </div>
  );
}

export default App;
