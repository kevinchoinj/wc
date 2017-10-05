import React from "react";

import vid1 from '../images/testvid.mp4';


export default class Preload extends React.Component{

	componentDidMount(){

		}

  render(){
		const vid={
			display:"none",
		}

	  return(
      <div>
			<video loop src={vid1} style={vid}></video>
      </div>

	  );
  }
}
