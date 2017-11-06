import React from "react";

import DesktopBreakpoint from '../responsive/desktop_breakpoint.js';
import TabletBreakpoint from '../responsive/tablet_breakpoint.js';
import PhoneBreakpoint from '../responsive/phone_breakpoint.js';

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
	color:this.props.hovercolor,
	position:"absolute",
	padding:"50px",
	fontSize:"24px",
	fontFamily:"Lato, Helvetica",

	WebkitTransition: ".4s ease-out",
	MozTransition: ".4s ease-out",
	OTransition: ".4s ease-out",
	transition:".4s ease-out",
}
const overlaycontainermobile={
	width:"50%",
	height:"100%",
	backgroundColor:"rgba(0,0,0,.5)",
	right:"0px",
	color:this.props.hovercolor,
	position:"absolute",
	padding:"50px",
	fontSize:"24px",
	fontFamily:"Lato, Helvetica",

	WebkitTransition: ".4s ease-out",
	MozTransition: ".4s ease-out",
	OTransition: ".4s ease-out",
	transition:".4s ease-out",
}

	  return(
			<div>
				<DesktopBreakpoint>
				<div style={overlaycontainer}>
				{this.props.children}
				</div>
				</DesktopBreakpoint>

				<TabletBreakpoint>
				<div style={overlaycontainer}>
				{this.props.children}
				</div>
				</TabletBreakpoint>

				<PhoneBreakpoint>
				<div style={overlaycontainermobile}>
				{this.props.children}
				</div>
				</PhoneBreakpoint>
			</div>
	  );
  }
}
