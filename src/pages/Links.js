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
				this.props.checkpage('links'); 

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
			fontSize:"18px",
			WebkitTransition: ".4s ease-out",
			MozTransition: ".4s ease-out",
			OTransition: ".4s ease-out",
			transition:".4s ease-out",
			left:this.state.leftmarg,
      letterSpacing:"1px",
      lineHeight:"200%",

			paddingBottom:"200px",
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
		  fontSize:"48px",
		  WebkitTransition: ".4s ease-out",
		  MozTransition: ".4s ease-out",
		  OTransition: ".4s ease-out",
		  transition:".4s ease-out",
		}


    return(
			<div>
			<div style={title}>Links</div>
      <div style={linkscontainer}>

			<a 
				style={linkstyle} 
				href="https://www.clips4sale.com/studio/84041/ashley-wildcat-productions" 
				target='_blank' 
				rel='noopener noreferrer'
			>
				Clips Store
			</a>
			<br/>
			<a 
				style={linkstyle}
				href="https://twitter.com/ItsAshleyWC" 
				target='_blank' 
				rel='noopener noreferrer'
			>
				Twitter
			</a>
			<br/>
			<a 
				style={linkstyle}
				href="https://www.facebook.com/ashley.wildcat.14" 
				target='_blank' 
				rel='noopener noreferrer'
			>
				Facebook
			</a>
			<br/>
			<a 
				style={linkstyle}
				href="http://www.spoilthewildcat.com" 
				target='_blank' 
				rel='noopener noreferrer'
			>
				Amazon Wishlist
			</a>
			<br/>
			<a 
				style={linkstyle}
				href="http://Cash.me/$ashleywildcat" 
				target='_blank' 
				rel='noopener noreferrer'
			>
				Payment
			</a>
			<br/>
			<a 
				style={linkstyle}
				href="http://paypal.me/ashleywildcat" 
				target='_blank' 
				rel='noopener noreferrer'
			>
				Paypal
			</a>
			<br/>
			<a 
				style={linkstyle}
				href="https://ashley.knockoutcats.com/subscribe/" 
				target='_blank' 
				rel='noopener noreferrer'
			>
				VIP Subscription
			</a>
			<br/>
			<a 
				style={linkstyle}
				href="http://ashleywildcat.isagenix.com/?sc_lang=en-US" 
				target='_blank' 
				rel='noopener noreferrer'
			>
				Fitness Coach
			</a>
			<br/>

			<a 
				style={linkstyle}
				href="http://paypal.me/ashleywildcat">I love tributes and my PayPal email is ashleywildcat@outlook.com</a>

			<br/>
    </div>
		</div>
    );
  }
}
