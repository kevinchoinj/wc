import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from '../actions/pages';

import {Row} from 'react-bootstrap';
import Custom from '../components/Custom';
import image4 from '../images/visitors/localguy.jpg';
import woodyimage from '../images/visitors/woody.jpeg';
import damienimage from '../images/visitors/damien.jpeg';
import chasynimage from '../images/visitors/chasyn.jpg';
import salina from '../images/visitors/salina.jpg';
import vanessavilano from '../images/visitors/vanessavilano.jpeg';

import madisonswan from '../images/visitors/madisonswan.jpg';
import bellaink from '../images/visitors/bellaink.png';

import Scrollbar from 'smooth-scrollbar';

class Customs extends React.Component {
  constructor(props){
    super(props);
    this.state={
      opacity:"0",
    }
  }
  componentDidMount(){
    this.props.pagesActions.toggleTriangle(false);
    this.props.pagesActions.setPage('kittens');
    setTimeout(function() { this.setState({opacity:"1"}); }.bind(this), 300);

    Scrollbar.init(document.querySelector('#scroll_customs'), {
      alwaysShowTracks: true,
      syncCallbacks: true,
    });
  }
  render(){
    const wrapper={
      opacity:this.state.opacity,
      position:"absolute",
      top: "0px",
      marginTop:"75px",
      width:"100vw",
      height:"calc(100vh - 75px)",
      WebkitTransition: ".4s ease-out",
		  MozTransition: ".4s ease-out",
		  OTransition: ".4s ease-out",
		  transition:".4s ease-out",
    }

    return(
			<div style={wrapper} id="scroll_customs">
      <Row className='kittens_body__wrapper'>

        <div className="custom_all">
        {/*
          <div className="temp_image_container">
            <div className="temp_image_header">
              Upcoming Visitors
            </div>
            <img src={image1} className="temp_image1" alt=""/>
            <img src={image2} className="temp_image2" alt=""/>
          </div>
        */}
          <Custom
            image={madisonswan}
            title="Madison Swan"
            subtitle="July 15"
            position="center top"
          />
          <Custom
            image={bellaink}
            title="Bella Ink"
            subtitle="August"
            position="center top"
          />
          <Custom
            image={salina}
            title="Salina De La Renta"
            subtitle="Local"
            position="center top"
          />
          <Custom
            image={vanessavilano}
            title="Vanessa Vilano"
            subtitle="Local"
            position="center top"
          />
          <Custom
            image={chasynimage}
            title="Chasyn Rance"
            subtitle="Local"
            position="$200 Minimum"
          />
          <Custom
            image={image4}
            title="Local Guy"
            subtitle="Local"
            position="center top"
          />
          <Custom
            image={woodyimage}
            title="Woody"
            subtitle="Local"
            position="center top"
          />
          <Custom
            image={damienimage}
            title="Damien"
            subtitle="Local"
            position="left top"
          />
        </div>
      </Row>
		</div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    currentPage: state.pages.currentPage,
  }),
  dispatch => ({
    pagesActions: bindActionCreators(pagesActions, dispatch),
  }),
)(Customs);
