import React from "react";
import "./About.css";
import { AboutData } from "./AboutData";

const About = () => {
  return (
    <>
      <div className="aboutus"></div>
      <div className="aboutuspage">
        <div className="img">
          <img src={AboutData[0].img} alt="aboutus" />
        </div>
        <p>{AboutData[0].heading}</p>
      </div>
      <div className="aboutuspage">
        <p>{AboutData[1].heading}</p>
        <div className="img">
          <img src={AboutData[1].img} alt="aboutus" />
        </div>
      </div>
      <div className="aboutuspage">
        <div className="img">
          <img src={AboutData[2].img} alt="aboutus" />
        </div>
        <p>{AboutData[2].heading}</p>
      </div>
      <div className="aboutuspage">
        <p>{AboutData[3].heading}</p>
        <div className="img">
          <img src={AboutData[3].img} alt="aboutus" />
        </div>
      </div>
      {/* {AboutData.map((aboutdataval, index) => {
        return (
          <div className="aboutuspage" key={index}>
            <p>{aboutdataval.heading}</p>
            <div className="img">
              <img src={aboutdataval.img} alt="aboutus" />
            </div>
          </div>
        );
      })} */}
    </>
  );
};

export default About;
