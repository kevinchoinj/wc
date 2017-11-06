import React from 'react';

export default class Kittens extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {

  	}
		this.myFunction = this.myFunction.bind(this)
  }
  componentDidMount() {
      window.scrollTo(0, 0);
			window.addEventListener("scroll", this.myFunction);
			window.addEventListener("resize", this.myFunction);
			this.myFunction();
  }
	componentWillUnmount(){
		window.removeEventListener("scroll", this.myFunction);
		window.removeEventListener("resize", this.myFunction);
	}


	 myFunction() {
		let supportPageOffset = window.pageXOffset !== undefined;
		let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
		let scroll = {
			 x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
			 y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
		};

		if (document.getElementById("statistics") != null){
			if (scroll.y > document.getElementById("statistics").offsetTop - (window.innerHeight*.8)){
				this.setState({

				});
			}
			else{
				this.setState({

				});
			}
		}

	}

  render(){


    return(
      <div>

	    </div>
    );
  }
}
