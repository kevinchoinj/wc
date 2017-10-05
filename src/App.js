import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Sessions from './pages/Sessions';
import Kittens from './pages/Kittens';
import Gallerypage from './pages/Gallery';
import Contact from './pages/Contact';

import Preload from './components/Preload';

import Blackbg from './components/Blackbg';
import Background from './components/Background';

import bgimage1 from './images/vegas.jpeg';
import bgimage3 from './images/rain.jpg';
import bgimage2 from './images/beach.jpeg';
import bgimage4 from './images/city.jpeg';
import bgimage5 from './images/city2.jpeg';

import Menu from './menu/Menu';
import Triangle from './components/Triangle';

import bgvideo from './images/vegas.mp4';
import bgposter from './images/vegasimage.jpg'

class App extends Component {
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
      <Route exact path={"/"} children={({ match }) => (
		      <div>
		        <Background
            bgimage={bgposter}
		          bottomOffset={ Boolean(match) ? '0': '-100%'}
		        >
            <video loop src={bgvideo} autoPlay="autoplay"  id="iobg" poster={bgposter} style={fillimage}></video>
            </Background>
		      </div>
		    )}/>

        <Route path={"/sessions"} children={({ match }) => (
  		      <div>

  		        <Background
              bgimage={bgimage2}
  		          bottomOffset={ Boolean(match) ? '0': '-100%'}
  		        />
              <Blackbg
                bottomOffset={ Boolean(match) ? '0': '-100%'}/>
  		      </div>
  		    )}/>

          <Route path={"/kittens"} children={({ match }) => (
                        <div>

                          <Background
                          bgimage={bgimage3}
                            bottomOffset={ Boolean(match) ? '0': '-100%'}
                          />
                          <Blackbg
                            bottomOffset={ Boolean(match) ? '0': '-100%'}/>
                        </div>
          )}/>
          <Route path={"/gallery"} children={({ match }) => (
          <div>

            <Background
            bgimage={bgimage4}
              bottomOffset={ Boolean(match) ? '0': '-100%'}
            />
            <Blackbg
              bottomOffset={ Boolean(match) ? '0': '-100%'}/>
          </div>
          )}/>

          <Route path={"/contact"} children={({ match }) => (
              <div>

                <Background
                bgimage={bgimage5}
                  bottomOffset={ Boolean(match) ? '0': '-100%'}
                />
                <Blackbg
                  bottomOffset={ Boolean(match) ? '0': '-100%'}/>
              </div>
            )}/>

      <Menu/>

      <Route path={"/contact"} children={({ match }) => (
          <div>
            <Triangle
              bottomoffset={ Boolean(match) ? '-58%': '100%'}
              leftoffset = { Boolean(match) ? '-58%': '100%'}
            />
          </div>
        )}/>



      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/sessions" component={Sessions}/>
        <Route path="/kittens" component={Kittens}/>
        <Route exact path="/gallery" component={Gallerypage}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
      </div>
    );
  }
}

export default App;
