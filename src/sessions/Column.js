import React from "react";
import {Col} from 'react-bootstrap';

export default class Split extends React.Component{
  render(){
	const colstyle={
		WebkitTransition: this.props.timing,
		MozTransition: this.props.timing,
		OTransition: this.props.timing,
		transition:this.props.timing,
		bottom:this.props.offset1,
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
				onMouseEnter={this.hoverthumb}
				onMouseLeave={this.leavethumb}
				className='sessions_column'
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
