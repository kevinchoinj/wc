import React from 'react';


export default class Home extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
      hovered:false,
    }
    this.hover=this.hover.bind(this);
    this.leave=this.leave.bind(this);
  }
  hover(){
    console.log("asdf");
    this.setState({
      hovered:true,
      
    })
  }
  leave(){
    this.setState({
      hovered:false,
    })
  }
  render(){
    var imagestyle={

    }
    if (this.state.hovered){
     imagestyle={
      width:"100%",
      background: 'url('+this.props.bgimage+')',
      backgroundRepeat: "no-repeat",
      backgroundPosition: this.props.bgpos,
      backgroundSize: "cover",
      height:"600px",
      marginBottom:"50px",
      transform: "scale(1.1,1.1)",
      WebkitTransition: ".4s ease-out",
		  MozTransition: ".4s ease-out",
		  OTransition: ".4s ease-out",
		  transition:".4s ease-out",
    }
    }
    else{
     imagestyle={
        width:"100%",
        background: 'url('+this.props.bgimage+')',
        backgroundRepeat: "no-repeat",
        backgroundPosition: this.props.bgpos,
        backgroundSize: "cover",
        height:"600px",
        marginBottom:"50px",
        transform: "scale(1,1)",
        WebkitTransition: ".4s ease-out",
        MozTransition: ".4s ease-out",
        OTransition: ".4s ease-out",
        transition:".4s ease-out",
      }
    }

    const outer={
      width:"100%",
      height:"600px",
      overflow:"hidden",
    }
    return(
      <div style={outer}>
      <div style={imagestyle} onMouseEnter={this.hover} onMouseLeave={this.leave}>
    </div>
    </div>
    );
  }
}
