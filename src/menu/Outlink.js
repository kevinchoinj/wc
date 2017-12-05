import React from "react";

export default class Outlink extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
		textcolor: "#000"
	 }
		this.hovertext = this.hovertext.bind(this)
		this.leavetext = this.leavetext.bind(this)
	}
	hovertext(){
			this.setState({
					textcolor:"#fff"
			});
		}
	leavetext(){
		this.setState({
			textcolor:"#000"
		});
	}
  render(){
			const textdec={
				color: this.state.textcolor,
				WebkitTransition: ".2s ease-out",
				MozTransition: ".2s ease-out",
				OTransition: ".2s ease-out",
				transition:".2s ease-out",
			}
	  return(
				<span style={textdec} onMouseEnter={this.hovertext} onMouseLeave={this.leavetext}>
				{this.props.children}
				</span>
	  );
  }
}
