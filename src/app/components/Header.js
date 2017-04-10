import React from "react";

export class Header extends React.Component {
render() {

return(

<ul>
  <li><a href='#'>{this.props.children}</a></li>
</ul>

);
}
}
