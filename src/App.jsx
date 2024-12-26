import React from "react";
import "./App.css";
import "./Assits/fonts/fonts.css";
import { Route, Routes } from "react-router-dom";
import { Home, Products } from "./Pages/index";
import { useEffect } from "react";
import { WOW } from "wowjs";
import "animate.css";

const App = () => {
  
  // Wow.js library
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow", // default
      animateClass: "animate__animated", // default
      offset: 0, // default
      mobile: true, // default
      live: true, // default
    });
    wow.init();
  }, []);



  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      
    </>
  );
};

export default App;



