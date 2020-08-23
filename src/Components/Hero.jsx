import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";
import { connect } from "react-redux";
import { motion, useViewportScroll } from "framer-motion";
import {
  welcomeContentVariants,
  welcomeHeadingVariants
} from "../variants/HeroVariants";

const Hero = (props) => {
  const {
    heroState: { heading, content, social_media_icons },
    heroRef
  } = props;
  const [bgHerostatus, setBgHeroStatus] = useState(false);

  const { scrollYProgress } = useViewportScroll();
  useEffect(() => {
    scrollYProgress.onChange(() => {
      window.pageYOffset > 150 ? setBgHeroStatus(true) : setBgHeroStatus(false);
    });
  }, [scrollYProgress]);

  return (
    <motion.div
      ref={heroRef}
      className="Hero"
      style={
        bgHerostatus
          ? {
              background:
                "linear-gradient(107.01deg, #6526A5 -1.2%, #7522A1 44.85%, #EA0882 95.17%)"
            }
          : { background: null }
      }
    >
      {console.log("hero rendering")}
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
      <div className="social_media">
        {social_media_icons.map((icon, index) => (
          <Link
            to="/"
            onClick={() => window.open(icon.to, "_blank")}
            key={index}
            target="_blank"
          >
            <motion.i
              whileHover={{
                scale: [1, 1.2, 0.4, 1.2]
              }}
              className={`${icon.classname} heroIcons`}
            ></motion.i>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

const heroState = (state) => ({ heroState: state.heroState });

export default connect(heroState, null)(Hero);
