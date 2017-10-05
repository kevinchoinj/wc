import React from "react";
import {Col} from 'react-bootstrap';
import Columnoverlay from './Columnoverlay';

export default class Split extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
		 heightoftextbox:"200px",
	 }

	 this.hoverthumb = this.hoverthumb.bind(this)
	 this.leavethumb = this.leavethumb.bind(this)
	}
hoverthumb(){
	this.setState({
		heightoftextbox:"400px",
	})
}
leavethumb(){
	this.setState({
		heightoftextbox:"200px",
	})
}
  render(){

const colstyle={
	height:"calc(100vh - 75px)",

	background: 'url('+this.props.bgimage+')',
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center top",
	backgroundSize: "cover",
	WebkitTransition: ".4s ease-out",
	MozTransition: ".4s ease-out",
	OTransition: ".4s ease-out",
	transition:".4s ease-out",
}


	  return(
			<Col md={3} style={colstyle} onMouseEnter={this.hoverthumb} onMouseLeave={this.leavethumb}>
			<Columnoverlay heightoftextbox = {this.state.heightoftextbox}>
			Test_Text
			</Columnoverlay>
			</Col>
	  );
  }
}
