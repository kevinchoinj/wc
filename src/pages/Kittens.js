import React from 'react';
import Split from '../sessions/Split';

export default class Kittens extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	}
  }
  componentDidMount() {
        window.scrollTo(0, 0)
  }
  render(){

const container={
  position:"absolute",
}

    return(
      <div style={container}>
      asdf
    	<Split/>
    </div>
    );
  }
}
