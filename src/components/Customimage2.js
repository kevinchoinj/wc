import React from 'react';


export default class Customimage extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
      hovered:false,
    }
    this.hover=this.hover.bind(this);
    this.leave=this.leave.bind(this);
  }
  hover(){
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
      height:"300px",
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
        height:"300px",
        marginBottom:"50px",
        transform: "scale(1,1)",
        WebkitTransition: ".4s ease-out",
        MozTransition: ".4s ease-out",
        OTransition: ".4s ease-out",
        transition:".4s ease-out",
      }
    }

    return(
    <div className='custom_image__short'>
      <div style={imagestyle} onMouseEnter={this.hover} onMouseLeave={this.leave}>
    </div>
    </div>
    );
  }
}
