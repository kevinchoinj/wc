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

function mapStateToProps(state, prop){
  return{
    triangleDisplayed: state.pages.triangleDisplayed,
  }
}

function mapDispatchToProps(dispatch){
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Triangle);