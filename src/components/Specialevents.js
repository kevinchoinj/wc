import React from 'react';

import bgimage from '../images/vegas.jpeg';
import image1 from '../images/1.jpg';

export default class Specialevents extends React.Component {
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

		}
		const divider = {
			height:"100px",
			width:"100%",
		}

		const image1style={
			maxWidth:"750px",
		}

    return (
			<div style={statscontainer}>
			<div style={divider}></div>
			<div className="row">
      <div style={stats} className="col-md-6 col-md-offset-1">
			Ashley Wildcat Statistics
			<br/><br/>
			Location:	West Palm<br/>
			Beach, Florida<br/>
			Age:	31<br/>
			Height:	5’ 9”<br/>
			Weight:	140 lbs.<br/>
			Physique:	Athletic<br/>
			Thighs: 27"<br/>
			Quads: 21.0”<br/>
			Calves: 13.0“<br/>
			Biceps: 11.0”<br/>
			Sponsoring Ashley Wildcat to Visit Your City: Ashley
			LOVES to travel so she is more than happy to make a
			special trip to see you, wherever you live, if you can help
			her with her expenses. Typically, a sponsorship would
			require coverage of Ashley's airfare, hotel accommoda-
			tions, and session fee. If you are interested in setting up
			a session, please e-mail Ashley at
			ashleywildcat@outlook.com for more information.
			<br/><br/>

			Custom Video Rates: The price for producing a custom video is based on the desired length of the video, the number of wrestlers/actors needed, and the type of action/story. If you are interested in requesting a custom video, please e-mail Ashley at ashleywildcat@outlook.com for more information.
      </div>

			<img src={image1} style={image1style} className="col-md-3 col-md-offset-1 bannerimage"/>


			</div>
			<div style={divider}></div>
			</div>
    );
  }
}
