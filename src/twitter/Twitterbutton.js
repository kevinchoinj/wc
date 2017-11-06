import React from 'react';

import twittericon from '../images/goldtwitter.png';

export default class Twitterbutton extends React.Component{
  constructor(props){
    super(props);
    this.state={
      spin: "rotate(0)",
    }
    this.hovered=this.hovered.bind(this)
    this.left = this.left.bind(this)
  }

  hovered(){
    this.setState({
      spin:"rotate(360deg)"
    })
  }

  left(){
    this.setState({
      spin:"rotate(0)"
    })
  }

  render(){
    const bg={
      height:"35px",
      width:"35px",
      position:"absolute",
      top:"80px",
      right:"25px",
      cursor:"pointer",
      zIndex:"10",
    }

    const iconstyle={
      background: 'url('+twittericon+')',
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center top",
      backgroundSize: "cover",
      width:"100%",
      height:"100%",
    }

    const line1={
			height: "3px",
			width: "32px",
			position: "absolute",
			backgroundColor: "#000",
			WebkitTransform: "rotate(45deg)",
			MozTransform: "rotate(45deg)",
			OTransform: "rotate(45deg)",
			transform: "rotate(45deg)",
    }
    const line2={
			height: "3px",
			width: "32px",
			position: "absolute",
			backgroundColor: "#000",
			WebkitTransform: "rotate(-45deg)",
			MozTransform: "rotate(-45deg)",
			OTransform: "rotate(-45deg)",
			transform: "rotate(-45deg)",
    }

    const spinner={
      WebkitTransform: this.state.spin,
			MozTransform: this.state.spin,
			OTransform: this.state.spin,
      transform: this.state.spin,
      WebkitTransition: ".4s ease-out",
      MozTransition: ".4s ease-out",
      OTransition: ".4s ease-out",
      transition:".4s ease-out",
      marginTop:"25px",
    }
    return(
      <div style={bg} onClick={this.props.toggler} onMouseEnter={this.hovered} onMouseLeave={this.left}>
      {this.props.offset ==="0px"?
      <div style={spinner}>
        <span style={line1}></span>
        <span style={line2}></span>
      </div>
      :
      <div style={iconstyle}>
      </div>
      }

      </div>
    )
  }
}