import React from "react";
import {Col} from 'react-bootstrap';
import classNames from 'classnames';
import { connect } from 'react-redux';

class Column extends React.Component{
  render(){
		const columnName = classNames({
      'sessions_column': true,
			'sessions_column--displayed':
				(this.props.currentPage==='sessions')
				|| (this.props.currentPage==='sessions1')
				|| (this.props.currentPage==='sessions2')
				|| (this.props.currentPage==='sessions3'),
		});

	const colstyle={
		WebkitTransition: this.props.timing,
		MozTransition: this.props.timing,
		OTransition: this.props.timing,
		transition:this.props.timing,
	}
	const inner={
		backgroundImage: 'url('+this.props.bgimage+')',
	}
	  return(
			<Col
				md={4}
				sm={4}
				xs={12}
				style={colstyle}
				className={columnName}
			>
				<div
					style={inner}
					className='sessions_column_inner'
				>
				</div>
				<div className="split_overlay">
					{this.props.children}
				</div>
			</Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(Column);