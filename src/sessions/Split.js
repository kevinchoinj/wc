import React from "react";
import Column from './Column';
import Panel from './Panel';

import {Col, Row} from 'react-bootstrap';

import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

import image1 from '../images/3.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/1.jpg';
import image4 from '../images/4.jpg';


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
	height:"calc(100% - 75px)",
	width:"100%",
	backgroundColor:"#fff",
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
}
const title={
	fontSize:"40px",
	color: "#af9759",
}

	  return(

				<div style={splitcontainer}>
					<Row>
						<Link to='/kittens/1'>
							<Column bgimage={image1}>
							Statistics
							</Column>
						</Link>

						<Link to='/kittens/2'>
							<Column bgimage={image2}>
							Fighting Style
							</Column>
						</Link>

						<Link to='/kittens/3'>
						<Column bgimage={image3}>
						Session Types
						</Column>
						</Link>

						<Link to='/kittens/4'>
						<Column bgimage={image4}>
						Special Events
						</Column>
						</Link>


						<Route path={"/kittens/1"} children={({ match }) => (
		          <div>
		            <Panel
		              leftOffset={ Boolean(match) ? '0': '-100%'}
		            >
								<Row>
					      	<Col md={5} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1} id="statistics" style={stats}>
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

									</Col>
								</Row>
								</Panel>
		          </div>
		        )}/>

						<Route path={"/kittens/2"} children={({ match }) => (
		          <div>
		            <Panel
		              leftOffset={ Boolean(match) ? '0': '-100%'}
		            >
								Fighting Style<br/>
								<Link to='/kittens'>Close panel</Link>
								</Panel>
		          </div>
		        )}/>

						<Route path={"/kittens/3"} children={({ match }) => (
		          <div>
		            <Panel
		              leftOffset={ Boolean(match) ? '0': '-100%'}
		            >
								Session Types<br/>
								<Link to='/kittens'>Close panel</Link>
								</Panel>
		          </div>
		        )}/>

						<Route path={"/kittens/4"} children={({ match }) => (
							<div>
								<Panel
									leftOffset={ Boolean(match) ? '0': '-100%'}
								>
								Special Events<br/>
								<Link to='/kittens'>Close panel</Link>
								</Panel>
							</div>
						)}/>





					</Row>
				</div>
	  );
  }
}
