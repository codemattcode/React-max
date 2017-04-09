import React from "react";

export class Home extends React.Component {
render() {

return(


<div>

  <ul>
    {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
  </ul>


</div>
);
}
}
