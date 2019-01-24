import React from "react";
import "./Spinner.css";
import "./columns.css";

const Spinner = props => {
  return (
    <div className="ui dimmer">
      <div className="flex-containerSearch">
        <div className="loader"/>
      </div>
<br/>
        <p>{props.message}</p>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;