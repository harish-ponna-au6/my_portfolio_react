import React from "react";
import "../styles/Service.css";
import { connect } from "react-redux";

const Service = (props) => {
  const {
    serviceState: { heading, content, cards },
    serviceRef
  } = props;
  return (
    <div ref={serviceRef} className="Service">
      <div className="header">
        <h2 className="heading">{heading}</h2>
        <p className="content">{content}</p>
      </div>
      <div className="cards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="icon">
              <i className={card.icon}></i>
            </div>
            <h3 className="heading">{card.heading}</h3>
            <p className="content">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const serviceState = (state) => ({ serviceState: state.serviceState });

export default connect(serviceState)(Service);
