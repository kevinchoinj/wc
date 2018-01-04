import React from 'react';



export default class Sessions extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
      leftmarg: "",
      opacity:"0",
  	}
    this.contactformleft = this.contactformleft.bind(this)
  }

  sendmail = () => {
  fetch('/send')
    .then(res => res.json());
}

  componentDidMount() {
        window.scrollTo(0, 0);
        this.props.checkpage('contact'); 
        
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
  top:"40vh",
  color:"#000",
  opacity:this.state.opacity,
  left:this.state.leftmarg,
  fontFamily:"Lato, Helvetica",

  WebkitTransition: ".4s ease-out",
  MozTransition: ".4s ease-out",
  OTransition: ".4s ease-out",
  transition:".4s ease-out",

paddingBottom:"200px",
}
const title={
  top:"18vh",
    fontFamily:"Lato, Helvetica",
    fontWeight:"bold",
    color:"#000",
  opacity:this.state.opacity,
  left:this.state.leftmarg,
  position:"absolute",
  fontSize:"48px",
  WebkitTransition: ".4s ease-out",
  MozTransition: ".4s ease-out",
  OTransition: ".4s ease-out",
  transition:".4s ease-out",
}

const subtitle={
  top:"26vh",
    fontFamily:"Lato, Helvetica",
    fontWeight:"bold",
    color:"#000",
  opacity:this.state.opacity,
  left:this.state.leftmarg,
  position:"absolute",
  fontSize:"10px",
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
      <div style={subtitle}>
      ashleywildcat@outlook.com
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
