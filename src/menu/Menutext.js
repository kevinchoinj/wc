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

			}


	  return(

				<span style={textdec} onMouseEnter={this.hovertext} onMouseLeave={this.leavetext}>
				{this.props.children}
				</span>
	  );
  }
}