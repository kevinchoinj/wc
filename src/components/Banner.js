import React from 'react';

import DesktopBreakpoint from '../responsive/desktop_breakpoint.js';
import TabletBreakpoint from '../responsive/tablet_breakpoint.js';
import PhoneBreakpoint from '../responsive/phone_breakpoint.js';

import posterimage from '../images/banner2.jpg';
import vidoutput from '../images/testvid.mp4';
import arrow from '../images/downarrow.png';

import {Col} from 'react-bootstrap';

export default class Banner extends React.Component {
  constructor(props) {
	 super(props);
	 this.state = {
     opacity: "0",
	 }
 }
  /*fades in the banner*/
  componentDidMount() {
   setTimeout(function() { this.setState({opacity:"1"}); }.bind(this), 0);
  }

  render() {
		const bannercont={
			height:"100vh",
			width:"100vw",

		}
		const banner={
      opacity: this.state.opacity,
			top:"75px",
      WebkitTransition: ".4s ease-out",
      MozTransition: ".4s ease-out",
      OTransition: ".4s ease-out",
      transition:".4s ease-out",
			position:"absolute",
			//height:"calc(100vh - 270px)",
			height:"calc(100vh - 225px)",
			overflowY: "hidden",
			width:"100%",


			"backgroundAttachment":"fixed",
		}
		const underbanner={
			fontSize:"48px",
			color:"#fff",
			bottom:"50px",
			position:"absolute",
			color: "#af9759",
			fontFamily: "Lato, Helvetica",
		}

		const fillimage={
			position:"absolute",
			width:"100%",
		}

		const arrowstyle={
			width:"80px",
			height:"80px",
			position:"absolute",
			right:"0px",
		}

    return (
			<div style={bannercont}>
	      <div style={banner}>
				<video loop src={vidoutput} autoPlay="autoplay"  id="iobg" poster={posterimage} style={fillimage}></video>
			</div>
			<Col style={underbanner} md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
				Session Information
				<DesktopBreakpoint><img src={arrow} style={arrowstyle}/></DesktopBreakpoint>
				<TabletBreakpoint><img src={arrow} style={arrowstyle}/></TabletBreakpoint>
			</Col>
			</div>
    );
  }
}
