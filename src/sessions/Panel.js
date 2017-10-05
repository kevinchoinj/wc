import React from "react";
import {Link} from 'react-router-dom';

export default class Split extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
	 }
	}

  render(){

const panelstyle={
	width:"100vw",
	height:"calc(100vh - 75px)",
	top:"75px",
	position:"fixed",
	backgroundColor:"rgba(0,0,0,.9)",
	right: this.props.leftOffset,
	WebkitTransition: ".4s ease-out",
	MozTransition: ".4s ease-out",
	OTransition: ".4s ease-out",
	transition:".4s ease-out",
}


	  return(
			<div style={panelstyle}>
			{this.props.children}
			</div>
	  );
  }
}
