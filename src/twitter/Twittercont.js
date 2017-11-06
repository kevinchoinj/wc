import React from 'react';
import {Col} from 'react-bootstrap';

import Tweetobject from './Tweetobject';
import Twitterbutton from './Twitterbutton';

export default class Twittercont extends React.Component{
  constructor(props){
    super(props);
    this.state={
      twitt: [
        {key:'0', value:{"text":"", "created_at":"", retweeted_status: {created_at:""}}, extended_entities:{media:[{media_url: ""}]}}, 
        {key:'1', value:{"text":"", "created_at":"", retweeted_status: {created_at:""}}, extended_entities:{media:[{media_url: ""}]}}, 
        {key:'2', value:{"text":"", "created_at":"", retweeted_status: {created_at:""}}, extended_entities:{media:[{media_url: ""}]}}, 
        {key:'3', value:{"text":"", "created_at":"", retweeted_status: {created_at:""}}, extended_entities:{media:[{media_url: ""}]}}, 
        {key:'4', value:{"text":"", "created_at":"", retweeted_status: {created_at:""}}, extended_entities:{media:[{media_url: ""}]}}, 
        {key:'5', value:{"text":"", "created_at":"", retweeted_status: {created_at:""}}, extended_entities:{media:[{media_url: ""}]}}, 
      ],

      offset:"-300px",
    }
    this.toggletwitter = this.toggletwitter.bind(this)
  }

  componentDidMount() {
    this.twitteroutput();
  }

  twitteroutput = () => {
    fetch('/api/twitter')
      .then(res => res.json())
      .then(twitt => this.setState({ twitt }))
  }

  toggletwitter(){
    if (this.state.offset === "0px"){
      this.setState({
        offset:"-300px",
      })
    }
    else{
      this.setState({
        offset:"0px",
      })
    }
  }

  render(){
    const { twitt } = this.state;

    const twittercontainer={
      position:"relative",
      height:"calc(100vh - 75px)",
      top:"75px",
      width:"300px",
      right:this.state.offset,
      
      bottom:"10vh",
      backgroundColor:"rgba(175,151,89,.8)",
      paddingTop:"60px",
      overflow:"auto",
      minWidth:"250px",

      WebkitTransition: ".4s ease-out",
      MozTransition: ".4s ease-out",
      OTransition: ".4s ease-out",
      transition:".4s ease-out",
      WebkitOverflowScrolling:"touch",
    }
    const tweet={
      marginBottom:"50px",
    }
    const twitterimage={
      width:"100%",
    }
    const wrapper={
      width:"300px",
      height:"100vh",
      top:"0px",
      right:this.props.wrapoffset,
      position:"absolute",
      WebkitTransition: ".4s ease-out",
      MozTransition: ".4s ease-out",
      OTransition: ".4s ease-out",
      transition:".4s ease-out",
    }

    const fullwrap={
      height:"100vh",
      width:"100vw",
      position:"absolute",
      left:"0px",
      top:"0px",
      overflow:"hidden",
    }
    return(
      <div style={fullwrap}>
      <div style={wrapper}>
      <Twitterbutton toggler={this.toggletwitter} offset={this.state.offset}/>
      <div style={twittercontainer}>
      
        {twitt.length ? (
          <div onClick={this.twitteroutput}>
            <Tweetobject twitt={this.state.twitt} number="0"/>
            <Tweetobject twitt={this.state.twitt} number="1"/>
            <Tweetobject twitt={this.state.twitt} number="2"/>
            <Tweetobject twitt={this.state.twitt} number="3"/>
            <Tweetobject twitt={this.state.twitt} number="4"/>
            <Tweetobject twitt={this.state.twitt} number="5"/>
          </div>
          )
          :
          (
          <div>
          </div>
          )}

      </div>
      </div>
      </div>
    )
  }
}