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
		const bannercont={
			height: "100vh",
		width: "100%",
		//backgroundColor: "#141415",
		overflow:"hidden",
		}
		const banner={
      opacity: this.state.opacity,

      WebkitTransition: ".4s ease-out",
      MozTransition: ".4s ease-out",
      OTransition: ".4s ease-out",
      transition:".4s ease-out",

			height:"100%",
			//height:"calc(100vh - 270px)",
			width:"100%",
			backgroundColor:"#141415",
			position:"absolute",
			top:"0px",

			background: 'url('+bgimage+')',
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center top",
			backgroundSize: "cover",

			"backgroundAttachment":"fixed",
		}
    return (
			<div style={bannercont}>

	      <div style={banner}>
	      </div>

			</div>
    );
  }
}
