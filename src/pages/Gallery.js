import React from 'react';
import Gallerycomp from '../gallery/Gallery';

export default class Gallerypage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.checkpage('gallery');
  }
  render(){
    return(
      <div>
        <Gallerycomp/>
      </div>
    );
  }
}
