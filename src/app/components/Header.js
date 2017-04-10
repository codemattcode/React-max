import React from "react";

export class Header extends React.Component {
render() {

return(


<div>

  <ul className="links">
    {this.props.links.navs.map((nav, i) => <li key={i}>{nav}</li>)}
  </ul>

</div>

);
}
}
