import React from "react";
import "../index.css";
import PropTypes from "prop-types";
import Leaderboard from "./leaderboard";

export default class Content extends React.Component {
  constructor(props) {
    super(props);

    this.toggleActive = this.toggleActive.bind(this);
    this.state = {
      isActive: false
    };
  }

  toggleActive() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="column left" />

          <div className="column middle">
            <h1 className="tableTitle">Leaderboard: Solo</h1>
            <Leaderboard />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sit amet pretium urna. Vivamus venenatis velit nec neque
              ultricies, eget elementum magna tristique. Quisque vehicula, risus
              eget aliquam placerat, purus leo tincidunt eros, eget luctus quam
              orci in velit. Praesent scelerisque tortor sed accumsan convallis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sit amet pretium urna. Vivamus venenatis velit nec neque
              ultricies, eget elementum magna tristique. Quisque vehicula, risus
              eget aliquam placerat, purus leo tincidunt eros, eget luctus quam
              orci in velit. Praesent scelerisque tortor sed accumsan convallis.
            </p>
          </div>
          <div className="column right">
            <h2>Side</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sit amet pretium urna. Vivamus venenatis velit nec neque
              ultricies, eget elementum magna tristique. Quisque vehicula, risus
              eget aliquam placerat, purus leo tincidunt eros, eget luctus quam
              orci in velit. Praesent scelerisque tortor sed accumsan convallis.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
