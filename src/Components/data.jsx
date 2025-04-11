import React from "react";
import "./data.scss";
import { motion } from "framer-motion";
const Data = () => {
  return (
     <div className="data-main">
        
          <div className="data-container ">
            <div className="data-left   ">   
              <div className="data-content-holder  ">
                
                <h1 className="data-heading text-2xl ">
               
                100% your data
                </h1>
                <p className="data-content ">
                The app is open source and your notes are saved to an open format,
                 so you'll always have access to them. Uses End-To-End Encryption 
                 (E2EE) to secure your notes and ensure no-one but yourself can access them.
                </p>
                
                <button className="home-button ">Try Whitepace free 
                <img
                className="button-image "
                src="/images/right-arrow.svg"
                alt="Description of the image"
                width={14}
                height={14}
              />
                </button>
                
            
              </div>
             
            </div>
            <div className="data-right ">
            <motion.div
            className=""
            initial={{ x: +500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
              <img
                className="data-image"
                src="/images/data.svg"
                alt="Description of the image"
                width={700}

              />
               </motion.div>
            </div>
          </div>
        </div>
              
        );
};

export default Data;
