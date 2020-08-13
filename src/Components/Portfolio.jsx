import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../styles/Portfolio.css";

const Portfolio = (props) => {
  const {
    portfolioState: { projects },
    portfolioRef,
    projectRefs
  } = props;
  return (
    <div ref={portfolioRef} className="Portfolio">
      {projects.map((project, index) => (
        <div className="project" key={index} ref={projectRefs[index]}>
          <div className="image">
            <img src={project.imagePath} alt={project.heading} />
          </div>
          <div className="description">
            <div className="matter">
              <h2 className="heading">{project.heading}</h2>
              <p className="content">{project.content}</p>
              <div className="technologies">
                {project.technologies.map((technology, index) => (
                  <div key={index}>{technology}</div>
                ))}
              </div>
              <div className="more">
                <Link to={project.viewSite}>View Site</Link>
                <Link to={project.viewCode}>View Code</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const portfolioState = (state) => ({ portfolioState: state.portfolioState });

export default connect(portfolioState, null)(Portfolio);
