import React from "react";

export class Header extends React.Component {
render() {
return(
<div className='navbar navbar-default'>
  <div className='container'>
    <div className='navbar-header'>
      <ul className='nav navbar-nav'>
        <li><a href='#'>{this.props.children}</a></li>
</ul>
</div>
</div>
</div>
);
}
}

// Deprecated
// Header.propTypes = {
//   children: React.PropTypes.element.isRequired
// };
