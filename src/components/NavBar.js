import React from "react";
import "../index.css";
import PropTypes from "prop-types";

export default class NavBarClass extends React.Component {
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
        <ul>
          <li style={{ float: "left" }}>
            <a className="active" href="/public/index.html">
              <div className="flex-container">
                <div className="cunyStats" />
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.pubg.com/">
              <div className="flex-container2">
                <div className="pubgOfficial" />
              </div>
            </a>
          </li>
          <li>
            <a href="/public/index.html">
              <div className="flex-container4">
                <div className="contact" />
              </div>
            </a>
          </li>
          <li>
            <a href="/public/index.html">
              <div className="flex-container3">
                <div className="search" />
              </div>
            </a>
          </li>

          <li>
            <a href="/public/index.html">
              <div className="flex-container3">
                <div className="about" />
              </div>
            </a>
          </li>

          <li>
            <a className="active" href="/public/index.html">
              <div className="flex-container3">
                <div className="topTen" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
