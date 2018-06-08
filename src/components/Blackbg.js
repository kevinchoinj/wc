import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

class Blackbg extends React.Component {

  render() {
		const backgroundName = classNames({
      'black_background': true,
			'black_background--displayed': this.props.currentPage==='kittens',
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
  }),
  dispatch => ({
  }),
)(Blackbg);