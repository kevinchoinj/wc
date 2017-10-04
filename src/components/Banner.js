import React from 'react';

import bgimage from '../images/vegas.jpeg';
import vidoutput from '../images/testvideo.mp4';
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

		const banner={
      opacity: this.state.opacity,

      WebkitTransition: ".4s ease-out",
      MozTransition: ".4s ease-out",
      OTransition: ".4s ease-out",
      transition:".4s ease-out",

			//height:"calc(100vh - 270px)",
			width:"100%",
			position:"absolute",
			backgroundColor:"#141415",
			top:"0px",

			background: 'url('+bgimage+')',
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center top",
			backgroundSize: "cover",

			"backgroundAttachment":"fixed",
		}

		const fillimage={
			width:"100%",
		}
    return (

	      <div style={banner}>
				<video loop src={vidoutput} autoPlay="autoplay"  id="iobg" style={fillimage}></video>


			</div>
    );
  }
}
