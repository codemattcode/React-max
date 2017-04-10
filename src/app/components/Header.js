import React from "react";

export class Header extends React.Component {
render() {
  const unorderedStyle = {
      float: 'right',
      clear: 'both',
      marginTop: '20px',
      marginRight: '5px'
    };
  const listStyle = {
      float: 'left',
      marginRight: '1px',
      listStyleType: 'none',
      fontSize: '1.25em',
      fontWeight: '300',
      background: 'rgb(109, 203, 35)',
      color: 'white',
      padding: '2px 5px'
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
