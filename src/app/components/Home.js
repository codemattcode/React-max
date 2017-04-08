import React from "react";

export class Home extends React.Component {
render() {
let content = "";
if (true) {
  content = <p>this is true</p>;
}
return(
<div>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, facere provident labore illo! In quis, nulla dicta. Impedit fuga eveniet, dolorem quas reiciendis, eaque, asperiores natus quam suscipit omnis rem?</p>

  <h1>{content}</h1>
  <h2>{"A String"}</h2>
  <h3>{5==2 ? "Yes" : "No" }</h3>

</div>
);
}
}
