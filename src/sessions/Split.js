import React from "react";
import Column from './Column';
import Panel from './Panel';

import {Col, Row} from 'react-bootstrap';

import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import image1 from '../images/7.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/6.jpg';
import image4 from '../images/5.jpg';


export default class Split extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
	 }
	}

  render(){

const splitcontainer={
	position:"fixed",
	top:"75px",
	height:"calc(100vh - 75px)",
	width:"100vw",
	overflowY:this.props.overflowy,
	pointerEvents:this.props.pointerevs,
}

const emp={
	fontWeight:"bold",
	color: "#af9759",
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

	top:"35px",
}
const title={
	fontSize:"40px",
	color: "#af9759",
}
const pointerevents={
	pointerEvents:this.props.pointerevs,
}

	  return(

				<div style={splitcontainer}>
					<Row style={pointerevents}>
						<Link to='/sessions/1'>
							<Column bgimage={image1} offset1={this.props.offset1} timing=".4s ease-out">
							Statistics
							</Column>
						</Link>

						<Link to='/sessions/2'>
							<Column bgimage={image2} offset1={this.props.offset1} timing=".6s ease-out">
							Fighting Style
							</Column>
						</Link>

						<Link to='/sessions/3'>
						<Column bgimage={image3} offset1={this.props.offset1} timing=".8s ease-out">
						Session Types
						</Column>
						</Link>



						<Route path={"/sessions/1"} children={({ match }) => (
		          <div>
		            <Panel
									leftOffset={ Boolean(match) ? '0': '-100%'}
									opacity={ Boolean(match) ? '1': '0'}
		            >
								<Row>
					      	<Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1} style={stats}>
										<span style={title}><span style={emp}>Stats</span></span>
										<br/><br/><br/>
										<span style={emp}>Location</span> -	West Palm Beach, Florida<br/>
										<span style={emp}>Age</span> - 31<br/>
										<span style={emp}>Height</span> - 5' 9"<br/>
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
										<br/>
										$100 minimum on all sessions. A deposit of $100 is required.
									</Col>
								</Row>
								</Panel>
		          </div>
		        )}/>

						<Route path={"/sessions/2"} children={({ match }) => (
		          <div>
		            <Panel
									leftOffset={ Boolean(match) ? '0': '-100%'}
									opacity={ Boolean(match) ? '1': '0'}
		            >
								<Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1} style={stats}>
								<span style={title}><strong>Fighting Style</strong></span>
								<br/><br/><br/>
								My formal training is based on a hybrid of pro-wrestling and Brazilian jiu-jitsu. This makes me a sexy, but VERY dominant and lethal fighting machine! A lot of people ask me how I became interested in wrestling. Well, about two years ago, a personal acquaintance who was a wrestling coach, suggested that I might like wrestling and that I should give it a try. Well, I did, and I IMMEDIATELY fell in LOVE with it!! YAHOO!! To me, there is NOTHING that turns me on more than getting my paws on an opponent and COMPLETELY dominating him or her. I have an EXTREMELY dominant personality, so wrestling is my absolute FAVORITE activity for satisfying my need to “own” and control others, especially YOU!
								<br/><br/>
								My head scissors holds have become legendary. Scissor holds are my absolute FAVORITE - just talking about them makes me want to throw you to the mat and apply one of my Ashley Anaconda head scissors that will have you tapping out in a matter of seconds. Don’t think that a hot woman like me could do this to you? Maybe you aren’t convinced that I can squeeze and dominate you like an Anaconda does with its prey in the wild?? I am also known for my facesitting and smothering techniques. I don’t want to sound arrogant, but I have a PERFECT ass that I GUARANTEE you will fantasize about as you watch my videos and view images of me on this site. I will be using it to COMPLETELY, and I do mean COMPLETELY smother you When you are the victim of my facesitting hold, you will love the sensation., but also terrified when you realize that there is no escape Talk about Hot! Whew! I LOVE it.
								<br/><br/>
								There is so, so much more than I can do in a session with you whether you want to do fantasy role-playing, a semi-competitive or a full-competitive match! While I LOVE doing fantasy role-plays, I can and will do full competitive matches. Again, don’t underestimate me as I will take tremendous pleasure in physically and psychologically (I LOVE to trash talk) defeating any challengers, male or female!
								<br/><br/>
								I am happy to work with you to ensure that every session with me is the most mind-blowing, fantasy-fulfilling experience you have ever had. Please check out the list below that shows examples of the types of sessions that I can do with you. If you don’t see what you are interested in, contact me and I will work with you to try to make it work! A session with me is an unforgettable experience. Let’s make this happen. I promise you won’t be sorry you did. MeOW!! Ashleywildcat@outlook.com
								<br/><br/>
								Ashley
								<br/>
								XOXOXO!!
								</Col>
								</Panel>
		          </div>
		        )}/>

						<Route path={"/sessions/3"} children={({ match }) => (
		          <div>
		            <Panel
									leftOffset={ Boolean(match) ? '0': '-100%'}
									opacity={ Boolean(match) ? '1': '0'}
		            >
								<Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1} style={stats}>

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
									<span style={emp}>Kicking</span> – Oh boy, be careful with this one!
									<br/>
									<span style={emp}>Boxing</span> – My punches are as powerful as my choke holds and scissors holds. We can go light or all out!
									<br/>
						
									<span style={emp}>E-Mail or Skype Sessions</span> – If you cannot meet in person, we can always chat via Skype or e-mail. I have a very sexy mind and I am extremely good at exploring your wrestling fantasies with you using this virtual format. The mind is one of the sexiest parts of our bodies so these sessions can be very hot and fun! These sessions are very easy to set-up, so let’s chat!

								</Col>
								</Panel>
		          </div>
		        )}/>

					


					</Row>
				</div>
	  );
  }
}
