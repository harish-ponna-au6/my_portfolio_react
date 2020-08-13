import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import {
  welcomeContentVariants,
  welcomeHeadingVariants,
  socialMediaVariants,
} from "../variants/HeroVariants";

const Hero = (props) => {
  const {
    heroState: { heading, content, social_media_icons },
    heroRef,
  } = props;
  return (
    <div ref={heroRef} className="Hero">
      <div className="text">
        <motion.h1
          variants={welcomeHeadingVariants}
          initial="hidden"
          animate="visible"
        >
          {heading}
        </motion.h1>
        <motion.p
          variants={welcomeContentVariants}
          initial="hidden"
          animate="visible"
        >
          {content}
        </motion.p>
      </div>
      <motion.div
        variants={socialMediaVariants}
        initial="hidden"
        animate="visible"
        className="social_media"
      >
        {social_media_icons.map((icon, index) => (
          <Link to="#" key={index}>
            <i className={icon.classname}></i>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

const heroState = (state) => ({ heroState: state.heroState });

export default connect(heroState, null)(Hero);
