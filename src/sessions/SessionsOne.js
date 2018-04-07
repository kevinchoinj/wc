import React from 'react';
import { connect } from 'react-redux';
import {Col} from 'react-bootstrap';
import classNames from 'classnames';
import Closebutton from './Closebutton';

class SessionsOne extends React.Component {
  render(){
    const oneName = classNames({
      'split_panel': true,
      'split_panel--displayed': this.props.currentPage==='sessions1',
    });
    return(
    <div className={oneName}>
      <Closebutton />
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <div className="split_panel__title">
          Stats
        </div>
        <span className="split_panel__heavy">Location</span> -	West Palm Beach, Florida<br/>
        <span className="split_panel__heavy">Age</span> - 31<br/>
        <span className="split_panel__heavy">Height</span> - 5' 9"<br/>
        <span className="split_panel__heavy">Weight</span> - 140 lbs.<br/>
        <span className="split_panel__heavy">Physique</span> - Athletic<br/>
        <span className="split_panel__heavy">Thighs</span> - 27"<br/>
        <span className="split_panel__heavy">Quads</span> - 21.0”<br/>
        <span className="split_panel__heavy">Calves</span> - 13.0“<br/>
        <span className="split_panel__heavy">Biceps</span> - 11.0”<br/>
        <br/>
        <span className="split_panel__heavy">Sponsoring Ashley Wildcat to Visit Your City</span>
        - Ashley LOVES to travel so she is more than happy to make a
        special trip to see you, wherever you live, if you can help
        her with her expenses. Typically, a sponsorship would
        require coverage of Ashley's airfare, hotel accommodations, and session fee. If you are interested in setting up
        a session, please e-mail Ashley at
        ashleywildcat@outlook.com for more information.
        <br/><br/>
        <span className="split_panel__heavy">Custom Video Rates</span> - The price for producing a custom video is based on the desired length of the video, the number of wrestlers/actors needed, and the type of action/story. If you are interested in requesting a custom video, please e-mail Ashley at ashleywildcat@outlook.com for more information.
        <br/>
        $100 minimum on all sessions. A deposit of $100 is required.
      </Col>
    </div>
    );
  }
}

function mapStateToProps(state, prop){
  return{
    currentPage: state.pages.currentPage,
  }
}

function mapDispatchToProps(dispatch){
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionsOne);
