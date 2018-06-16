import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

class BlackBgTransition extends React.Component {

  render() {
		const backgroundName = classNames({
      'black_background': true,
			'black_background--displayed': this.props.currentPage==='gallery',
      'black_background--scrolled': this.props.scrollAmount > window.innerHeight,
      'black_background--scrolledmore': this.props.scrollAmount > window.innerHeight*2,
		});
    return (
			<div className={backgroundName}>
			</div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    currentPage: state.pages.currentPage,
    scrollAmount: state.scroll.scrollAmount,
  }),
  dispatch => ({
  }),
)(BlackBgTransition);