import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from '../actions/pages';

class Sessions extends React.Component {
  componentDidMount() {
    this.props.pagesActions.toggleTriangle(false);
    this.props.pagesActions.setPage('sessions');
  }
  render(){
    return(
    <div>
    </div>
    );
  }
}

export default connect(
  () => ({}),
  (dispatch) => ({pagesActions: bindActionCreators(pagesActions, dispatch)}),
)(Sessions);
