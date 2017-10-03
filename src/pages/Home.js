import React from 'react';

import Background from './Background';

export default class Home extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	}
  }
  componentDidMount() {
        window.scrollTo(0, 0)
  }
  render(){


    return(
      <div>
			<Background/>
    	Homepage
    </div>
    );
  }
}
