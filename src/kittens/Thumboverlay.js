import React from "react";

export default class Thumboverlay extends React.Component{
  render(){
		const overlay={
			height:this.props.thumbheight,
			background: "rgba(0,0,0,.8)",
			top:"0px",
			opacity:this.props.overlayopacity,
			WebkitTransition: ".4s ease-in-out",
			MozTransition: ".4s ease-in-out",
			OTransition: ".4s ease-in-out",
			transition:".4s ease-in-out",
			lineHeight: "140%",
			paddingTop:"15px",
			paddingLeft:"15px",
			color:"#ddd",
			fontSize:"24px",
			fontFamily:"Lato, Helvetica",
		}


	  return(

    <div className="col-md-12" style={overlay}>
		{this.props.children}
		</div>





	  );
  }
}
