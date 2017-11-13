import React from 'react';

import {Row, Col} from 'react-bootstrap';

import Customimage from '../components/Customimage';

import image2 from '../images/visitors/constance.png';
import image3 from '../images/visitors/scorpion.jpg';
import image4 from '../images/visitors/localguy.jpg';

import riotimage from '../images/visitors/riot.jpeg';
import woodyimage from '../images/visitors/woody.jpeg';
import damienimage from '../images/visitors/damien.jpeg';
import chasynimage from '../images/visitors/chasyn.jpg';

export default class Kittens extends React.Component {
constructor(props){
  super(props);
  this.state={
    opacity:"0",
  }
}
componentDidMount(){
  window.scrollTo(0, 0);
  this.props.checkpage('kittens'); 

  setTimeout(function() { this.setState({opacity:"1"}); }.bind(this), 300);
}
  render(){

    const wrapper={
      opacity:this.state.opacity,
      position:"absolute",
      marginTop:"100px",
      width:"100vw",
      height:"calc(100vh - 100px)",

      WebkitTransition: ".4s ease-out",
		  MozTransition: ".4s ease-out",
		  OTransition: ".4s ease-out",
		  transition:".4s ease-out",
    }
    const title={
      width:"100%",
      textAlign:"center",
      color:"#af9759",
      fontSize:"24px",
      letterSpacing:"5px",
      whiteSpace: "nowrap",
    }
    const bodywrapper={
      marginTop:"50px",
    }

    return(
			<div style={wrapper}>
      <Row>
        <Col md={4} mdOffset={4} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <div style={title}>VISITORS</div>
        </Col>
      </Row>
      <Row style={bodywrapper}>


      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Col md={3} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
          <div style={title}>Riot</div>
          <div style={title}>November 8</div>
          <Customimage bgimage={riotimage} bgpos="left top"/>
          </Col>

          <Col md={3} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
          <div style={title}>Woody</div>
          <div style={title}>Local</div>
          <Customimage bgimage={woodyimage} bgpos="center top"/>
          </Col>
          <Col md={3} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
          <div style={title}>Damien</div>
          <div style={title}>Local-ish</div>
          <Customimage bgimage={damienimage} bgpos="left top"/>
          </Col>
          <Col md={3} mdOffset={0} sm={6} smOffset={0} xs={12} xsOffset={0}>
          <div style={title}>Chasyn Rance</div>
          <div style={title}>$200 Min.</div>
          <Customimage bgimage={chasynimage} bgpos="center top"/>
          </Col>
        </Col>



      {/*three images*/}
       <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Col md={4} mdOffset={0} sm={4} smOffset={0} xs={12} xsOffset={0}>
          <div style={title}>Constance</div>
          <div style={title}>November 10</div>
          <a href="https://twitter.com/modelconstance1"><Customimage bgimage={image2} bgpos="right top"/></a>
          </Col>

          <Col md={4} mdOffset={0} sm={4} smOffset={0} xs={12} xsOffset={0}>
          <div style={title}>Miss Scorpion</div>
          <div style={title}>November</div>
          <a href="http://www.missscorpion.com/"><Customimage bgimage={image3} bgpos="right top"/></a>
          </Col>

          <Col md={4} mdOffset={0} sm={4} smOffset={0} xs={12} xsOffset={0}>
          <div style={title}>Local Guy</div>
          <div style={title}>Local</div>
          <Customimage bgimage={image4} bgpos="right top"/>
          </Col>
    </Col>


        {/* two images*/}
        {/*
        <Col md={3} mdOffset={2} sm={6} smOffset={0} xs={10} xsOffset={1}>
        <div style={title}>Chloe Cummings</div>
        <div style={title}>November 4</div>
        <div style={visitorimage1}></div>
        
        </Col>
        <Col md={3} mdOffset={2} sm={6} smOffset={0} xs={10} xsOffset={1}>
        <div style={title}>Constance</div>
        <div style={title}>November 10</div>
        <div style={visitorimage2}></div>
        </Col>
        */}
      </Row>
		</div>
    );
  }
}
