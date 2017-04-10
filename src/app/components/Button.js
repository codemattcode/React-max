import React from "react";

export class Button extends React.Component {

render() {
  const btnStyle = {
    marginTop: '10px',
    padding: '10px 20px'
  };
return(
<div>
  <button style={btnStyle} className="btn btn-primary">Next</button>
</div>
);
}
}
