import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

class Blackbg extends React.Component {
  render() {
    const {
			currentPage,
    } = this.props;

		const backgroundName = classNames({
      'black_background': true,
      'black_background--displayed': currentPage==='kittens' ||
      this.props.currentPage==='gallery' ,
    });

    return (
			<div className={backgroundName}/>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    currentPage: state.pages.currentPage,
  }),
  dispatch => ({
  }),
)(Blackbg);