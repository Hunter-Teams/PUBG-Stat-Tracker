import React, { Component } from "react";
import "./App.css";
import NavBarClass from "./components/navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header" />

        <ul>
          <NavBarClass />
        </ul>
        <body>
          <div className="bg">
            <div>
              <h3>Sticky Navigation Bar Example</h3>
              <p>
                The navbar will <strong>stick</strong> to the top when you reach
                its scroll position.
              </p>
              <p>
                <strong>Note:</strong> Internet Explorer, Edge 15 and earlier
                versions do not support sticky positioning. Safari requires a
                -webkit- prefix.
              </p>
              <p>
                Some text to enable scrolling.. Lorem ipsum dolor sit amet,
                illum definitiones no quo, maluisset concludaturque et eum,
                altera fabulas ut quo. Atqui causae gloriatur ius te, id agam
                omnis evertitur eum. Affert laboramus repudiandae nec et.
                Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
              </p>
              <p>
                Some text to enable scrolling.. Lorem ipsum dolor sit amet,
                illum definitiones no quo, maluisset concludaturque et eum,
                altera fabulas ut quo. Atqui causae gloriatur ius te, id agam
                omnis evertitur eum. Affert laboramus repudiandae nec et.
                Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
              </p>
              <p>
                Some text to enable scrolling.. Lorem ipsum dolor sit amet,
                illum definitiones no quo, maluisset concludaturque et eum,
                altera fabulas ut quo. Atqui causae gloriatur ius te, id agam
                omnis evertitur eum. Affert laboramus repudiandae nec et.
                Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
              </p>
              <p>
                Some text to enable scrolling.. Lorem ipsum dolor sit amet,
                illum definitiones no quo, maluisset concludaturque et eum,
                altera fabulas ut quo. Atqui causae gloriatur ius te, id agam
                omnis evertitur eum. Affert laboramus repudiandae nec et.
                Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
              </p>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
