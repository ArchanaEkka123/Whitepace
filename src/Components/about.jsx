import React from "react";
import "./about.scss";

import Services from "./Services";
const About = () => {
  return (
    <div className="about-main ">
   
          <div className="sec_con m-20">
            <div className="right_sec">
              <div>
                
                <p className="name   ">
                Solutions
                </p>
                <p className="content">
                Nisl arcu, scelerisque neque ut. Tincidunt amet, 
                tempor duis tortor neque auctor dis ipsum. 
                Pretium cras amet odio amet eleifend id sed cras sed. 
                Aliquet risus posuere aliquet imperdiet sit.
                </p>
                <div className="button-holder gap-12 w-80 mt-20 ">
                <button className="button">Search</button>
               
              </div>
              </div>
             
            </div>
            <div className="left_sec">
              <img
                className=""
                src="/images/about-image.svg"
                alt="Description of the image"
              />
            </div>
          
          </div>
         
          <Services/>
    </div>

  );
};

export default About; 
