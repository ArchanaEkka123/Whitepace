import React from "react";
import "./clients.scss";

const Clients = () => {
  return (
    <div className="clients_main">
      <div className="clients-sec">
        <div className="clients-heading">
          <div className="content-holder  ">
            <h1 className="heading ">What Our Clients Says</h1>
          </div>
        </div>

        <div className="clients-card-holder ">
          <div className="clients-card p-5 bg-white border-b-amber-100">
           
              <div className="Quote">
                <img
                  className="right-box-image "
                  src="/images/Quote.svg"
                  alt="Description of the image"
                  width={86}
                  height={61}
                />
              </div>
              <p className=" ">
                Whitepate is designed as a collaboration tool for businesses
                that is a full project management solution.
              </p>
              <div className="underline"></div>
              <div className="plan-card-content">
                <img
                  className="right-box-image "
                  src="/images/Avater1.svg"
                  alt="Description of the image"
                  width={95}
                  height={95}
                />
                <div className="fav-content-right  ">
                  <h3 className="text-2xl">Oberon Shaw, MCH </h3>
                  <p>Head of Talent Acquisition, North America</p>
                </div>
              
            </div>
          </div>

          <div className="clients-card p-5 card-blue  bg-blue-400 border-b-amber-100 text-white">
            <div className="Quote">
              <img
                className="right-box-image "
                src="/images/Quote-white.svg"
                alt="Description of the image"
                width={86}
                height={61}
              />
            </div>
            <p>
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
            <div className="underline"></div>
            <div className="plan-card-content">
              <img
                className="right-box-image "
                src="/images/Avater2.svg"
                alt="Description of the image"
                width={95}
                height={95}
              />
              <div className="fav-content-right  ">
                <h3 className="text-2xl">Oberon Shaw, MCH </h3>
                <p>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
          <div className="clients-card p-5 card-blue  bg-blue-400 border-b-amber-100 text-white">
            <div className="Quote">
              <img
                className="right-box-image "
                src="/images/Quote-white.svg"
                alt="Description of the image"
                width={86}
                height={61}
              />
            </div>
            <p className="pr-15 ">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
            <div className="underline"></div>
            <div className="plan-card-content">
              <img
                className="right-box-image "
                src="/images/Avater3.svg"
                alt="Description of the image"
                width={95}
                height={95}
              />
              <div className="fav-content-right  ">
                <h3 className="text-2xl">Oberon Shaw, MCH </h3>
                <p>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dot-box">
          <div className="dot bg-blue-300 ">
                                  </div>
                                  <div className="dot bg-blue-900 ">
                                  </div>
                                  <div className="dot bg-blue-300 ">
                                  </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
