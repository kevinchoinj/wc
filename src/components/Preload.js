import React from "react";

import vid1 from '../images/testvid.mp4';
import vidwebm from '../images/testvidwebm.webm';

export default class Preload extends React.Component{

	componentDidMount(){

		}

  render(){
		const vid={
			opacity:"0",
			height:"0px",
			width:"0px",
			position:"absolute",
		}

	  return(
      <div>
			<video style={vid}>
			<source src={vidwebm} type="video/webm"/>
			<source src={vid1} type="video/mp4"/>
			</video>
      </div>

	  );
  }
}
