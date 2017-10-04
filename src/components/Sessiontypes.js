import React from 'react';

import bgimage from '../images/vegas.jpeg';
import image1 from '../images/1.jpg';

export default class Sessiontypes extends React.Component {
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
			Session Types
	<br/><br/>
	Fantasy Role-Plays – These are so much fun! Yahoo! We can get very creative here! Take your wildest wrestling fantasy and let’s make it a reality!
		<br/><br/>
	Semi-Competitive Wrestling Match – We will each make some effort to win the match, but having fun is also a priority!!
		<br/><br/>
	Competitive Wrestling Match – We each give 100% effort to win the match. FYI, it WILL be me so be prepared to leave your ego and pride at the door when you come to see me! Ha!
	<br/><br/>
Scissoring – My specialty!! You must experience this!! My figure-four, reverse head scissors and reverse head scissors are especially pleasurable and painful. These are so, so HOT and I LOVE to watch you suffer while you are trapped in my scissor holds!!
	<br/><br/>
Trampling – You can do more than just lust after my sexy feet. Experience how they can dominate you in so many different ways.
	<br/><br/>
Kicking – Oh boy, be careful with this one! My Hapkido instructors constantly tell me how incredibly powerful my kicks are when I am in class. Scared? You should be… Don’t worry, I won’t hurt you too badly.
Boxing – My punches are as powerful as my choke holds and scissors holds. We can go light or all out!
	<br/><br/>
Muscle/Body Worship – Have the honor and privilege of massaging the feet that kick you or the legs that crush you? I am a Goddess as well so do not forget this! Very hot! I LOVE this!
	<br/><br/>
E-Mail or Skype Sessions – If you cannot meet in person, we can always chat via Skype or e-mail. I have a very sexy mind and I am extremely good at exploring your wrestling fantasies with you using this virtual format. The mind is one of the sexiest parts of our bodies so these sessions can be very hot and fun! These sessions are very easy to set-up, so let’s chat!
</div>

			<img src={image1} style={image1style} className="col-md-3 col-md-offset-1 bannerimage"/>


			</div>
			<div style={divider}></div>
			</div>
    );
  }
}
