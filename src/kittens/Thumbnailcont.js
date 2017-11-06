import React from "react";
import ReactDOM from 'react-dom';
import Thumboverlay from './Thumboverlay.js';

export default class Thumbcont extends React.Component{

	constructor(props) {
	 super(props);
	 this.state = {
		 overlayopacity: "0",

		
		 fromleft: "0%",

		 contwidth: "150px",

		 opacity: "0",
		 trans3d: "translate3d(0px, 100px, 0px)",
		 trans: "translate(0px, 100px)",
		 
	 }
		this.hoverthumb = this.hoverthumb.bind(this)
		this.leavethumb = this.leavethumb.bind(this)

		this._handleWindowResize = this._handleWindowResize.bind(this);

		this.slidein=this.slidein.bind(this)
		this.trueoffset = this.trueoffset.bind(this)
 }


 componentDidMount () {
	window.addEventListener("scroll", this.slidein);
	window.addEventListener("resize", this.slidein);
	this.slidein();

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

 trueoffset( elem )
 {
		 var offsetTop = 0;
		 do {
			 if ( !isNaN( elem.offsetTop ) )
			 {
					 offsetTop += elem.offsetTop;
			 }
		 } while( elem = elem.offsetParent );
		 return offsetTop;
 }

 slidein(){
	 try{
		 if ((((this.trueoffset(this.refs.myRef)) - (window.innerHeight*.8)) < this.props.scrollamount) && (((this.trueoffset(this.refs.myRef)) + (window.innerHeight*.5))>this.props.scrollamount)){
			 this.setState({
				 opacity:"1",
				 trans3d:"translate3d(0px, 0px, 0px)",
				 trans:"translate(0px, 0px)",
			 });
		 }
		else{
			 this.setState({
				 opacity: "0",
				 trans3d: "translate3d(0px, 100px, 0px)",
				 trans: "translate(0px, 100px)",
			 });
		 }
	 }
	 catch(err) {
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

			opacity:this.state.opacity,
      MozTransition: ".6s ease-in",
      WebkitTransition: ".6s ease-in",
      OTransition: ".6s ease-in",
      transition: ".6s ease-in",
      MozTransform: this.state.trans3d,
      WebkitTransform: this.state.trans3d,
      OTransform: this.state.trans,
      MsTransform: this.state.trans,
      transform: this.state.trans3d,

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
