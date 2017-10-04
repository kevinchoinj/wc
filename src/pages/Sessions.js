import React from 'react';

import Statistics from '../components/Statistics';
import Fightstyle from '../components/Fightstyle';
import Sessiontypes from '../components/Sessiontypes';
import Specialevents from '../components/Specialevents';

import Divider from '../components/Divider';

export default class Sessions extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	}
  }
  componentDidMount() {
      window.scrollTo(0, 0);

			window.addEventListener("scroll", myFunction);


			function myFunction() {
				let supportPageOffset = window.pageXOffset !== undefined;
		    let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
		    let scroll = {
		       x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
		       y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
		    };
				console.log(scroll.y);
			}

  }
  render(){
const sessioncontainer={
	zIndex:"1",
}

    return(
      <div style={sessioncontainer}>
    	<Statistics/>
			<Divider/>
			<Fightstyle/>
			<Divider/>
			<Sessiontypes/>
			<Divider/>
			<Specialevents/>
    </div>
    );
  }
}
