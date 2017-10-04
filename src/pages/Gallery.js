import React from 'react';

import Banner from '../components/Banner';
import Statistics from '../components/Statistics';

export default class Gallery extends React.Component {
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
