import React from "react";
import "../App.css";

const About = () => {
  return (
    <div>
      <div
        className="about"
      >
        <h1 className="aboutLogo" >
          About
        </h1>
        <div style={{ color: "white" }}>
          <p className="headerpara" style={{ textAlign: "center", margin: "18px 0px 32px 0px" }}>
            Here you will find more information about me,
            <br /> what I do, and my current skills mostly in terms of
            programming and technology
          </p>
          <div
            className="aboutSection"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <div className="aboutDiv">
              <h4 className="gettoknowme">
                Get to know me!
              </h4>
              <p className="knowPara">
                I'm a Frontend Web Developer building and managing the Front-end
                of Websites and Web Applications that leads to the success of
                the overall product. Check out some of my work in the Projects
                section. <br />
                Feel free to Connect or Follow me on my Linkedin and Instagram{" "}
                <br />
                <br /> I'm open to Job opportunities where I can contribute,
                learn and grow. If you have a good opportunity that matches my
                skills and experience then don't hesitate to contact me.
              </p>
            </div>
            <div className="aboutDiv" style={{marginTop:"15px"}}>
              <h4 className="MySkills">
                My Skills
              </h4>
              <div className="aboutbtn">
                <button class="ui-btn">
                  <span>React</span>
                </button>
                <button class="ui-btn">
                  <span>Redux</span>
                </button>
                <button class="ui-btn">
                  <span>JavaScript</span>
                </button>
              </div>
              <div className="aboutbtn2">
                <button class="ui-btn">
                  <span>CSS</span>
                </button>
                <button class="ui-btn">
                  <span>HTML</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
