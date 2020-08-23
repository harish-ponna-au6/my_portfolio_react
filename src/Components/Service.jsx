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
      {console.log("service rendering")}
      <div className="header">
        <h2 className="heading serviceHeading">{heading}</h2>
        <p className="content serviceContent">{content}</p>
      </div>
      <div className="cards">
        {cards.map((card, index) => (
          <div className="card serviceCard" key={index}>
            <div className="icon">
              <i className={`${card.icon} serviceCardIcon`}></i>
            </div>
            <h3 className="heading serviceCardHeading">{card.heading}</h3>
            <p className="content serviceCardContent">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const serviceState = (state) => ({ serviceState: state.serviceState });

export default connect(serviceState)(Service);
