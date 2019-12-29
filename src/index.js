import React, { Component } from "react";
import ReactDom from "react-dom";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
  }

  render() {
    return <div>Hi There!</div>;
  }
}

export default App;

ReactDom.render(<App />, document.querySelector("#root"));
