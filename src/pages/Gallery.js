import React from 'react';
import Gallerycomp from '../gallery/Gallery';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from '../actions/pages';

class Gallery extends React.Component {
  componentDidMount() {
    this.props.pagesActions.toggleTriangle(false);
    this.props.pagesActions.setPage('gallery');
  }
  render(){
    return(
      <div>
        <Gallerycomp/>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  (dispatch) => ({pagesActions: bindActionCreators(pagesActions, dispatch)}),
)(Gallery);
