import React from "react";
import "./data.scss";

const Data = () => {
  return (
     <div className="data-main">
        
          <div className="data-sec">
            <div className="data-left   ">   
              <div className="content-holder  ">
                
                <h1 className="data-heading ">
               
                100% your data
                </h1>
                <p className="data-content ">
                The app is open source and your notes are saved to an open format,
                 so you'll always have access to them. Uses End-To-End Encryption 
                 (E2EE) to secure your notes and ensure no-one but yourself can access them.
                </p>
                <div className="button-holder mt-10 ">  
                <button className="button text-amber-50">Try Whitepace free 
                <img
                className="right-box-image  "
                src="/images/right-arrow.svg"
                alt="Description of the image"
                width={14}
                height={14}
              />
                </button>
                
              </div>
              </div>
             
            </div>
            <div className="data-right ">
              <img
                className="myimage"
                src="/images/data.svg"
                alt="Description of the image"
              />
            </div>
          </div>
        </div>
              
        );
};

export default Data;
