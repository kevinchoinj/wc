import React from 'react';

export default class Blackbg extends React.Component {
  constructor(props) {
	 super(props);
	 this.state = {
	 }
 }
  /*fades in the banner*/

  render() {

		const banner={
			width:"100%",
			height:"100%",
			//height:"calc(100vh - 270px)",
			width:"100%",
			backgroundColor: "rgba(0,0,0,.95)",
			position:"fixed",
			top:"0px",
			top:this.props.bottomOffset,
			WebkitTransition: ".4s ease-out",
			MozTransition: ".4s ease-out",
			OTransition: ".4s ease-out",
			transition:".4s ease-out",
		}
    return (
	      <div style={banner}>
	      </div>

    );
  }
}
