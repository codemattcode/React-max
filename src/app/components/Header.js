import React from "react";

export class Header extends React.Component {
render() {
  const unorderedStyle = {
      float: 'right',
      clear: 'both'
    };
  const listStyle = {
      float: 'left',
      marginRight: '10px',
      listStyleType: 'none'
    };

return(


<div>

  <ul style={unorderedStyle}>
    {this.props.links.navs.map((nav, i) => <li style={listStyle} key={i}>{nav}</li>)}
  </ul>

</div>

);
}
}
