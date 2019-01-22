import React, { Component } from "react";
import "../index.css";
import PropTypes from "prop-types";

class TableNav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li style={{ float: "left" }}>
            <a className="active" href="/public/index.html">
              stuff1
            </a>
          </li>
          <li>
            <a href="https://www.pubg.com/">Stuff2</a>
          </li>
          <li>
            <a href="/public/index.html">stuff3</a>
          </li>
          <li>
            <a href="/public/index.html">stuff4</a>
          </li>

          <li>
            <a href="/public/index.html">stuff5</a>
          </li>

          <li>
            <a className="active" href="/public/index.html">
              stuff6!
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default TableNav;
