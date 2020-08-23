import React from "react";
import { connect } from "react-redux";
import Typical from "react-typical";
import "../styles/Quote.css";

const Quote = (props) => {
  const {
    quoteState: { q1, q2, q3, q4, footer },
    quoteRef
  } = props;
  return (
    <div ref={quoteRef} className="Quote">
      <h1 className="quoteQ1">{q1}</h1>
      <Typical
        steps={["Work", 1000, q2, 1000, q3, 1000, q4, 1000]}
        loop={Infinity}
        wrapper="h5"
      />
      <div className="footer">
        <p>{footer}</p>
      </div>
    </div>
  );
};

const quoteState = (state) => ({ quoteState: state.quoteState });

export default connect(quoteState, null)(Quote);
