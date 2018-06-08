import React from 'react';
import { connect } from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import classNames from 'classnames';
import Closebutton from './Closebutton';
class SessionsThree extends React.Component {
  render(){
    const threeName = classNames({
      'split_panel': true,
      'split_panel--displayed': this.props.currentPage==='sessions3',
    });
    return(
      <div className={threeName}>
        <Row className="split_panel__inner">
        <Closebutton />
          <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
            <div className="split_panel__title">
              Session Types
            </div>
            <span className="split_panel__heavy">Fantasy Role-Plays</span> – These are so much fun! Yahoo! We can get very creative here! Take your wildest wrestling fantasy and let’s make it a reality!
            <br/>
            <span className="split_panel__heavy">Semi-Competitive Wrestling Match</span> – We will each make some effort to win the match, but having fun is also a priority!!
            <br/>
            <span className="split_panel__heavy">Competitive Wrestling Match</span> – We each give 100% effort to win the match. FYI, it WILL be me so be prepared to leave your ego and pride at the door when you come to see me! Ha!
            <br/>
            <span className="split_panel__heavy">Scissoring</span> – My specialty!! You must experience this!! My figure-four, reverse head scissors and reverse head scissors are especially pleasurable and painful. These are so, so HOT and I LOVE to watch you suffer while you are trapped in my scissor holds!!
            <br/>
            <span className="split_panel__heavy">Trampling</span> – You can do more than just lust after my sexy feet. Experience how they can dominate you in so many different ways.
            <br/>
            <span className="split_panel__heavy">Kicking</span> – Oh boy, be careful with this one!
            <br/>
            <span className="split_panel__heavy">Boxing</span> – My punches are as powerful as my choke holds and scissors holds. We can go light or all out!
            <br/>
            <span className="split_panel__heavy">E-Mail or Skype Sessions</span> – If you cannot meet in person, we can always chat via Skype or e-mail. I have a very sexy mind and I am extremely good at exploring your wrestling fantasies with you using this virtual format. The mind is one of the sexiest parts of our bodies so these sessions can be very hot and fun! These sessions are very easy to set-up, so let’s chat!
          </Col>
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
  }),
)(SessionsThree);