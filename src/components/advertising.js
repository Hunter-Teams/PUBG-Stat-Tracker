import React from "react";
import "../index.css";

//simple func that return image of an ad
const Advertising = props => {
    return (
      <div>
        <div className="flex-container" />
        <a href={props.adLink}>
          <div className={props.adClassName} />
        </a>
      </div>
    );
}

Advertising.defaultProps = {
    adLink: "https://www.cyberpowerpc.com/page/Intel/Esports/?utm_source=asc&utm_medium=display&utm_campaign=asc-display-retargeting&gclid=EAIaIQobChMIgqP90tX_3wIVEMfACh1imA1ZEAEYASAAEgKoGPD_BwE",
    adClassName: "advert"
};

export default Advertising;