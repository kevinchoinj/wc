import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	}
  }
  componentDidMount() {
        window.scrollTo(0, 0);
        this.props.checkpage('home'); 
  }
  render(){


    return(
      
      <div>
    </div>
    );
  }
}
