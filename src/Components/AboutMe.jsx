import React from "react";
import { connect } from "react-redux";
import "../styles/AboutMe.css";

const AboutMe = (props) => {
  const {
    aboutMeState: { heading, content },aboutMeRef
  } = props;
  return (
    <div ref={aboutMeRef} className="AboutMe">
      <h2 className="heading">{heading}</h2>
      <p className="content">{content}</p>
    </div>
  );
};

const aboutMeState = (state) => ({ aboutMeState: state.aboutMeState });

export default connect(aboutMeState, null)(AboutMe);
