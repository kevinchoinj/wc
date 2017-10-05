import React from 'react';


export default class Links extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
			opacity:"0",
			leftmarg:""
  	}
		this.linksfromleft = this.linksfromleft.bind(this)
  }
  componentDidMount() {
        window.scrollTo(0, 0);
				window.addEventListener("resize", this.linksfromleft);
				this.linksfromleft();
				setTimeout(function() { this.setState({opacity:"1"}); }.bind(this), 450);
  }

	linksfromleft(){
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

		const linkscontainer={
			position:"absolute",
			opacity:this.state.opacity,
			top:"30vh",
			fontFamily:"Lato, Helvetica",
			fontWeight:"bold",
			color:"#000",
			fontSize:"24px",
			WebkitTransition: ".4s ease-out",
			MozTransition: ".4s ease-out",
			OTransition: ".4s ease-out",
			transition:".4s ease-out",
			left:this.state.leftmarg,
		}
		const linkstyle={
			color:"#000",
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
			<div style={title}>Links</div>
      <div style={linkscontainer}>

			<a style={linkstyle} href="http://www.ashleysclips.com">Clips Store</a><br/>
			<a style={linkstyle} href="https://twitter.com/ItsAshleyWC">Twitter</a><br/>
			<a style={linkstyle} href="https://www.facebook.com/ashley.wildcat.14">Facebook</a><br/>
			<a style={linkstyle} href="https://www.youtube.com/channel/UCcNGFr3c0Ru2i2Q1H4McIsg">Youtube</a><br/>
			<a style={linkstyle} href="http://www.spoilthewildcat.com">Amazon Wishlist</a><br/>
			<a style={linkstyle} href="Cash.me/$ashleywildcat">Payment</a><br/>
			<a style={linkstyle} href="paypal.me/ashleywildcat">Paypal</a><br/>
			<a style={linkstyle} href="https://ashley.knockoutcats.com/subscribe/">VIP Subscription</a><br/>
    </div>
		</div>
    );
  }
}
