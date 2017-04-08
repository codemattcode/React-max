import React from "react";

export class Home extends React.Component {
render() {
let lime = "limes are tasty";
let content = "";
if (true) {
  content = <p>this is true</p>;
}
return(
<div>

  <h1>{lime}</h1>

  <h1>{content}</h1>
  <h1>{"A String"}</h1>
  <h1>{5==2 ? "Yes" : "No" }</h1>

  <h3>This is a prop: {this.props.name}</h3>
  <h3>This is a prop: {this.props.age}</h3>
  <h3>This is a prop: {this.props.user.name}</h3>
  <h4>Loop though an array</h4>
  <ul>
    {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
  </ul>
</div>
);
}
}

// Deprecated
// Home.propTypes = {
//   name: React.PropTypes.string,
//   age: React.PropTypes.number,
//   user: React.PropTypes.object
// };
