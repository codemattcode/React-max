import React from "react";

export class Home extends React.Component {
render() {
return(

<div>


  <div className='container'>
  <h4>Loop though an array</h4>
  <ul>
    {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
  </ul>
  </div>


</div>
);
}
}
