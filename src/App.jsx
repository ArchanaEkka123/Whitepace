import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Navbar from "./Components/navbar";
import Home from "./Components/home";
import About from "./Components/about";
import ContactForm from "./Components/contacform";
import Footer from "./Components/footer";
import Navbar from "./Components/navbar";

const App = () => {
  return (
    <BrowserRouter>
    <div  className="nav-app">  <Navbar /></div>  
    {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactform" element={<ContactForm />} />
       
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
