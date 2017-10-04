import React from 'react';

import Statistics from '../components/Statistics';
import Fightstyle from '../components/Fightstyle';
import Sessiontypes from '../components/Sessiontypes';
import Specialevents from '../components/Specialevents';

export default class Sessions extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	}
  }
  componentDidMount() {
        window.scrollTo(0, 0)
  }
  render(){
const sessioncontainer={
	zIndex:"1",
}

    return(
      <div style={sessioncontainer}>
    	<Statistics/>
			<Fightstyle/>
			<Sessiontypes/>
			<Specialevents/>
    </div>
    );
  }
}
