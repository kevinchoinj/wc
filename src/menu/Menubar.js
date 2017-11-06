import React from 'react';
import {Link} from 'react-router-dom';

import DesktopBreakpoint from '../responsive/desktop_breakpoint.js';
import TabletBreakpoint from '../responsive/tablet_breakpoint.js';
import PhoneBreakpoint from '../responsive/phone_breakpoint.js';

export default class Menubar extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
			lettercolor: "#ffF",
  	}
		this.hoverbar = this.hoverbar.bind(this)
		this.leavebar = this.leavebar.bind(this)
  }
  componentDidMount() {

  }

	hoverbar(){
		this.setState({
			lettercolor: "#af9759"
		});
	}
	leavebar(){
		this.setState({
			lettercolor: "#fff"
		});
	}


  render(){
		const menubar={
			width:"100vw",
			height:"75px",
			backgroundColor:"#000",
			textAlign:"center",
			color:this.state.lettercolor,
			paddingTop:"21px",
			fontFamily:"Lato, Helvetica",
			fontSize:"30px",
			letterSpacing:"0.59em",
			zIndex:"10",
			position:"fixed",
			top:"0px",

			WebkitTransition: ".4s ease-out",
			MozTransition: ".4s ease-out",
			OTransition: ".4s ease-out",
			transition:".4s ease-out",

			cursor:"default",

			WebkitBoxShadow: "0px 10px 50px 10px rgba(0,0,0,0.5)",
			MozBoxShadow: "0px 10px 50px 10px rgba(0,0,0,0.5)",
			BoxShadow: "0px 10px 50px 10px rgba(0,0,0,0.5)",
		}
		const menubarphone={
			width:"100vw",
			height:"75px",
			backgroundColor:"#000",
			textAlign:"center",
			color:this.state.lettercolor,
			paddingTop:"30px",
			fontFamily:"Lato, Helvetica",
			fontSize:"14px",
			letterSpacing:"0.59em",
			zIndex:"10",
			position:"fixed",
			left:"50px",
			top:"0px",
			WebkitTransition: ".4s ease-out",
			MozTransition: ".4s ease-out",
			OTransition: ".4s ease-out",
			transition:".4s ease-out",

			cursor:"default",
		}

    const linkstyle={
      textDecoration:"none",
      color:this.state.lettercolor,
      WebkitTransition: ".4s ease-out",
      MozTransition: ".4s ease-out",
      OTransition: ".4s ease-out",
      transition:".4s ease-out",
    }

    return(
      <div>
			<DesktopBreakpoint>
			<div style={menubar} onMouseEnter={this.hoverbar} onMouseLeave={this.leavebar}>
			<Link to='/' style={linkstyle}>ASHLEY WILDCAT</Link>
			</div>
			</DesktopBreakpoint>
			<TabletBreakpoint>
			<div style={menubar} onMouseEnter={this.hoverbar} onMouseLeave={this.leavebar}>
			<Link to='/' style={linkstyle}>ASHLEY WILDCAT</Link>
			</div>
			</TabletBreakpoint>
			<PhoneBreakpoint>
			<div style={menubarphone} onMouseEnter={this.hoverbar} onMouseLeave={this.leavebar}>
			<Link to='/' style={linkstyle}>ASHLEY WILDCAT</Link>
			</div>
			</PhoneBreakpoint>
			</div>
    );
  }
}
