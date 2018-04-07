import React from 'react';
import {Link} from 'react-router-dom';

export default class Menubar extends React.Component {
  render(){
    return(
			<div className="menu_bar">
				<Link to='/' className="menu_bar__link">
					ASHLEY WILDCAT
				</Link>
			</div>
    );
  }
}
