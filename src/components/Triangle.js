import React from "react";
import {connect} from 'react-redux';
import classNames from 'classnames';

class Triangle extends React.Component{
  render(){
		const triangleName = classNames({
      'triangle': true,
      'triangle--displayed': this.props.triangleDisplayed,
    });

	  return(
      <div className={triangleName}>
      </div>
	  );
  }
}

export default connect(
  (state, ownProps) => ({
    triangleDisplayed: state.pages.triangleDisplayed,
  }),
  dispatch => ({
  }),
)(Triangle);