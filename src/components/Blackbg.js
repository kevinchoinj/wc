import React from 'react';

export default class Blackbg extends React.Component {
  constructor(props) {
	 super(props);
	 this.state = {
		 transitiontime:".6s ease-out"
	 }
	 this.bgresize=this.bgresize.bind(this)
	 this.restoretrans = this.debounce(this.restoretrans.bind(this), 100);
	 this.debounce = this.debounce.bind(this)
 }
  /*fades in the banner*/

	componentDidMount(){
		window.addEventListener("resize", this.bgresize);
	}
	bgresize(){
		this.setState({
			transitiontime:"0s"
		}, () => {
			this.restoretrans();
	});
	}
	/*when resizing the window, the transition time is 0s so the blackbg doesn't bounce around, then it is set back to 600ms with a debounce so there is delay*/

	restoretrans(){
		this.setState({
			transitiontime:".6s ease-out"
		})
	}
	debounce(a,b,c){var d,e;return function(){function h(){d=null,c||(e=a.apply(f,g))}var f=this,g=arguments;return clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e}}
	

  render() {

	

		const banner={
			width:"100vw",
			height:"calc(100vh - 75px)",
			top:"75px",
			backgroundColor: "rgba(0,0,0,.85)",
			position:"fixed",
			right:this.props.offset,
			WebkitTransition: this.state.transitiontime,
			MozTransition: this.state.transitiontime,
			OTransition: this.state.transitiontime,
			transition:this.state.transitiontime,
			opacity:this.props.opacity,
		}


    return (
			<div>

	      <div style={banner}>
	      </div>
			</div>

    );
  }
}
