import React from 'react';

import {Row, Col} from 'react-bootstrap';

import Customimage from '../components/Customimage';
import Customimage2 from '../components/Customimage2';

import image4 from '../images/visitors/localguy.jpg';

import riotimage from '../images/visitors/riot.jpeg';
import woodyimage from '../images/visitors/woody.jpeg';
import damienimage from '../images/visitors/damien.jpeg';
import chasynimage from '../images/visitors/chasyn.jpg';

import hollywood from '../images/visitors/hollywood.jpg';

import julianova from '../images/visitors/julianova.jpg';
import lialabowe from '../images/visitors/lialabowe.jpg';

import vanessavilano from '../images/visitors/vanessavilano.jpeg';

import jan31 from '../images/visitors/jan31.jpg';
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



    return(
			<div style={wrapper}>
      <Row>
        <Col md={4} mdOffset={4} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <div className='kittens_header'>
            VISITORS
          </div>
        </Col>
      </Row>
      <Row className='kittens_body__wrapper'>


      <Col 
        md={4} 
        mdOffset={1} 
        sm={10} 
        smOffset={1} 
        xs={10} 
        xsOffset={1}
      >
       <Col 
          className='kittens_container__wide'
        >
          <div className='kittens_title'>Hollywood</div>
          <div className='kittens_subtitle'>March</div>
         <img src={hollywood} className='kittens_image_large'/>
      </Col>
      <Col 
          className='kittens_container__wide'
        >
          <div className='kittens_title'>Vanessa Vilano</div>
          <div className='kittens_subtitle'>Local</div>
         <img src={vanessavilano} className='kittens_image_large'/>
      </Col>


      </Col>

      <Col 
        md={7}
        mdOffset={0}
        sm={10}
        smOffset={1}
        xs={10}
        xsOffset={1}
        className='kittens_wrapper'
      >

        <Col 
          className='kittens_container__wide'
        >
          <div className='kittens_title'>Lia Labowe</div>
          <div className='kittens_subtitle'>March 24</div>
          <img src={lialabowe} className='kittens_image_large'/>
        </Col>


        <Col 
          className='kittens_container'
        >
          <div className='kittens_title'>Woody</div>
          <div className='kittens_subtitle'>Local</div>
          <Customimage bgimage={woodyimage} bgpos="center top"/>
        </Col>
        <Col
          className='kittens_container'
        >
          <div className='kittens_title'>Damien</div>
          <div className='kittens_subtitle'>Local-ish</div>
          <Customimage bgimage={damienimage} bgpos="left top"/>
        </Col>
        <Col
          className='kittens_container'
        >
          <div className='kittens_title'>Chasyn Rance</div>
          <div className='kittens_subtitle'>$200 Min.</div>
          <Customimage bgimage={chasynimage} bgpos="center top"/>
        </Col>

        <Col 
          className='kittens_container'
        >
        <div className='kittens_title'>Local Guy</div>
        <div className='kittens_subtitle'>Local</div>
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
