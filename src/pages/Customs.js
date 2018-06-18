import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from '../actions/pages';

import Custom from '../components/Custom';
import image4 from '../images/visitors/localguy.jpg';
import woodyimage from '../images/visitors/woody.jpeg';
import damienimage from '../images/visitors/damien.jpg';
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

    const imageValues = [
      {title: 'Madison Swan', subtitle: 'July 15', image: madisonswan},
      {title: 'Bella Ink', subtitle: 'August', image: bellaink},
      {title: 'Salina De La Renta', subtitle: 'Local', image: salina},
      {title: 'Vanessa Vilano', subtitle: 'Local', image: vanessavilano},
      {title: 'Chasyn Rance', subtitle: '$200 Minimum', image: chasynimage},
      {title: 'Local Guy', subtitle: 'Local', image: image4},
      {title: 'Woody', subtitle: 'Local', image: woodyimage},
      {title: 'Damien', subtitle: 'Local', image: damienimage},
    ]

    return(
			<div style={wrapper} id="scroll_customs">
        <div className='kittens_body__wrapper'>
          <div className="custom_all">
            {imageValues.map((value, index)=>(
              <span key={index}>
                <Custom
                  image={value.image}
                  title={value.title}
                  subtitle={value.subtitle}
                  position="center top"
                />
              </span>
            ))}
          </div>
        </div>
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
