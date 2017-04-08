import React from "react";

export class Button extends React.Component {
  
render() {
  const btnStyle = {
    marginTop: '10px'
  };
return(
<div className='container'>
  <button style={btnStyle} className="btn btn-primary">Hello</button>
</div>
);
}
}
