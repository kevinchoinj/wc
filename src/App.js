import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import './styles/columnone.css';
import './styles/customs.css';
import './styles/links.css';
import './styles/gallery.css';

import Home from './pages/Home';
import Customs from './pages/Customs';
import Gallerypage from './pages/Gallery';
import Contact from './pages/Contact';
import Links from './pages/Links';
import Sessions from './pages/Sessions';

import SessionsOnePage from './pages/SessionsOne';
import SessionsTwoPage from './pages/SessionsTwo';
import SessionsThreePage from './pages/SessionsThree';

import SessionsPanel from './components/SessionsPanel';

import Split from './sessions/Split';
import Blackbg from './components/Blackbg';
import Background from './components/Background';

import Menu from './menu/Menu';
import Triangle from './components/Triangle';

import bgvideo from './images/vegas.mp4';
import bgposter from './images/vegasimage.jpg'
import bgwebm from './images/vegaswebm.webm';

import SiteIcon from './components/SiteIcon';
import HomeOverlay from './components/HomeOverlay';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SiteIcon/>
        <div className="text_hidden">
          <strong>Ashley Wildcat</strong>
        </div>
        <Background
          bgimage={bgposter}
        >
          <video
            loop
            playsInline
            muted
            autoPlay="autoplay"
            id="iobg"
            className='video'
          >
            <source
              src={bgwebm}
              type="video/webm"
            />
            <source
              src={bgvideo}
              type="video/mp4"
              id="top-image"
            />
          </video>
        </Background>

        <Blackbg/>
        <Split />
        <Route exact path={"/sessions/:id"} children={({ match }) => (
		      <div>
		        <SessionsPanel
              isActive={Boolean(match) ? true : false}
		        />
		      </div>
		    )}/>
        <Menu/>
        <Triangle />

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/sessions" component={Sessions}/>
          <Route exact path="/sessions/1" component={SessionsOnePage}/>
          <Route exact path="/sessions/2" component={SessionsTwoPage}/>
          <Route exact path="/sessions/3" component={SessionsThreePage}/>
          <Route exact path="/kittens" component={Customs}/>
          <Route exact path="/gallery" component={Gallerypage}/>
          <Route exact path="/links" component={Links}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
        <HomeOverlay/>
      </div>
    );
  }
}
