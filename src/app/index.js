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
      navs: ["This", "Is", "A", "Loop"]
    };
    sayHello() = {
      alert('Hello!');
    }

    return (

        <div style={bodyStyle}>

            <Header links={links}/>

            <Home propString="Hello, World!" howdee={this.sayHello}/>

            <Button raise={1}/>
            {/* <Button raise="Greeting"/> */}
        </div>

    );
  }
}

render(<App/>, window.document.getElementById("app"));
