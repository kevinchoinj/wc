import React from "react";
import ReactDOM from 'react-dom';
import Thumboverlay from './Thumboverlay.js';

export default class Thumbcont extends React.Component{

	constructor(props) {
	 super(props);
	 this.state = {
		 overlayopacity: "0",

		 opacity: "1",
		 fromleft: "0%",

		 contwidth: "150px",
	 }
		this.hoverthumb = this.hoverthumb.bind(this)
		this.leavethumb = this.leavethumb.bind(this)

		this._handleWindowResize = this._handleWindowResize.bind(this);
 }


 componentDidMount () {
   window.addEventListener('resize', this._handleWindowResize);
	 this.setState({
		 contwidth: ReactDOM.findDOMNode(this._containerTarget).offsetWidth
	 });
 }

 _handleWindowResize () {
	  if (this.refs.myRef) {
     this.setState({
       contwidth: ReactDOM.findDOMNode(this._containerTarget).offsetWidth
     });
	 }
 }


 hoverthumb(){
 		this.setState({
 			 overlayopacity: "1",
 		});
 }
 leavethumb(){
		 this.setState({
				overlayopacity: "0",
		 });
 }

/* componentDidMount() {
	setTimeout(function() { this.setState({opacity: 1, fromleft: "0px"}); }.bind(this), this.props.interval);
}*/

 componentWillUnmount() {
 }

  render(){

		const thumbcont={
			height:this.state.contwidth,
			width: "100%",
			overflowX:"hidden",
			overflowY:"hidden",
			background: 'url('+this.props.bgimage+')',
			backgroundRepeat: "no-repeat",
			backgroundPosition: "right top",
			backgroundSize: "cover",

			opacity:this.state.opacity,
			marginLeft:this.state.fromleft,

			/*WebkitTransition: ".4s ease-in-out",
			MozTransition: ".4s ease-in-out",
			OTransition: ".4s ease-in-out",
			transition:".4s ease-in-out",*/

		}

	  return(
			<div className="col-md-3 col-xs-6" ref="myRef">
		    <div style={thumbcont}
				onMouseEnter = {this.hoverthumb}
				onMouseLeave={this.leavethumb}
				className="thumbcont"
				ref={node => {
		 // this callback executes before componentDidMount
				 if (node !== null) {
					 this._containerTarget = node;

				 }
			 }}
				>
					<Thumboverlay
						overlayopacity= {this.state.overlayopacity}
						thumbheight={this.state.contwidth}
					>
					{this.props.children}
					</Thumboverlay>
				</div>

			</div>
	  );
  }
}
