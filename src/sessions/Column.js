import React from "react";
import {Col} from 'react-bootstrap';
export default class Split extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
	 }
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
			<Col md={3} style={colstyle}>
			asdf
			</Col>
	  );
  }
}
