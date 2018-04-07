import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

class Blackbg extends React.Component {

  render() {
		const backgroundName = classNames({
      'black_background': true,
			'black_background--displayed':
			(this.props.currentPage==='kittens')
			|| (this.props.currentPage==='gallery'),
		});
    return (
			<div className={backgroundName}>
			</div>
    );
  }
}

function mapStateToProps(state, prop){
  return{
    currentPage: state.pages.currentPage,
  }
}

function mapDispatchToProps(dispatch){
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blackbg);