import React from "react";

export class Header extends React.Component {
render() {

return(


<div>
    <p>{this.props.children}</p>
</div>

);
}
}
