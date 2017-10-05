import React from 'react';


export default class Kittens extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	}
  }
  componentDidMount() {
        window.scrollTo(0, 0);
  }



  render(){

    return(
			<div>
		    Kittens
		</div>
    );
  }
}
