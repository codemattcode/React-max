import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  render() {

    var user = {
      hobbies: ["Sports", "Reading", "Singing", "Walking", "Painting"]
    };

    return (

        <div>
            <Header>
              <p>this is the header</p>
            </Header>
            <Home user={user}/>

        </div>

    );
  }
}

render(<App/>, window.document.getElementById("app"));
