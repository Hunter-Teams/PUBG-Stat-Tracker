import React from "react";
import "../index.css";
import PropTypes from "prop-types";
import Leaderboard from "./leaderboard";
import Spinner from "./Spinner";
import axios from "axios";
import Advertising from "./advertising";

export default class Content extends React.Component {
  constructor(props) {
    super(props);

    this.toggleActive = this.toggleActive.bind(this);
    this.state = {
      isActive: false,
      table: [],
      dataRecieved: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    axios
      .get(`http://localhost:3001/api`)
      .then(response => {
        //console.log(response.data);
        var newArr = [];
        response.data.forEach(elem => {
          //console.log(elem);
          newArr.push(elem);
        });
        //console.log(newArr);
        this.setState({
          table: newArr,
          dataRecieved: true
        });
        console.log("this.state.table content");
        console.log(this.state.table);
        this.forceUpdate();
      })
      .catch(err => {
        console.log(err);
      });
  }

  toggleActive() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  componentDidMount() {
    this.handleSubmit();
  }

  renderContent() {
    if (this.state.dataRecieved) {
      return (
        <div>
          <div className="row">
            <div className="column left" />

            <div className="column middle">
              <h1 className="tableTitle">Leaderboard: Solo</h1>
              <Leaderboard table={this.state.table} />
              <p className="tableFoot">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sit amet pretium urna. Vivamus venenatis velit nec
                neque ultricies, eget elementum magna tristique. Quisque
                vehicula, risus eget aliquam placerat, purus leo tincidunt eros,
                eget luctus quam orci in velit. Praesent scelerisque tortor sed
                accumsan convallis.
              </p>
            </div>
            <div className="column right">
              <Advertising />
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner message={"Please accept location request"} />;
    }
  }

  render() {
    console.log("this.state.dataRecieved");
    console.log(this.state.dataRecieved);
    return <div>{this.renderContent()}</div>;
  }
}
