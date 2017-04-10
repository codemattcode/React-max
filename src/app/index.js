import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Button } from "./components/Button";

class App extends React.Component {
  render() {
    const bodyStyle = {
      maxWidth: '800px',
      width: '80%',
      margin: '20px auto'
    };
    var links = {
      navs: ["Home", "About", "Portfolio", "Contact"]
    };

    return (

        <div style={bodyStyle}>

            <Header links={links}/>

            <Home/>

            <Button />
        </div>

    );
  }
}

render(<App/>, window.document.getElementById("app"));
