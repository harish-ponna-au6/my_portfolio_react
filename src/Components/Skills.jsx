import React from "react";
import "../styles/Skills.css";
import { connect } from "react-redux";
import { motion } from "framer-motion";
const Skills = (props) => {
  const {
    skillsState: { all_icons, cards },
    skillsRef
  } = props;
  return (
    <>
      <div ref={skillsRef} className="Skills">
        <div className="all_icons">
          {all_icons.map((icon, index) => (
            <motion.i
              whileHover={{
                scale: [1, 0.7],
                transition: { duration: 0.5 }
              }}
              className={`${icon} skillsAllIcons`}
              key={index}
            ></motion.i>
          ))}
        </div>

        <h2 className="heading skillsHeading">Skills</h2>
        <div className="cards ">
          {cards.map((card, index) => (
            <div className="card skillsCard" key={index}>
              <i
                whileHover={{
                  rotateZ: [0, 10, -10, 10, -10, 0],
                  transition: { duration: 1 }
                }}
                className={`${card.icon} skillsCardIcon`}
              ></i>
              <h3 className="heading skillsCardHeading">{card.heading}</h3>
              <div className="skill_list ">
                {card.skill_list.map((skill, index) => (
                  <motion.div
                    whileHover={{
                      x: [0, 5, -5, 5, -5, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                    key={index}
                    className="skillsCardSkillList"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const skillsState = (state) => ({ skillsState: state.skillsState });

export default connect(skillsState, null)(Skills);
