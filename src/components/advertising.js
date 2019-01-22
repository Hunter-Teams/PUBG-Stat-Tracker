import React, { Component } from "react";
import "../index.css";

//simple func that return image of an ad
class Advertising extends Component {
  render() {
    return (
      <div>
        <div className="flex-container"></div>
        <a href="https://www.cyberpowerpc.com/page/Intel/Esports/?utm_source=asc&utm_medium=display&utm_campaign=asc-display-retargeting&gclid=EAIaIQobChMIgqP90tX_3wIVEMfACh1imA1ZEAEYASAAEgKoGPD_BwE">
          <div className="advert" />
        </a>
      </div>
    );
  }
}

export default Advertising;
