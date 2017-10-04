import React from 'react';
import DesktopBreakpoint from '../responsive/desktop_breakpoint.js';
import TabletBreakpoint from '../responsive/tablet_breakpoint.js';
import PhoneBreakpoint from '../responsive/phone_breakpoint.js';

import bgimage from '../images/vegas.jpeg';
import image4 from '../images/4.jpg';

export default class Fighstyle extends React.Component {
  constructor(props) {
	 super(props);
	 this.state = {
     opacity: "0",
	 }
 }
  /*fades in the banner*/
  componentDidMount() {
   setTimeout(function() { this.setState({opacity:"1"}); }.bind(this), 450);
  }

  render() {
		const statscontainer={
			opacity: this.state.opacity,
			WebkitTransition: ".4s ease-out",
			MozTransition: ".4s ease-out",
			OTransition: ".4s ease-out",
			transition:".4s ease-out",
		}
		const stats={
			fontFamily:"Lato, Helvetica",
			color:"#fff",
			fontSize:"18px",
			lineHeight:"150%",
			letterSpacing:"1px",

			WebkitTransition: ".4s ease-out",
			MozTransition: ".4s ease-out",
			OTransition: ".4s ease-out",
			transition:".4s ease-out",

			left:this.props.fromleft,
			opacity: this.props.opac,
		}
		const divider = {
			height:"100px",
			width:"100%",
		}

		const image1style={
			maxWidth:"750px",

			WebkitTransition: ".4s ease-out",
			MozTransition: ".4s ease-out",
			OTransition: ".4s ease-out",
			transition:".4s ease-out",
			marginLeft:this.props.fromright,
			opacity: this.props.opac,
			width:"100%",
		}
		const title={
			fontSize:"40px",
			color: "#af9759",
		}
    return (
			<div style={statscontainer}>
			<div style={divider}></div>
			<DesktopBreakpoint>
			<div style={divider}></div>
			</DesktopBreakpoint>
			<div className="row">

			<div className="col-md-3 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 bannerimage" id="specialevents">
				<img src={image4} style={image1style}/>
			</div>
			<div style={stats} className="col-md-5 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
			<TabletBreakpoint>
			<div style={divider}></div>
			</TabletBreakpoint>
			<PhoneBreakpoint>
			<div style={divider}></div>
			</PhoneBreakpoint>
			<span style={title}><strong>Special Events</strong></span>
			<br/><br/><br/>
			Event info
      </div>

			</div>
			<div style={divider}></div>
			</div>
    );
  }
}
