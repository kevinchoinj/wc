import React from "react";

import Menubutton from './Menubutton.js';
import Menupanel from './Menupanel.js';
import Menubar from './Menubar.js';

export default class Menu extends React.Component{
  render(){
	  return(
			<div>
				<Menubar/>
				<Menubutton/>
				<Menupanel/>
			</div>
	  );
  }
}
