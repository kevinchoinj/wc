import React from 'react';

import Gallerycomp from '../gallery/Gallery';

export default class Gallerypage extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	}
  }
  componentDidMount() {
        window.scrollTo(0, 0);
        this.props.checkpage(); 
  }
  render(){


    return(
      <div>

    	<Gallerycomp/>
    </div>
    );
  }
}
