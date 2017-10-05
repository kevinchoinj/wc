import React from "react";
import Column from './Column';
import Panel from './Panel';

import {Col, Row} from 'react-bootstrap';

import {Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

import image1 from '../images/3.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/1.jpg';
import image4 from '../images/4.jpg';

export default class Split extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
	 }
	}

  render(){

const splitcontainer={
	position:"fixed",
	top:"75px",
	height:"calc(100% - 75px)",
	width:"100%",
	backgroundColor:"#fff",
}


	  return(

				<div style={splitcontainer}>
					<Row>
						<Link to='/kittens/1'>
							<Column bgimage={image1}/>
						</Link>
						<Column bgimage={image2}/>
						<Column bgimage={image3}/>
						<Column bgimage={image4}/>
						<Route path={"/kittens/1"} children={({ match }) => (
		          <div>
		            <Panel
		              leftOffset={ Boolean(match) ? '0': '-100%'}
		            >
								Panel text<br/>
								<Link to='/kittens'>Close panel</Link>
								</Panel>
		          </div>
		        )}/>


					</Row>
				</div>
	  );
  }
}
