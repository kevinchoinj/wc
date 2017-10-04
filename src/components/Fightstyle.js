import React from 'react';

import bgimage from '../images/vegas.jpeg';
import image2 from '../images/2.jpg';

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
			paddingLeft:"50px",
		}
		const divider = {
			height:"100px",
			width:"100%",
		}

		const image1style={
			maxWidth:"750px",
		}
		const title={
			fontSize:"40px",
			color: "#af9759",
		}
    return (
			<div style={statscontainer}>
			<div style={divider}></div>
			<div className="row">


			<img src={image2} style={image1style} className="col-md-3 col-md-offset-2 bannerimage"/>

			<div style={stats} className="col-md-5 col-md-offset-1">
			<span style={title}><strong>Fighting Style</strong></span>
			<br/><br/><br/>
			My formal training is based on a hybrid of pro-wrestling, Brazilian jiu-jitsu, and Hapkido. This makes me a sexy, but VERY dominant and lethal fighting machine! A lot of people ask me how I became interested in wrestling. Well, about two years ago, a personal acquaintance who was a wrestling coach, suggested that I might like wrestling and that I should give it a try. Well, I did, and I IMMEDIATELY fell in LOVE with it!! YAHOO!! To me, there is NOTHING that turns me on more than getting my paws on an opponent and COMPLETELY dominating him or her. I have an EXTREMELY dominant personality, so wrestling is my absolute FAVORITE activity for satisfying my need to “own” and control others, especially YOU!
			<br/><br/>
			My head scissors holds have become legendary (see the Testimonials section for more on this from my previous “prey”). Scissor holds are my absolute FAVORITE - just talking about them makes me want to throw you to the mat and apply one of my Ashley Anaconda head scissors that will have you tapping out in a matter of seconds. Don’t think that a hot woman like me could do this to you? Maybe you aren’t convinced that I can squeeze and dominate you like an Anaconda does with its prey in the wild?? I am also known for my facesitting and smothering techniques. I don’t want to sound arrogant, but I have a PERFECT ass that I GUARANTEE you will fantasize about as you watch my videos and view images of me on this site. I will be using it to COMPLETELY, and I do mean COMPLETELY smother you When you are the victim of my facesitting hold, you will love the sensation., but also terrified when you realize that there is no escape Talk about Hot! Whew! I LOVE it.
			<br/><br/>
			There is so, so much more than I can do in a session with you whether you want to do fantasy role-playing, a semi-competitive or a full-competitive match! While I LOVE doing fantasy role-plays, I can and will do full competitive matches. Again, don’t underestimate me as I will take tremendous pleasure in physically and psychologically (I LOVE to trash talk) defeating any challengers, male or female!
			<br/><br/>
			I am happy to work with you to ensure that every session with me is the most mind-blowing, fantasy-fulfilling experience you have ever had. Please check out the list below that shows examples of the types of sessions that I can do with you. If you don’t see what you are interested in, contact me and I will work with you to try to make it work! A session with me is an unforgettable experience. Let’s make this happen. I promise you won’t be sorry you did. MeOW!! Ashleywildcat@outlook.com
			<br/><br/>
			Ashley
			<br/>
			XOXOXO!!
      </div>

			</div>
			<div style={divider}></div>
			</div>
    );
  }
}
