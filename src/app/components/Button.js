import React from "react";

export class Button extends React.Component {

render() {
  let raise = "1";
  const btnStyle = {
    marginTop: '10px',
    padding: '10px 20px',
    background: 'rgb(109, 203, 35)',
    border: '1px solid white',
    float: 'left'
  };
  const numb = {
    color: 'red',
    padding: '13px',
    marginLeft: '100px',
    fontSize: '1.5em'
  }
return(

<div>
  <button style={btnStyle} className="btn btn-primary">Next</button>
  <p style={numb}>{raise}</p>
</div>
);
}
}
