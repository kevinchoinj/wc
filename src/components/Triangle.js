import React from "react";

export default class Preload extends React.Component{

	componentDidMount(){

		}

  render(){
		const triangle={
		  position:"fixed",
		width:"150%",
		height:"150%",
		transform: "rotate(45deg)",
		backgroundColor:"rgba(175, 151, 89,1)",
		left:this.props.leftoffset,
		bottom:this.props.bottomoffset,

		WebkitTransition: ".4s ease-out",
		MozTransition: ".4s ease-out",
		OTransition: ".4s ease-out",
		transition:".4s ease-out",
		}

	  return(
      <div style={triangle}>

      </div>



	  );
  }
}
