import React from 'react';
import Divide from '../images/divider.png';

export default class Blackbg extends React.Component {
  constructor(props) {
	 super(props);
	 this.state = {
	 }
 }
  /*fades in the banner*/

  render() {

		const dividecontainer={

		}
		const divimage={
			position:"absolute",
			left: "50%",
			transform: "translate(-50%, 0)",
			width:"50%",
			maxWidth:"700px",
		}


    return (
	      <div style={dividecontainer}>
				<img src={Divide} style={divimage}/>
	      </div>

    );
  }
}
