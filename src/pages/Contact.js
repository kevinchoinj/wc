import React from 'react';

import Banner from '../components/Banner';
import Statistics from '../components/Statistics';


export default class Sessions extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
      leftmarg: "",
      opacity:"0",
  	}
    this.contactformleft = this.contactformleft.bind(this)
  }
  componentDidMount() {
        window.scrollTo(0, 0);
      	setTimeout(function() { this.setState({opacity:"1"}); }.bind(this), 450);
        window.addEventListener("resize", this.contactformleft);
        this.contactformleft();
  }

  contactformleft(){
    if (window.innerWidth >= "992"){
      this.setState({
        leftmarg:"280px",
      })
    }
    else{
      this.setState({
        leftmarg:"50px",
      })
    }

  }

  render(){
const contactcontainer={
  position:"absolute",
  top:"30vh",
  color:"#000",
  opacity:this.state.opacity,
  left:this.state.leftmarg,
  fontFamily:"Lato, Helvetica",

  WebkitTransition: ".4s ease-out",
  MozTransition: ".4s ease-out",
  OTransition: ".4s ease-out",
  transition:".4s ease-out",

}
const title={
  top:"18vh",
    fontFamily:"Lato, Helvetica",
    fontWeight:"bold",
    color:"#000",
  opacity:this.state.opacity,
  left:this.state.leftmarg,
  position:"absolute",
  fontSize:"60px",
  WebkitTransition: ".4s ease-out",
  MozTransition: ".4s ease-out",
  OTransition: ".4s ease-out",
  transition:".4s ease-out",
}


    return(
      <div>
      <div style={title}>
      Contact
      </div>

      <div style={contactcontainer}>
        <form method="POST" action="/send">
          <label>Name</label><br/>
          <input type="text" name="name"/>
          <br/>
          <label>Email</label><br/>
          <input type="text" name="email"/>
          <br/>
          <label>Subject</label><br/>
          <input type="text" name="subject"/>
          <br/>
          <label>Message</label><br/>
          <textarea cols="40" rows="5" name="message"/>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
        </div>


    </div>
    );
  }
}
