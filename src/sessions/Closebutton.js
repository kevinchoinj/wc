import React from "react";
import {Link} from 'react-router-dom';

export default class Split extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
		 btncolor: "#fff",
	 }
	 this.hoverbutton=this.hoverbutton.bind(this)
	 this.leavebutton = this.leavebutton.bind(this)
	}
hoverbutton(){
	this.setState({
		btncolor:"#af9759"
	})
}

leavebutton(){
	this.setState({
		btncolor:"#fff"
	})
}

  render(){

const closebtn={
	position:"absolute",
	left:"35px",
	top:"50px",
	width:"50px",
	height:"50px",
	marginTop:"-20px"
}

const line1={
	height: "3px",
	width: "32px",

	/*margin top set like this and offset in the button container because the spans don't align with the container otherwise*/
	marginTop:"20px",

	position: "absolute",
	backgroundColor: this.state.btncolor,
	zIndex: "11",
	WebkitTransition: ".4s ease-out",
	MozTransition: ".4s ease-out",
	OTransition: ".4s ease-out",
	transition:".4s ease-out",
	WebkitTransform: "rotate(45deg)",
	MozTransform: "rotate(45deg)",
	OTransform: "rotate(45deg)",
	transform: "rotate(45deg)",
}
const line2={
	height: "3px",
	width: "32px",

	marginTop:"20px",
	
	position: "absolute",
	backgroundColor: this.state.btncolor,
	zIndex: "11",
	WebkitTransition: ".4s ease-out",
	MozTransition: ".4s ease-out",
	OTransition: ".4s ease-out",
	transition:".4s ease-out",
	WebkitTransform: "rotate(-45deg)",
	MozTransform: "rotate(-45deg)",
	OTransform: "rotate(-45deg)",
	transform: "rotate(-45deg)",
}


	  return(
			<Link to='/sessions'>
			<div style={closebtn}  onMouseEnter={this.hoverbutton} onMouseLeave={this.leavebutton}>
			<span style={line1}></span>
			<span style={line2}></span>
			</div>
			</Link>
	  );
  }
}
