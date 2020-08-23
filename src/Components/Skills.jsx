import React from "react";
import "../styles/Skills.css";
import { connect } from "react-redux";
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
            <i className={`${icon} skillsAllIcons`} key={index}></i>
          ))}
        </div>

        <h2 className="heading skillsHeading">Skills</h2>
        <div className="cards ">
          {cards.map((card, index) => (
            <div className="card skillsCard" key={index}>
              <i className={`${card.icon} skillsCardIcon`}></i>
              <h3 className="heading skillsCardHeading">{card.heading}</h3>
              <div className="skill_list ">
                {card.skill_list.map((skill, index) => (
                  <div key={index} className="skillsCardSkillList">
                    {skill}
                  </div>
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
