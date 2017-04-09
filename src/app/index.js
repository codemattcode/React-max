import React from "react";
import { render } from "react-dom";

import { Home } from "./components/Home";

class App extends React.Component {
  render() {

    var user = {
      hobbies: ["Sports", "Reading", "Singing"]
    };

    return (


            <Home user={user}/>

    );
  }
}

render(<App/>, window.document.getElementById("app"));
