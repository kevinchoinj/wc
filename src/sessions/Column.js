import React from "react";
import {Col} from 'react-bootstrap';
import Columnoverlay from './Columnoverlay';
import DesktopBreakpoint from '../responsive/desktop_breakpoint.js';
import TabletBreakpoint from '../responsive/tablet_breakpoint.js';
import PhoneBreakpoint from '../responsive/phone_breakpoint.js';

export default class Split extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
		 heightoftextbox:"30%",
		 hovercolor:"#fff",

		 hovered:false,
	 }

	 this.hoverthumb = this.hoverthumb.bind(this)
	 this.leavethumb = this.leavethumb.bind(this)
	}
hoverthumb(){
	this.setState({
		heightoftextbox:"70%",
		hovercolor:"#af9759",
		hovered:true,
	})
}
leavethumb(){
	this.setState({
		heightoftextbox:"30%",
		hovercolor:"#fff",
		hovered:false,
	})
}
  render(){


const colstyle={
	height:"calc(100vh - 75px)",

	WebkitTransition: this.props.timing,
	MozTransition: this.props.timing,
	OTransition: this.props.timing,
	transition:this.props.timing,
	bottom:this.props.offset1,
	overflow:"hidden",
}
const colstylemobile={
	//height:"calc(100vh - 75px)",
	height:"calc(33vh - 18.75px)",
	background: 'url('+this.props.bgimage+')',
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center top",
	backgroundSize: "cover",
	WebkitTransition: this.props.timing,
	MozTransition:this.props.timing,
	OTransition: this.props.timing,
	transition:this.props.timing,
		left:this.props.offset1,
}

var inner={
}

if (this.state.hovered){
	inner = {
		height:"100%",
		width:"100%",
		background: 'url('+this.props.bgimage+')',
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center top",
		backgroundSize: "cover",
		transform: "scale(1.1,1.1)",
		WebkitTransition: ".4s ease-out",
		MozTransition: ".4s ease-out",
		OTransition: ".4s ease-out",
		transition:".4s ease-out",
	}  
}
else{
	inner = {
	height:"100%",
	width:"100%",
	background: 'url('+this.props.bgimage+')',
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center top",
	backgroundSize: "cover",
	transform: "scale(1,1)",
	WebkitTransition: ".4s ease-out",
	MozTransition: ".4s ease-out",
	OTransition: ".4s ease-out",
	transition:".4s ease-out",
	}  
}

	  return(
			<div>

			<DesktopBreakpoint>
				<Col md={4} sm={4} xs={12} style={colstyle} onMouseEnter={this.hoverthumb} onMouseLeave={this.leavethumb}>

				<div style={inner}></div>

				<Columnoverlay heightoftextbox = {this.state.heightoftextbox} hovercolor={this.state.hovercolor}>
				{this.props.children}
				</Columnoverlay>
				</Col>
			</DesktopBreakpoint>

			<TabletBreakpoint>
				<Col md={4} sm={4} xs={12} style={colstyle} onMouseEnter={this.hoverthumb} onMouseLeave={this.leavethumb}>

				<div style={inner}></div>
				<Columnoverlay heightoftextbox = {this.state.heightoftextbox} hovercolor={this.state.hovercolor}>
				{this.props.children}
				</Columnoverlay>
				</Col>
			</TabletBreakpoint>

			<PhoneBreakpoint>
				<Col md={4} sm={4} xs={12} style={colstylemobile} onMouseEnter={this.hoverthumb} onMouseLeave={this.leavethumb}>
				<Columnoverlay heightoftextbox = {this.state.heightoftextbox} hovercolor={this.state.hovercolor}>
				{this.props.children}
				</Columnoverlay>
				</Col>
			</PhoneBreakpoint>
			</div>
	  );
  }
}
