import React from 'react';


import posterimage from '../images/banner2.jpg';
import vidoutput from '../images/testvid.mp4';
import vidwebm from '../images/testvidwebm.webm';

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
   setTimeout(function() { this.setState({opacity:"1"}); }.bind(this), 600);
	}


  render() {
		const bannercont={
			height:"calc(100vh - 75px)",
			width:"100vw",

		}
		const banner={
      opacity: this.state.opacity,
      WebkitTransition: ".4s ease-out",
      MozTransition: ".4s ease-out",
      OTransition: ".4s ease-out",
      transition:".4s ease-out",
			position:"absolute",
			top:"75px",
			//height:"calc(100vh - 270px)",
			height:"calc(100vh - 225px)",
			overflowY: "hidden",
			width:"100%",


			"backgroundAttachment":"fixed",
		}
		const underbanner={
			fontSize:"48px",
			bottom:"50px",
			position:"absolute",
			color: "#af9759",
			fontFamily: "Lato, Helvetica",
			opacity:this.state.opacity,
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
			top:"0px",
		}

    return (
			<div style={bannercont}>
	      <div style={banner}>
				<video loop playsInline autoPlay="autoplay"  id="iobg" poster={posterimage} style={fillimage}>
          <source src={vidwebm} type="video/webm"/>
          <source src={vidoutput} type="video/mp4"/>
        </video>
			</div>
			<Col style={underbanner} md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
				Meet the Kittens!
				<img src={arrow} style={arrowstyle}/>
			</Col>
			</div>
    );
  }
}
