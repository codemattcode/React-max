import React from "react";
import { render } from "react-dom";
import {Router, Route, browserHistory} from "react-router"
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Page2 } from "./components/Page2";
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

    return (


        <div style={bodyStyle}>

          <Router history="browserHistory">
            <Route path={"page2"} component={page2}/>
            <Route path={"home"} component={home}/>
          </Router>

            <Header links={links}/>

            <Home propString="Hello, World!"/>

            <Button raise={1}/>
            {/* <Button raise="Greeting"/> */}

        </div>

    );
  }
}

render(<App/>, window.document.getElementById("app"));
