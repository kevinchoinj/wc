import React from "react";

export default class Background extends React.Component{
  render(){
		const navigate= {
			position:"fixed",
			//mixBlendMode: "difference",
			zIndex: "100",
			top:"0px",
			width:this.props.buttonwidth,
			height:"75px",
			cursor:"pointer",
			//willChange: "opacity",
      backgroundColor: "#af9759",

      WebkitTransition: ".4s ease-out",
      MozTransition: ".4s ease-out",
      OTransition: ".4s ease-out",
      transition:".4s ease-out",
		}
		const menubutton={
			background: "transparent",
			color: "#fff",
		}
		const line1={
			height: "3px",
			width: "32px",
			position: "absolute",
			backgroundColor: this.props.buttoncolor,
			top:this.props.line1top,
			left: this.props.linesfromleft,
			zIndex: "11",
			WebkitTransition: ".4s ease-out",
			MozTransition: ".4s ease-out",
			OTransition: ".4s ease-out",
			transition:".4s ease-out",
			WebkitTransform: this.props.line1rot,
			MozTransform: this.props.line1rot,
			OTransform: this.props.line1rot,
			transform: this.props.line1rot,
		}
		const line2={
			height: "3px",
			width: "32px",
			position: "absolute",
			backgroundColor: this.props.buttoncolor,
			top:this.props.line2top,
			left: this.props.linesfromleft,
			zIndex: "11",
			WebkitTransition: ".4s ease-out",
			MozTransition: ".4s ease-out",
			OTransition: ".4s ease-out",
			transition:".4s ease-out",
			WebkitTransform: this.props.line2rot,
			MozTransform: this.props.line2rot,
			OTransform: this.props.line2rot,
			transform: this.props.line2rot,
		}
		const line3={
			height: "3px",
			width: this.props.line3rot,
			position: "absolute",
			backgroundColor: this.props.buttoncolor,
			top:"47px",
			left: this.props.linesfromleft,
			zIndex: "11",
			WebkitTransition: ".4s ease-out",
			MozTransition: ".4s ease-out",
			OTransition: ".4s ease-out",
			transition:".4s ease-out",
		}

	  return(

				<div style={navigate} onClick={this.props.toggler} onMouseEnter={this.props.hover} onMouseLeave={this.props.nothover}>
					<div style={menubutton}>
					<span style={line1}></span>
					<span style={line2}></span>
					<span style={line3}></span>
					</div>
				</div>

	  );
  }
}
