import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Button } from "./components/Button";

class App extends React.Component {
  render() {
    var user = {
      name: "Anna",
      hobbies: ["Sports", "Reading", "Singing"]
    };
    return (

      <div className="container">
        <div className='row'>
          <div className='col-xs-10 col-xs-offset-1'>

            <Header>
              <p>using the Class as opening and closing tags with props.children</p>
            </Header>


          </div>
        </div>
        <div className='row'>
          <div className='col-xs-10 col-xs-offset-1'>


            <Home name={"Fred"} age={"34"} user={user}/>



          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
