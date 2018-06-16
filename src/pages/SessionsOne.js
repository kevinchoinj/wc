import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from '../actions/pages';

class SessionsOne extends React.Component {
  componentDidMount() {
    this.props.pagesActions.toggleTriangle(false);
    this.props.pagesActions.setPage('sessions1');
  }
  render(){
    return null;
  }
}

export default connect(
  () => ({}),
  (dispatch) => ({pagesActions: bindActionCreators(pagesActions, dispatch)}),
)(SessionsOne);
