import React from 'react';

import Banner from '../components/Banner';
import Statistics from '../components/Statistics';


export default class Sessions extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
      leftmarg: "",
  	}
    this.contactformleft = this.contactformleft.bind(this)
  }
  componentDidMount() {
        window.scrollTo(0, 0);
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

  left:this.state.leftmarg,
  fontFamily:"Lato, Helvetica",
}
const triangle={
  position:"fixed",
width:"150%",
height:"150%",
transform: "rotate(45deg)",
backgroundColor:"rgba(175, 151, 89,1)",
left:"-58%",
bottom:"-58%",
}

    return(
      <div>
      <div style={triangle}>
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
