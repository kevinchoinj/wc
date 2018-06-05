import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from '../actions/pages';
import classNames from 'classnames';

class MenuButton extends React.Component{
	toggleMenu(){
		this.props.pagesActions.toggleMenu(!this.props.menuDisplayed);
	}
  render(){
		const buttonName = classNames({
      'menu_button': true,
      'menu_button--displayed': this.props.menuDisplayed,
    });

	  return(
			<div
				className={buttonName}
				onClick={()=>this.toggleMenu(this.props.menuDisplayed)}
			>
				<span className="menu_button__line_one"></span>
				<span className="menu_button__line_two"></span>
				<span className="menu_button__line_three"></span>
			</div>
	  );
  }
}

export default connect(
  (state, ownProps) => ({
    menuDisplayed:state.pages.menuDisplayed,
  }),
  dispatch => ({
    pagesActions: bindActionCreators(pagesActions, dispatch),
  }),
)(MenuButton);
