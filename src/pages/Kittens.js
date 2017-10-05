import React from 'react';
import Banner from '../components/Banner';
import {Col} from 'react-bootstrap';

import Thumbwrap from '../kittens/Thumbwrapper';
import Kittenstext from '../kittens/Kittenstext';


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
		   <Banner/>
       <Thumbwrap/>
       <Kittenstext/>

		</div>
    );
  }
}
