import React from "react";
import "./projects.scss";
import About from "./about";
import Navbar from "./navbar";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="projects-main">
      <div className="heading-box ">
        <div className="underline bg-blue-600"></div>
      </div>

      <div className="sec_holder bg-white">
      
       <div className=" left-box ">
          <p className="heading-sub">Project Management</p>
          <p className="projects-content">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <div className="button-holder  ">
            <button className="button-view text-amber-50">
              Get Started
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
    

    <motion.div
            className=""
            initial={{ x: +500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
        <div className="right-box">
          <img
            className="right-box-image  "
            src="/images/presentation3.jpg"
            alt="Description of the image"
            width={748}
            height={547}
          />
        </div>
        </motion.div>
      </div>

      <div className="sec_holder bg-white">
      <motion.div
            className=""
            initial={{ x: -500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
        <div className="right-box">
          <img
            className="right-box-image  "
            src="/images/Work-Together.svg"
            alt="Description of the image"
          />
        </div>
        </motion.div>
        <div className=" left-box ">
          <p className="heading-sub">Work together</p>
          <p className="projects-content">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>

          <div className="button-holder  ">
            <button className="button-view text-amber-50">
              Try it now
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

      <div className="sec_holder  bg-blue-950">
        <div className=" left-box  ">
          <p className="heading-sub text-white">Use as Extension</p>
          <p className="projects-content text-amber-50">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>

          <div className="button-holder  ">
            <button className="button-view text-amber-50">
              Lets Go
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

        <motion.div
            className=""
            initial={{ x: +500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
        <div className="right-box">
          <img
            className="right-box-image 
             "
            src="/images/presentation1.jpg"
            alt="Description of the image"
            width={686}
            height={479}
          />
        </div>
        </motion.div>
      </div>

      <div className="sec_holder bg-white">
      <motion.div
            className=""
            initial={{ x: -500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
        <div className="right-box">
          <img
            className="right-box-image 
      "
            src="/images/presentation2.jpg"
            alt="Description of the image"
            width={686}
            height={479}
          />
        </div>
        </motion.div>
        <div className=" left-box ">
          <p className="heading-sub">Customise it to your needs</p>
          <p className="projects-content">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>

          <div className="button-holder  ">
            <button className="button-view text-amber-50">
              Lets Go
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
    </div>
  );
};

export default Projects;
