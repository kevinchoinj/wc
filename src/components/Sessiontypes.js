import React from 'react';
import DesktopBreakpoint from '../responsive/desktop_breakpoint.js';
import TabletBreakpoint from '../responsive/tablet_breakpoint.js';
import PhoneBreakpoint from '../responsive/phone_breakpoint.js';

import bgimage from '../images/vegas.jpeg';
import image1 from '../images/1.jpg';
import {Col, Row} from 'react-bootstrap';

export default class Statistics extends React.Component {
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
			maxWidth:"500px",
			WebkitTransition: ".4s ease-out",
			MozTransition: ".4s ease-out",
			OTransition: ".4s ease-out",
			transition:".4s ease-out",

			right:this.props.fromleft,
			opacity: this.props.opac,
		}
		const title={
			fontSize:"40px",
			color: "#af9759",
		}

		const emp={
			fontWeight:"bold",
			color: "#af9759",
		}

    return (
			<div style={statscontainer}>
			<div style={divider}></div>
			<DesktopBreakpoint>
			<div style={divider}></div>
			</DesktopBreakpoint>
			<Row>
			<Col md={5} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1} style={stats} id="sessiontypes">

				<span style={title}><strong>Session Types</strong></span>
				<br/><br/><br/>
				<span style={emp}>Fantasy Role-Plays</span> – These are so much fun! Yahoo! We can get very creative here! Take your wildest wrestling fantasy and let’s make it a reality!
				<br/>
				<span style={emp}>Semi-Competitive Wrestling Match</span> – We will each make some effort to win the match, but having fun is also a priority!!
				<br/>
				<span style={emp}>Competitive Wrestling Match</span> – We each give 100% effort to win the match. FYI, it WILL be me so be prepared to leave your ego and pride at the door when you come to see me! Ha!
				<br/>
				<span style={emp}>Scissoring</span> – My specialty!! You must experience this!! My figure-four, reverse head scissors and reverse head scissors are especially pleasurable and painful. These are so, so HOT and I LOVE to watch you suffer while you are trapped in my scissor holds!!
				<br/>
				<span style={emp}>Trampling</span> – You can do more than just lust after my sexy feet. Experience how they can dominate you in so many different ways.
				<br/>
				<span style={emp}>Kicking</span> – Oh boy, be careful with this one! My Hapkido instructors constantly tell me how incredibly powerful my kicks are when I am in class. Scared? You should be… Don’t worry, I won’t hurt you too badly. Boxing – My punches are as powerful as my choke holds and scissors holds. We can go light or all out!
				<br/>
				<span style={emp}>Muscle/Body Worship</span> – Have the honor and privilege of massaging the feet that kick you or the legs that crush you? I am a Goddess as well so do not forget this! Very hot! I LOVE this!
				<br/>
				<span style={emp}>E-Mail or Skype Sessions</span> – If you cannot meet in person, we can always chat via Skype or e-mail. I have a very sexy mind and I am extremely good at exploring your wrestling fantasies with you using this virtual format. The mind is one of the sexiest parts of our bodies so these sessions can be very hot and fun! These sessions are very easy to set-up, so let’s chat!

				<TabletBreakpoint>
				<div style={divider}></div>
				</TabletBreakpoint>
				<PhoneBreakpoint>
				<div style={divider}></div>
				</PhoneBreakpoint>
			</Col>


			<img src={image1} style={image1style} className="col-md-4 col-md-offset-1 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 bannerimage"/>


			</Row>

			<div style={divider}></div>
			</div>
    );
  }
}
