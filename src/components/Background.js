import React from 'react';


export default class Home extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	}
  }
  render(){
		const bgimage={
			width:"100%",
			height:"100%",
			position:"fixed",

			top:this.props.bottomOffset,
			background: 'url('+this.props.bgimage+')',
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center top",
			backgroundSize: "cover",
			WebkitTransition: ".4s ease-out",
      MozTransition: ".4s ease-out",
      OTransition: ".4s ease-out",
      transition:".4s ease-out",
		}
    return(
      <div style={bgimage}>
      {this.props.children}
    </div>
    );
  }
}
