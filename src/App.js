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


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      currentpage:"",

      scrollamount:"0",
    }

    this.scroller = this.scroller.bind(this)
    this.checkpage = this.checkpage.bind(this)
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
    
    checkpage(pageName){
      this.setState({
        currentpage: pageName,
      })
    }
  pageishome(){
    
    this.setState({
      currentpage:"home"
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
        <Route exact path="/" render={(props) => 
          <Home {...props} 
            checkpage={this.checkpage}
          />} 
        />
        <Route exact path="/sessions" render={(props) => 
          <Sessionspage {...props} 
            checkpage={this.checkpage}
          />} 
        />
        <Route path="/kittens" render={(props) => 
          <Kittens {...props} 
            checkpage={this.checkpage} 
            scrollamount={this.state.scrollamount}
          />}
        />
        <Route exact path="/gallery" render={(props) => 
          <Gallerypage {...props} 
            checkpage={this.checkpage}
          />}
        />
        <Route exact path="/links" render={(props) => 
          <Links {...props} 
            checkpage={this.checkpage}
          />}
        />
        <Route exact path="/contact" render={(props) => 
          <Contact {...props} 
            checkpage={this.checkpage}
          />}
        />
      </Switch>
      </div>
    );
  }
}
