import React from "react";

export default class Menutext extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
		textcolor: "#fff"
	 }
		this.hovertext = this.hovertext.bind(this)
		this.leavetext = this.leavetext.bind(this)
	}
	hovertext(){
			this.setState({
					textcolor:"#af9759"
			});
		}
	leavetext(){
		this.setState({
			textcolor:"#fff"
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
