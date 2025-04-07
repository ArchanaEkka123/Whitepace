import React from "react";
import "./sponsors.scss";

const Sponsors = () => {
  return (
     <div className="sponsors-main">
        
          <div className="sponsors-sec">
            <div className="sponsors-left   ">   
              <div className="content-holder  ">
             <h1 className="data-heading ">
                 Our sponsors
                </h1>
                            
              </div>
             
            </div>
            <div className="sponsors-right ">
              <img
                className="myimage"
                src="/images/Apple.svg"
                alt="Description of the image"
                width={55}
                height={68}
              />
               <img
                className="myimage"
                src="/images/Microsoft.svg"
                alt="Description of the image"
                width={287}
                height={62}
              />
               <img
                className="myimage"
                src="/images/Slack.svg"
                alt="Description of the image"
                width={280}
                height={71}
              />
               <img
                className="myimage"
                src="/images/Google.svg"
                alt="Description of the image"
                width={211}
                height={70}
              />
            </div>
          </div>
        </div>
              
        );
};

export default Sponsors;
