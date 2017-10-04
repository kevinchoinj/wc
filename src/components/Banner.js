import React from 'react';

import posterimage from '../images/posterimage.jpg';
import vidoutput from '../images/testvid.mp4';

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
		const bannercont={
			height:"100vh",
			width:"100vw",

		}
		const banner={
      opacity: this.state.opacity,
			top:"75px",
      WebkitTransition: ".4s ease-out",
      MozTransition: ".4s ease-out",
      OTransition: ".4s ease-out",
      transition:".4s ease-out",
			position:"absolute",
			//height:"calc(100vh - 270px)",
			height:"calc(100vh - 225px)",
			overflowY: "hidden",
			width:"100%",


			"backgroundAttachment":"fixed",
		}
		const underbanner={
			fontSize:"48px",
			color:"#fff",
			bottom:"50px",
			position:"absolute",
			color: "#af9759",
			fontFamily: "Lato, Helvetica",
		}

		const fillimage={
			position:"absolute",
			width:"100%",

		}
    return (
			<div style={bannercont}>
	      <div style={banner}>
				<video loop src={vidoutput} autoPlay="autoplay"  id="iobg" poster={posterimage} style={fillimage}></video>
			</div>
			<div style={underbanner} className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
				Session Information
			</div>
			</div>
    );
  }
}
