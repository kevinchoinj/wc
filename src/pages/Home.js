import React from 'react';

export default class Home extends React.Component {
  componentDidMount() {
    this.props.checkpage('home');
  }
  render(){
    return(
    <div>
    </div>
    );
  }
}
