import React from "react";
import {Col} from 'react-bootstrap';
import Columnoverlay from './Columnoverlay';

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
	WebkitTransition: this.props.timing,
	MozTransition: this.props.timing,
	OTransition: this.props.timing,
	transition:this.props.timing,
	bottom:this.props.offset1,
}
const colstylemobile={
	WebkitTransition: this.props.timing,
	MozTransition:this.props.timing,
	OTransition: this.props.timing,
	transition:this.props.timing,
	left:this.props.offset1,
}

const inner={
		backgroundImage: 'url('+this.props.bgimage+')',
	}  

	  return(
			<Col 
				md={4} 
				sm={4} 
				xs={12} 
				style={colstyle} 
				onMouseEnter={this.hoverthumb} 
				onMouseLeave={this.leavethumb}
				className='sessions_column'
			>
				<div 
					style={inner} 
					className='sessions_column_inner'
				>
				</div>
				<Columnoverlay 
					heightoftextbox={this.state.heightoftextbox} 
					hovercolor={this.state.hovercolor}
				>
					{this.props.children}
				</Columnoverlay>
			</Col>
	  );
  }
}
