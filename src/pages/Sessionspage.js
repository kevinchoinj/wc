import React from 'react';

export default class Sessionspage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.checkpage('sessions');
  }
  render(){
    return(
      <div>
      </div>
    );
  }
}
