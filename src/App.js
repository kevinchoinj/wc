import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Menu from './menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/projects" component={Home}/>
        <Route exact path="/gaming" component={Home}/>
        <Route exact path="/resume" component={Home}/>
        <Route exact path="/recent" component={Home}/>
      </Switch>
      </div>
    );
  }
}

export default App;
