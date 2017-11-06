import React from "react";
import Closebutton from './Closebutton';

export default class Split extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
		 panelpadding:""
	 }

	 this.myFunction = this.myFunction.bind(this)
	}

componentDidMount(){
	window.addEventListener("resize", this.myFunction);
	this.myFunction();
}
componentWillUnmount(){
	window.removeEventListener("resize", this.myFunction);
}

myFunction(){
	if (window.innerWidth > 992){
		this.setState({
			panelpadding:"50px"
		})
	}
	else{
		this.setState({
			panelpadding:"0px"
		})
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
	color:"#fff",
	paddingTop:"50px",
	paddingLeft:this.state.panelpadding,
	paddingBottom:"200px",
	overflowY:"auto",

	WebkitOverflowScrolling: "touch",
	opacity:this.props.opacity,
}


	  return(
			<div style={panelstyle}>
			<Closebutton/>
			{this.props.children}
			</div>


	  );
  }
}
