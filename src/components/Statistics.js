import React from 'react';

import bgimage from '../images/vegas.jpeg';
import image1 from '../images/1.jpg';

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
			fontSize:"16px",
			lineHeight:"200%",
			letterSpacing:"1px",

		}
		const divider = {
			height:"100px",
			width:"100%",
		}

		const image1style={
			maxWidth:"750px",
		}
		const title={
			fontSize:"24px",
		}

    return (
			<div style={statscontainer}>
			<div style={divider}></div>
			<div className="row">
      <div style={stats} className="col-md-6 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
			<span style={title}>About</span>
			<br/><br/>
			<strong>Location</strong> -	West Palm Beach, Florida<br/>
			<strong>Age</strong> - 31<br/>
			<strong>Height</strong> - 5' 9''<br/>
			<strong>Weight</strong> - 140 lbs.<br/>
			<strong>Physique</strong> - Athletic<br/>
			<strong>Thighs</strong> - 27"<br/>
			<strong>Quads</strong> - 21.0”<br/>
			<strong>Calves</strong> - 13.0“<br/>
			<strong>Biceps</strong> - 11.0”<br/>
			<strong>Sponsoring Ashley Wildcat to Visit Your City</strong> - Ashley
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

			<img src={image1} style={image1style} className="col-md-3 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 bannerimage"/>


			</div>
			<div style={divider}></div>
			</div>
    );
  }
}