import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Kittens from './pages/Kittens';
import Gallerypage from './pages/Gallery';
import Contact from './pages/Contact';
import Links from './pages/Links';
import Sessionspage from './pages/Sessionspage';

import Preload from './components/Preload';

import Sessions from './pages/Sessions';
import Blackbg from './components/Blackbg';
import Blackbgleft from './components/Blackbgleft';
import Background from './components/Background';

import Menu from './menu/Menu';
import Triangle from './components/Triangle';

import bgvideo from './images/vegas.mp4';
import bgposter from './images/vegasimage.jpg'
import bgwebm from './images/vegaswebm.webm';

import Twittercont from './twitter/Twittercont';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      currentpage:"",

      scrollamount:"0",
    }
    this.pageishome = this.pageishome.bind(this)
    this.pageissessions = this.pageissessions.bind(this)
    this.pageiskittens = this.pageiskittens.bind(this)
    this.pageisgallery = this.pageisgallery.bind(this)
    this.pageislinks = this.pageislinks.bind(this)
    this.pageiscontact = this.pageiscontact.bind(this)

    this.scroller = this.scroller.bind(this)
  }


	componentDidMount(){
		window.addEventListener("scroll", this.scroller);
		window.addEventListener("resize", this.scroller);
    this.scroller();
	}
	scroller() {
		let supportPageOffset = window.pageXOffset !== undefined;
		let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
		let scroll = {
			 x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
			 y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
		};
		this.setState({
			scrollamount:scroll.y,
		});
    }
    
  pageishome(){
    
    this.setState({
      currentpage:"home"
    })
  }
  pageissessions(){
    this.setState({
      currentpage:"sessions"
    })
  }
  pageiskittens(){
    this.setState({
      currentpage:"kittens"
    })
  }
  pageisgallery(){
    this.setState({
      currentpage:"gallery"
    })
  }
  pageislinks(){
    this.setState({
      currentpage:"links"
    })
  }
  pageiscontact(){
    this.setState({
      currentpage:"contact"
    })
  }



  render() {
    const fillimage={
      position:"fixed",
      top: "50%",
      left: "50%",
      minWidth: "100%",
      minHeight: "100%",
      width: "auto",
      height: "auto",
      zIndex: "-100",
      msTransform: "translateX(-50%) translateY(-50%)",
      MozTransform: "translateX(-50%) translateY(-50%)",
      WebkitTransform: "translateX(-50%) translateY(-50%)",
      transform: "translateX(-50%) translateY(-50%)",
      background: "url("+bgposter+") no-repeat",
      backgroundSize: "cover",
    }

    return (
      <div className="App">
     


		    <Preload/>
		      <Background
          bgimage={bgposter}
		      >
            <video loop playsInline autoPlay="autoplay"  id="iobg" poster={bgposter} style={fillimage}>
              <source src={bgwebm} type="video/webm"/>
              <source src={bgvideo} type="video/mp4" id="top-image"/>
            </video>
          </Background>
		    
     <Route exact path={"/"} children={({ match }) => (
          <Twittercont
          wrapoffset={ Boolean(match) ? '0px': '-300px'}
          />
        )}/>


      <Route path={"/kittens"} children={({ match }) => (
          <Blackbg
          offset={ Boolean(match) ? '0px': '-100vw'}
          opacity={ Boolean(match) ? '1': '0'}
          />
        )}/>


        <Route path={"/gallery"} children={({ match }) => (
          <div>
          <Blackbgleft
            offset={ Boolean(match) ? '0': '-100%'}
            opacity={ Boolean(match) ? '1': '0'}
            />
            
          </div>
        )}/>

        <Menu currentpage={this.state.currentpage}/>

        <Route path={"/links"} children={({ match }) => (
          <div>
            <Triangle
              bottomoffset={ Boolean(match) ? '-58%': '100%'}
              leftoffset = { Boolean(match) ? '-58%': '100%'}
            />
          </div>
        )}/>

        <Route path={"/contact"} children={({ match }) => (
          <div>
            <Triangle
              bottomoffset={ Boolean(match) ? '-58%': '100%'}
              leftoffset = { Boolean(match) ? '-58%': '100%'}
            />
          </div>
        )}/>

        <Route path={"/sessions"} children={({ match }) => (
          <div>
            <Sessions
            offset1={ Boolean(match) ? '0vh': '100vh'}
            disp={Boolean(match)? 'auto':'hidden'}
            pointerevs = {Boolean(match)? 'auto':'none'}
            />
          </div>
        )}/>


      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} checkpage={this.pageishome}/>} />
        <Route exact path="/sessions" render={(props) => <Sessionspage {...props} checkpage={this.pageissessions}/>} />
        <Route path="/kittens" render={(props) => <Kittens {...props} checkpage={this.pageiskittens} scrollamount={this.state.scrollamount}/>}/>
        <Route exact path="/gallery" render={(props) => <Gallerypage {...props} checkpage={this.pageisgallery}/>}/>
        <Route exact path="/links" render={(props) => <Links {...props} checkpage={this.pageislinks}/>}/>
        <Route exact path="/contact" render={(props) => <Contact {...props} checkpage={this.pageiscontact}/>}/>
      </Switch>
      </div>
    );
  }
}
