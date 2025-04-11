import React from "react";
import "./favorite.scss";
import { motion } from "framer-motion";
const Favorite = () => {
  return (
     <div className="data-main">
        
          <div className="data-sec bg-blue-900">
<motion.div
            className=""
            initial={{ x: -500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="data-left   ">   
            <img
                className="myimage"
                src="/images/fav.svg"
                alt="Description of the image"
                width={500}
                height={500}
              />


            
             
            </div>
            </motion.div>

            {/* <motion.div
            className=""
            initial={{ x: +500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          > */}
            <div className="fav-right ">
            <div className="fav-content-holder  ">
                
                <h1 className="fav-heading text-white  text-7xl">
               
                Work with Your Favorite Apps Using whitepace
                </h1>
                <p className="data-content text-white ">
                Whitepace teams up with your favorite software. 
                Integrate with over 1000+ apps with Zapier to have 
                all the tools you need for your project success.
                </p>
                <div className="fav-button-holder mt-10 ">  
                <button className="favorite-button text-amber-50">Try Whitepace free 
                <img
                className="button-image   "
                src="/images/right-arrow.svg"
                alt="Description of the image"
                width={14}
                height={14}
              />
                </button>
                
              </div>
              </div>
            </div>
            {/* </motion.div> */}
          </div>
        </div>
              
        );
};

export default Favorite;
