import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Navbar from "./Components/navbar";
import Home from "./Components/home";
import About from "./Components/about";
import ContactForm from "./Components/contacform";
import Footer from "./Components/footer";
import Navbar from "./Components/navbar";
import Services from "./Components/Services";
import Projects from "./Components/projects";
import Plan from "./Components/plan";
const App = () => {
  return (
    <BrowserRouter>
    <div  className="nav-app">  <Navbar /></div>  
    {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
