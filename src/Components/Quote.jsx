import React from "react";
import { connect } from "react-redux";
import "../styles/Quote.css";

const Quote = (props) => {
  const {
    quoteState: { q1, q2, footer },
    quoteRef
  } = props;
  return (
    <div ref={quoteRef} className="Quote">
      <h1>{q1}</h1>
      <h1>{q2}</h1>
      <div className="footer">
        <p>{footer}</p>
      </div>
    </div>
  );
};

const quoteState = (state) => ({ quoteState: state.quoteState });

export default connect(quoteState, null)(Quote);
