import React from 'react';

import bgimage from '../images/vegas.jpeg';
import image1 from '../images/4.jpg';

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

			<img src={image1} style={image1style} className="col-md-3 col-md-offset-1 bannerimage"/>

      <div style={stats} className="col-md-6 col-md-offset-1">
			Special Events information
			</div>




			</div>
			<div style={divider}></div>
			</div>
    );
  }
}
