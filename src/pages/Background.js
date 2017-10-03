import React from 'react';

import bgimage1 from '../images/vegas.jpeg';

export default class Home extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	}
  }
  render(){
		const bgimage={
			width:"100%",
			height:"100%",
			position:"fixed",

			background: 'url('+bgimage1+')',
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center top",
			backgroundSize: "cover",

		}
    return(
      <div style={bgimage}>

    </div>
    );
  }
}
