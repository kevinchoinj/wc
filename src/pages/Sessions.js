import React from 'react';

import Background from '../components/Background';
import Blackbg from '../components/Blackbg';
import Banner from '../components/Banner';
import Statistics from '../components/Statistics';
import bgimage1 from '../images/rain.jpg';

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
    </div>
    );
  }
}
