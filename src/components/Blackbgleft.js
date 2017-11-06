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
			width:"100vw",
			height:"calc(100vh - 75px)",
			top:"75px",
			backgroundColor: "rgba(0,0,0,.85)",
			position:"fixed",
			left:this.props.offset,
			WebkitTransition: ".6s ease-out",
			MozTransition: ".6s ease-out",
			OTransition: ".6s ease-out",
			transition:".6s ease-out",
			opacity:this.props.opacity,
		}


    return (
			<div>

	      <div style={banner}>
	      </div>
			</div>

    );
  }
}
