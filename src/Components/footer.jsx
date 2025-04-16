import React from "react";
import "./footer.scss";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-blue-900 pt-20 pb-14">
      <h1 className=" footer-heading text-6xl font-bold text-white">
        Try Whitepace today{" "}
      </h1>
      <p className="footer-content">Get started for free.</p>
      <p className="footer-content">Add your whole team as your needs grow. </p>
      <div className="footer-button-holder mt-10 ">
        <button className="footer-button1 text-amber-50">
          Try Taskey free
          <img
            className="button-image  "
            src="/images/right-arrow.svg"
            alt="Description of the image"
            width={14}
            height={14}
          />
        </button>
      </div>
      <p className="footer-content">On a big team? Contact sales </p>

      <div className="footer-social-media">
        <div className="social-media">
          <img
            className=""
            src="/images/apple-white.svg"
            alt="Description of the image"
          />
          <img
            className=""
            src="/images/windows.svg"
            alt="Description of the image"
          />
          <img
            className=""
            src="/images/android.svg"
            alt="Description of the image"
          />
        </div>
      </div>

      <div className="footer-2 mt-20">
        <div className="footer-content">
          <div className=" footer1">
            <div className="footer-2-top-left">
              <img
                className="footer-jaddo-image"
                src="/images/whitepace-Logo.svg"
                alt="Description of the image"
                width={37}
                height={29}
              />
              <p className="font-bold text-2xl">whitepace</p>
            </div>
            <p className="footer1-content ">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>
          <div className=" footer1">
            <h2 className=" font-bold">Product</h2>
            <p>Overview </p>
            <p>Pricing</p>
            <p>Customer stories</p>
          </div>
          <div className=" footer1">
            <h2 className=" font-bold">Resources</h2>
            <p>Blog</p>
            <p>Guides & tutorials</p>
            <p>Help center</p>
          </div>
          <div className=" footer1">
            <h2 className=" font-bold">Company</h2>
            <p>About us</p>
            <p>Careers</p>
            <p>Media kit</p>
          </div>

          <div className=" footer1">
            <h2 className=" font-bold">Try It Today</h2>
            <p>Get started for free. Add your whole team as your needs grow.</p>
            <div className="footer-button-holder mt-10 ">
              <button className="footer-button1 text-amber-50">
                Start today
                <img
                  className="button-image  "
                  src="/images/right-arrow.svg"
                  alt="Description of the image"
                  width={14}
                  height={14}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="footer-underline h-0.5  bg-gray-500 mt-10"></div>

        <div className="footer-2-lower">
          <div className="footer-2-left text-amber-50">
            <img
              className="right-box-image  "
              src="/images/global.svg"
              alt="Description of the image"
              width={19}
              height={19}
            />
            <p> English</p>

            <img
              className="right-box-image  "
              src="/images/arrow-down.svg"
              alt="Description of the image"
              width={14}
              height={14}
            />
          </div>
          <p className="footer-2-content">Terms & privacy</p>
          <p className="footer-2-content">Security</p>
          <p className="footer-2-content">Status</p>
          <p className="footer-2-content text-white">©2021 Whitepace LLC.</p>

          <div className="footer-social-media-main ">
            <div className="footer-social-media">
              <img
                className="social-media-image"
                src="/images/Linkedin-white.svg"
                alt="Description of the image"
                width={15}
                height={15}
              />
              <img
                className="social-media-image"
                src="/images/Twitter-white.svg"
                alt="Description of the image"
                width={15}
                height={15}
              />

              <img
                className="social-media-image"
                src="/images/Linkedin-white.svg"
                alt="Description of the image"
                width={15}
                height={15}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
