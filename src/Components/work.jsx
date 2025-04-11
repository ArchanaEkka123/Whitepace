import React from "react";
import "./work.scss";

const Work = () => {
  return (
    <div className="work-main">
      <div className="work-sec">
        <div className="work   ">
          <div className="content-holder  ">
            <h1 className="home-heading text-amber-50">
            Your work, everywhere you are
            </h1>
            <p className="home-content  text-amber-50">
            Access your notes from your computer, phone or tablet by 
            synchronising with various services, including whitepace,
             Dropbox and OneDrive. The app is available on Windows, 
             macOS, Linux, Android and iOS. A terminal app is also available!
            </p>
            {/* <div className="button-holder m-10 "> */}
              <button className="work-button text-amber-50">
              Try Taskey
                <img
                  className="right-box-image  "
                  src="/images/right-arrow.svg"
                  alt="Description of the image"
                  width={14}
                  height={14}
                />
              </button>
            {/* </div> */}
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Work;
