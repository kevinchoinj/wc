import React from "react";
import {Link} from 'react-router-dom';

export default class Split extends React.Component{
  render(){
	  return(
			<div>
				<Link to='/sessions'>
					<div className="panel_close">
						<span className="panel_close__line_one"></span>
						<span className="panel_close__line_two"></span>
					</div>
				</Link>
			</div>
	  );
  }
}
