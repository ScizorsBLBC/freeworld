import React, { Component } from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./GlobalStyles";
import { Route, NavLink, HashRouter } from "react-router-dom";

import { Table, numberFormat } from "./Table.jsx";

class App extends Component {
  render() {
    return (
      <HashRouter>
        {/* <div>
          <h1>Calculator to Maximize Potential Earnings </h1>
        </div> */}
        <div>
          <GlobalStyle />
          <div>
            <Table />
          </div>
        </div>
        <div className="footer">
          <footer>
            <p>sorry mom</p>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
