import React from "react";
import {Col} from 'react-bootstrap';

export default class Split extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
	 }
	}

  render(){

const overlaycontainer={
	width:"100%",
	height:this.props.heightoftextbox,
	backgroundColor:"rgba(0,0,0,.9)",
	bottom:"0px",
	color:"#fff",
	position:"absolute",
	padding:"50px",
	fontSize:"24px",

	WebkitTransition: ".4s ease-out",
	MozTransition: ".4s ease-out",
	OTransition: ".4s ease-out",
	transition:".4s ease-out",

}

	  return(
				<div style={overlaycontainer}>
				{this.props.children}
				</div>
	  );
  }
}
