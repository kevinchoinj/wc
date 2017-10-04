import React from "react";

import Menubutton from './Menubutton.js';
import Menupanel from './Menupanel.js';

import DesktopBreakpoint from '../responsive/desktop_breakpoint.js';
import TabletBreakpoint from '../responsive/tablet_breakpoint.js';
import PhoneBreakpoint from '../responsive/phone_breakpoint.js';


export default class Menu extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
		 lineanim1: "none",
		 lineanim2: "none",
		 lineanim3: "32px",
		 line1fromtop: "29px",
		 line2fromtop: "38px",

		desktopmenuright: "-450px",
		mobilemenuright: "-100%",

		buttoncolor: "#000",

		btnwidth: "100px",
		linesfromleft:"35px",

	 }
	 	this.hoverbutton = this.hoverbutton.bind(this)
		this.nothoverbutton = this.nothoverbutton.bind(this)
		this.togglemenu = this.togglemenu.bind(this)
 }

togglemenu(){
	if (this.state.lineanim3 === "32px"){
		this.setState({
			 lineanim1: "rotate(45deg)",
			 lineanim2: "rotate(-45deg)",
			 lineanim3: "0px",
			 line1fromtop: "34px",
			 line2fromtop: "34px",
			 desktopmenuright: "0px",
			 mobilemenuright: "0px",
				btnwidth: "260px",
				linesfromleft:"110px",
		});
	}
	else if(this.state.lineanim3 ==="0px"){
		this.setState({
			 lineanim1: "none",
			 lineanim2: "none",
			 lineanim3: "32px",
			 line1fromtop: "29px",
			 line2fromtop: "38px",
			 desktopmenuright: "-450px",
		mobilemenuright: "-100%",
				btnwidth: "100px",
				linesfromleft:"35px",
		});
	}
}
 hoverbutton(){
	 	 this.setState({
			 buttoncolor: "#fff",

		 });
 }

 nothoverbutton(){
		this.setState({
			 buttoncolor: "#000",
		});
 }

  render(){
const menubar={
	width:"100%",
	height:"54px",
	backgroundColor:"#000",
	textAlign:"center",
	color:"#fff",
	paddingTop:"21px",
	fontFamily:"Lato, Helvetica",
	fontSize:"30px",
	letterSpacing:"0.59em",
	zIndex:"10",
	position:"fixed",
}
const menubarphone={
	width:"100%",
	height:"45px",
	backgroundColor:"#000",
	textAlign:"center",
	color:"#fff",
	paddingTop:"30px",
	fontFamily:"Lato, Helvetica",
	fontSize:"16px",
	letterSpacing:"0.59em",
	position:"fixed",
}

	  return(

				<div>

				<DesktopBreakpoint>
				<div style={menubar}>
				ASHLEY WILDCAT
				</div>
				</DesktopBreakpoint>
				<TabletBreakpoint>
				<div style={menubar}>
				ASHLEY WILDCAT
				</div>
				</TabletBreakpoint>
				<PhoneBreakpoint>
				<div style={menubarphone}>
				ASHLEY WILDCAT
				</div>
				</PhoneBreakpoint>

					<Menubutton
						toggler={this.togglemenu}

						line1rot={this.state.lineanim1}
						line2rot={this.state.lineanim2}
						line3rot={this.state.lineanim3}
						line1top={this.state.line1fromtop}
						line2top={this.state.line2fromtop}

						hover={this.hoverbutton}
						nothover={this.nothoverbutton}

						buttoncolor={this.state.buttoncolor}
						buttonwidth = {this.state.btnwidth}
						linesfromleft = {this.state.linesfromleft}
						/>
						<Menupanel
							toggler = {this.togglemenu}
							menuright={this.state.desktopmenuright}
							mobileright={this.state.mobilemenuright}
						/>
				</div>

	  );
  }
}
