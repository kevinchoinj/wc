import React from 'react';

import bgimage from '../images/vegas.jpeg';
import image1 from '../images/3.jpg';

import DesktopBreakpoint from '../responsive/desktop_breakpoint.js';
import TabletBreakpoint from '../responsive/tablet_breakpoint.js';
import PhoneBreakpoint from '../responsive/phone_breakpoint.js';

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
				<div className="row" >
	      	<div style={stats} className="col-md-5 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1" id="statistics">
						<span style={title}><span style={emp}>Stats</span></span>
						<br/><br/><br/>
						<span style={emp}>Location</span> -	West Palm Beach, Florida<br/>
						<span style={emp}>Age</span> - 31<br/>
						<span style={emp}>Height</span> - 5' 9''<br/>
						<span style={emp}>Weight</span> - 140 lbs.<br/>
						<span style={emp}>Physique</span> - Athletic<br/>
						<span style={emp}>Thighs</span> - 27"<br/>
						<span style={emp}>Quads</span> - 21.0”<br/>
						<span style={emp}>Calves</span> - 13.0“<br/>
						<span style={emp}>Biceps</span> - 11.0”<br/>
						<br/>
						<span style={emp}>Sponsoring Ashley Wildcat to Visit Your City</span>
						- Ashley LOVES to travel so she is more than happy to make a
						special trip to see you, wherever you live, if you can help
						her with her expenses. Typically, a sponsorship would
						require coverage of Ashley's airfare, hotel accommodations, and session fee. If you are interested in setting up
						a session, please e-mail Ashley at
						ashleywildcat@outlook.com for more information.
						<br/><br/>
						<span style={emp}>Custom Video Rates</span> - The price for producing a custom video is based on the desired length of the video, the number of wrestlers/actors needed, and the type of action/story. If you are interested in requesting a custom video, please e-mail Ashley at ashleywildcat@outlook.com for more information.
						<TabletBreakpoint>
						<div style={divider}></div>
						</TabletBreakpoint>
						<PhoneBreakpoint>
						<div style={divider}></div>
						</PhoneBreakpoint>
					</div>
					<img src={image1} style={image1style} className="col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 bannerimage"/>
				</div>
				<div style={divider}></div>
			</div>
    );
  }
}
