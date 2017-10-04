import React from 'react';

import bgimage from '../images/vegas.jpeg';

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
		const stats={

		}
    return (
      <div style={stats}>
			Ashley Wildcat Statistics

			Location:	West Palm
			Beach, Florida

			Age:	31

			Height:	5’ 9”

			Weight:	140 lbs.

			Physique:	Athletic

			Thighs: 27"

			Quads: 21.0”

			Calves: 13.0“
			
			Biceps: 11.0”

			Sponsoring Ashley Wildcat to Visit Your City: Ashley
			LOVES to travel so she is more than happy to make a
			special trip to see you, wherever you live, if you can help
			her with her expenses. Typically, a sponsorship would
			require coverage of Ashley's airfare, hotel accommoda-
			tions, and session fee. If you are interested in setting up
			a session, please e-mail Ashley at
			ashleywildcat@outlook.com for more information.

			Custom Video Rates: The price for producing a custom video is based on the desired length of the video, the number of wrestlers/actors needed, and the type of action/story. If you are interested in requesting a custom video, please e-mail Ashley at ashleywildcat@outlook.com for more information.
      </div>
    );
  }
}
