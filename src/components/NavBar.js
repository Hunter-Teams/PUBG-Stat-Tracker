import React from "react";
import "../index.css";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

export default class NavBarClass extends React.Component {

  render() {
    return (
      <div>
        <ul className="primary1">
          <li  className="primary1" style={{ float: "left" }}>
            <Link className="active" to="/">
              <div className="flex-container">
                <div className="cunyStats" />
              </div>
            </Link>
          </li>

          <li className="primary1">
              <Link className="linkText" to="/pubgOfficial">
              <div className="flex-container2">
                <div className="pubgOfficial" />
              </div>
              </Link>
          </li>

          <li className="primary1" >
              <Link className="linkText" to="/contact">
              <div className="flex-container4">
                <div className="contact" />
              </div>
              </Link>
          </li>

          <li  className="primary1">
            <Link className="linkText" to="/about">
              <div className="flex-container3">
                <div className="about" />
              </div>
            </Link>
          </li>

          <li className="primary1">
            <Link className="linkText" to="/search">
              <div className="flex-container3">
                <div className="search" />
              </div>
            </Link>
          </li>

          <li className="primary1">
            <Link className="linkText" to="/">
              <div className="flex-container3">
                <div className="topTen" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
