import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  render() {

    var links = {
      navs: ["Home", "About", "Portfolio", "Contact"]
    };

    return (

        <div>

            <Header links={links}/>

            <Home/>

        </div>

    );
  }
}

render(<App/>, window.document.getElementById("app"));
