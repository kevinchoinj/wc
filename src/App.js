import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Sessions from './pages/Sessions';

import Blackbg from './components/Blackbg';
import Background from './components/Background';
import bgimage1 from './images/vegas.jpeg';
import bgimage2 from './images/rain.jpg';

import Menu from './menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Route exact path={"/"} children={({ match }) => (
		      <div>
		        <Background
            bgimage={bgimage1}
		          bottomOffset={ Boolean(match) ? '0': '-100%'}
		        />
		      </div>
		    )}/>

        <Route exact path={"/sessions"} children={({ match }) => (
  		      <div>

  		        <Background
              bgimage={bgimage2}
  		          bottomOffset={ Boolean(match) ? '0': '-100%'}
  		        />
              <Blackbg
                bottomOffset={ Boolean(match) ? '0': '-100%'}/>
  		      </div>
  		    )}/>

      <Menu/>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/sessions" component={Sessions}/>
        <Route exact path="/kittens" component={Home}/>
        <Route exact path="/contact" component={Home}/>
        <Route exact path="/gallery" component={Home}/>
      </Switch>
      </div>
    );
  }
}

export default App;
