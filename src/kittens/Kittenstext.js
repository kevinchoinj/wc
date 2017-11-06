import React from "react";
import {Col} from 'react-bootstrap';

export default class Kittenstext extends React.Component{

	constructor(props) {
  	super(props);
  	this.state = {
      opac: "0",
  	}
    this.showtext = this.showtext.bind(this)
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.showtext);
    window.addEventListener("resize", this.showtext);
    this.showtext();
  }

  showtext() {
   try{
     if (this.props.scrollamount > this.refs.textarea.offsetTop - (window.innerHeight*.7)){
       this.setState({
         opac:"1",

       });
     }
     else{
       this.setState({
         opac: "0",
       });
     }
   }
	 catch(err){

	 }
 }




  render(){
		const textcontainer={
				fontFamily:"Lato, Helvetica",
				color:"#af9759",
				fontSize:"18px",
				lineHeight:"150%",
				letterSpacing:"1px",
      
				marginBottom:"200px",
        opacity:this.state.opac,
        WebkitTransition: ".4s ease-out",
        MozTransition: ".4s ease-out",
        OTransition: ".4s ease-out",
        transition:".4s ease-out",
		}



		const title={
			fontSize:"48px",
		}


	  return(

				<div ref="textarea">
    <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1} style={textcontainer}>

		</Col>
		</div>





	  );
  }
}
