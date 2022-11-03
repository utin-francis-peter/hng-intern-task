import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from ".";
import Footer from "../components/footer";
import Contact from "./contact";

const AppRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default AppRoutes;
