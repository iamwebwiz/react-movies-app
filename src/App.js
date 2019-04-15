import React, { Component } from "react";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="mt-5">
          <div className="row">
            <div className="col-12">
              <Home />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
