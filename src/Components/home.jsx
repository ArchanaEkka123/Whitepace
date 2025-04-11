import React from "react";
import "./home.scss";
import About from "./about";
import Navbar from "./navbar";
import Projects from "./projects";
import ContactForm from "./contacform";
import Plan from "./plan";
import Work from "./work";
import Data from "./data";
import Sponsors from "./sponsors";
import Favorite from "./favorite";
import Clients from "./clients";
import { motion } from "framer-motion";
const Home = () => {
  return (
    
    <div className="main_outter ">
          <div className="main">

          
        <div className="home_sec01 ">
                  <div className="home-sec">
            {/* <div className="home-left   "> */}
            <motion.div
          className="home-left"
          initial={{ y: -500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6,  delay: 0.5, ease: "easeOut" }}
        >   
              <div className="content-holder  ">
                
                <h1 className="home-heading text-amber-50">
               
                Get More Done with whitepace
                </h1>
                <p className="home-content  text-amber-50">
                Project management software that enables your 
                teams to collaborate, plan, analyze and manage everyday tasks
                </p>
                {/* <div className="button-holder m-10 ">   */}
                <button className="home-button ">Try Whitepace free 
                <img
                className="button-image  "
                src="/images/right-arrow.svg"
                alt="Description of the image"
                width={14}
                height={14}
              />
                </button>
                
              {/* </div> */}
              </div>
             
              </motion.div>

            
            {/* <div className="home-right "> */}
            <motion.div
          className="home-right"
          initial={{ y: -500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
              <img
                className="myimage"
                src="/images/presentation4.jpg"
                alt="Description of the image"
                width={685}
                height={456}
              />
               </motion.div>
            {/* </div> */}
           
          </div>
        </div>
       
        {/* <div className="sec_holder bg-white">
        </div> */}

               <Projects/>  
       <Plan/>
       <Work/>  
       <Data/>
       <Sponsors/>
       <Favorite/>
       <Clients/>
      </div>
    </div>
  );
};

export default Home;
