import React from "react";
import "./services.scss";

const Services = () => {
  return (
    <div className="about-main ">
   
          <div className="about-sec m-20">
            <div className="right_sec">
              <div className="w-2xl">
                
                <p className="heading-skills">
                My Skills
                </p>
                <p className="content ">
                Nisl arcu, scelerisque neque ut. Tincidunt amet, 
                tempor duis tortor neque auctor dis ipsum. 
                Pretium cras amet odio amet eleifend id sed cras sed. 
                Aliquet risus posuere aliquet imperdiet sit.
                </p>
                <div className="button-holder gap-12 w-80 mt-20 ">
                <button className="button">Contact Me</button>
               
              </div>
              </div>
             
            </div>
            <div className="left_sec">
              <img
                className="mb-[-210px]"
                src="/images/skills.svg"    
                alt="Description of the image"
              />
              <div className=" w-50 inner-content">
              <p className="text-3xl font-bold text-white">
                JavaScript
                </p>
                <p className="text-xsm text-gray-400">
                Nisl arcu, scelerisque neque ut. Tincidunt amet, 
                tempor duis tortor neque auctor dis ipsum. 
                Pretium cras amet odio amet eleifend id sed cras sed. 
                
                </p>

              </div>
              
            </div>
          
          </div>
          
    </div>

  );
};

export default Services; 
