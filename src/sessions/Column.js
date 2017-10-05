import React from "react";
import {Col} from 'react-bootstrap';
import Columnoverlay from './Columnoverlay';
import {Link} from 'react-router-dom';
import DesktopBreakpoint from '../responsive/desktop_breakpoint.js';
import TabletBreakpoint from '../responsive/tablet_breakpoint.js';
import PhoneBreakpoint from '../responsive/phone_breakpoint.js';

export default class Split extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
		 heightoftextbox:"30%",
		 hovercolor:"#fff",
	 }

	 this.hoverthumb = this.hoverthumb.bind(this)
	 this.leavethumb = this.leavethumb.bind(this)
	}
hoverthumb(){
	this.setState({
		heightoftextbox:"70%",
		hovercolor:"#af9759",
	})
}
leavethumb(){
	this.setState({
		heightoftextbox:"30%",
		hovercolor:"#fff",
	})
}
  render(){


const colstyle={
	height:"calc(100vh - 75px)",
	background: 'url('+this.props.bgimage+')',
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center top",
	backgroundSize: "cover",
	WebkitTransition: this.props.timing,
	MozTransition: this.props.timing,
	OTransition: this.props.timing,
	transition:this.props.timing,
	bottom:this.props.offset1,
}
const colstylemobile={
	//height:"calc(100vh - 75px)",
height:"200px",
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

	  return(
			<div>

			<DesktopBreakpoint>
				<Col md={3} sm={3} xs={12} style={colstyle} onMouseEnter={this.hoverthumb} onMouseLeave={this.leavethumb}>
				<Columnoverlay heightoftextbox = {this.state.heightoftextbox} hovercolor={this.state.hovercolor}>
				{this.props.children}
				</Columnoverlay>
				</Col>
			</DesktopBreakpoint>

			<TabletBreakpoint>
				<Col md={3} sm={3} xs={12} style={colstyle} onMouseEnter={this.hoverthumb} onMouseLeave={this.leavethumb}>
				<Columnoverlay heightoftextbox = {this.state.heightoftextbox} hovercolor={this.state.hovercolor}>
				{this.props.children}
				</Columnoverlay>
				</Col>
			</TabletBreakpoint>

			<PhoneBreakpoint>
				<Col md={3} sm={3} xs={12} style={colstylemobile} onMouseEnter={this.hoverthumb} onMouseLeave={this.leavethumb}>
				<Columnoverlay heightoftextbox = {this.state.heightoftextbox} hovercolor={this.state.hovercolor}>
				{this.props.children}
				</Columnoverlay>
				</Col>
			</PhoneBreakpoint>
			</div>
	  );
  }
}
