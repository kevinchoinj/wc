import React from 'react';

import Statistics from '../components/Statistics';
import Fightstyle from '../components/Fightstyle';
import Sessiontypes from '../components/Sessiontypes';
import Specialevents from '../components/Specialevents';

import Divider from '../components/Divider';

export default class Sessions extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
			fightstylefromright: "-100px",
			fightstyleopac: "0",

			sessionfromleft: "-100px",
			sessionopac: "0",

			specialfromright: "-100px",
			specialopac: "0",
  	}
		this.myFunction = this.myFunction.bind(this)
  }
  componentDidMount() {
      window.scrollTo(0, 0);
			window.addEventListener("scroll", this.myFunction);
			window.addEventListener("resize", this.myFunction);
			this.myFunction();
  }

	 myFunction() {
		let supportPageOffset = window.pageXOffset !== undefined;
		let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
		let scroll = {
			 x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
			 y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
		};



		if (document.getElementById("fightstyle") != null){
			if (scroll.y > document.getElementById("fightstyle").offsetTop - (window.innerHeight*.5)){
				this.setState({
					fightstylefromright: "0px",
					fightstyleopac: "1"
				});
			}
			else{
				this.setState({
					fightstylefromright: "-100px",
					fightstyleopac: "0"
				});
			}
		}

		if (document.getElementById("sessiontypes") != null){
			if (scroll.y > document.getElementById("sessiontypes").offsetTop -(window.innerHeight*.5)){
				this.setState({
					sessionfromleft: "0px",
					sessionopac: "1"
				});
			}
			else{
				this.setState({
					sessionfromleft: "-100px",
					sessionopac: "0"
				});
			}
		}

		if (document.getElementById("specialevents") != null){
			if (scroll.y > document.getElementById("specialevents").offsetTop -(window.innerHeight*.5)){
				this.setState({
					specialfromright: "0px",
					specialopac: "1",
				});
			}
			else{
				this.setState({
					specialfromright: "-100px",
					specialopac: "0",
				});
			}
		}

	}

  render(){
const sessioncontainer={
	zIndex:"1",
}

    return(
      <div style={sessioncontainer}>
	    	<Statistics/>
				<Divider/>
				<Fightstyle fromright={this.state.fightstylefromright} opac = {this.state.fightstyleopac}/>
				<Divider/>
				<Sessiontypes fromleft={this.state.sessionfromleft} opac={this.state.sessionopac}/>
				<Divider/>
				<Specialevents fromright={this.state.specialfromright} opac={this.state.specialopac}/>
	    </div>
    );
  }
}
