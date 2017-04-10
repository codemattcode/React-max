import React from "react";

export class Button extends React.Component {
  constructor(props) {
    super();
    this.state = {
      raise: props.raise,
      status: 0
    };
  }
  add() {
    this.setState({
      raise: this.state.raise + 10
      // raise: this.state.raise = 'hello'
    });
  }

render() {
  const btnStyle = {
    marginTop: '10px',
    padding: '10px 20px',
    background: 'rgb(109, 203, 35)',
    border: '1px solid white',
    float: 'left',
    outline: 'none'
  };
  const numb = {
    color: 'red',
    padding: '14px',
    marginLeft: '100px',
    fontSize: '1.5em'
  }
return(

<div>
  <button onClick={this.add.bind(this)} style={btnStyle} className="btn btn-primary">Next</button>
  <p style={numb}>{this.state.raise}</p>

  <button onClick={this.props.howdee}>Say It!</button>
</div>

);
}
}
