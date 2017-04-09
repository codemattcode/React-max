import React from "react";
import { render } from "react-dom";

import { Home } from "./components/Home";

class App extends React.Component {
  render() {
    var user = {
      name: "Anna",
      hobbies: ["Sports", "Reading", "Singing"]
    };
    return (


            <Home name={"Fred"} age={"34"} user={user}/>

    );
  }
}

render(<App/>, window.document.getElementById("app"));
