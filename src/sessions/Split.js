import React from "react";
import Column from './Column';
import { connect } from 'react-redux';

import {Link} from 'react-router-dom';

import image1 from '../images/7.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/6.jpg';

import classNames from 'classnames';

class Split extends React.Component{
  render(){
		const containerName = classNames({
      'split_container': true,
			'split_container--displayed':
			(this.props.currentPage==='sessions')
			|| (this.props.currentPage==='sessions1')
			|| (this.props.currentPage==='sessions2')
			|| (this.props.currentPage==='sessions3'),
		});

	  return(
			<div className={containerName}>
					<Link to="/sessions/1">
						<Column
							bgimage={image1}
							offset1={this.props.offset1}
							timing=".4s ease-out"
						>
						Statistics
						</Column>
					</Link>

					<Link to="/sessions/2">
						<Column
							bgimage={image2}
							offset1={this.props.offset1}
							timing=".6s ease-out"
						>
						Fighting Style
						</Column>
					</Link>

					<Link to="/sessions/3">
						<Column
							bgimage={image3}
							offset1={this.props.offset1}
							timing=".8s ease-out"
						>
						Session Types
						</Column>
					</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Split);