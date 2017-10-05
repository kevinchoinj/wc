import React from 'react';
import DesktopBreakpoint from '../responsive/desktop_breakpoint.js';
import TabletBreakpoint from '../responsive/tablet_breakpoint.js';
import PhoneBreakpoint from '../responsive/phone_breakpoint.js';

import bgimage from '../images/vegas.jpeg';
import image4 from '../images/4.jpg';
import {Col, Row} from 'react-bootstrap';

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

			right:this.props.fromright,
			opacity: this.props.opac,
		}
		const divider = {
			height:"100px",
			width:"100%",
		}

		const image1style={
			maxWidth:"500px",

			WebkitTransition: ".4s ease-out",
			MozTransition: ".4s ease-out",
			OTransition: ".4s ease-out",
			transition:".4s ease-out",
			marginLeft:this.props.fromright,
			opacity: this.props.opac,
			width:"100%",
      float:"right",
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
			<Row>

			<Col md={4} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1} className= "bannerimage" id="specialevents">
				<img src={image4} style={image1style}/>
			</Col>
			<Col style={stats} md={5} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
			<TabletBreakpoint>
			<div style={divider}></div>
			</TabletBreakpoint>
			<PhoneBreakpoint>
			<div style={divider}></div>
			</PhoneBreakpoint>
  			<span style={title}><strong>Special Events</strong></span>
  			<br/><br/><br/>
  			Event info
      </Col>

			</Row>
			<div style={divider}></div>
			</div>
    );
  }
}
