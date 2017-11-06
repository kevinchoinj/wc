import React from 'react';
import Split from '../sessions/Split';



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

const container={
  position:"absolute",
  pointerEvents: "this.props.pointerevs",
}

    return(

      <div style={container}>
    	<Split offset1={this.props.offset1} overflowy={this.props.overflowy} pointerevs = {this.props.pointerevs}/>
    </div>
    );
  }
}
