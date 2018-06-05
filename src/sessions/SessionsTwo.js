import React from 'react';
import { connect } from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import classNames from 'classnames';
import Closebutton from './Closebutton';
class SessionsTwo extends React.Component {
  render(){
    const twoName = classNames({
      'split_panel': true,
      'split_panel--displayed': this.props.currentPage==='sessions2',
    });

    return(
    <div className={twoName}>
      <Row className="split_panel__inner">
        <Closebutton />
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <div className="split_panel__title">
            Fighting Style
          </div>
          My formal training is based on a hybrid of pro-wrestling and Brazilian jiu-jitsu.
          This makes me a sexy, but VERY dominant and lethal fighting machine!
           A lot of people ask me how I became interested in wrestling.
           Well, about two years ago, a personal acquaintance who was a wrestling coach,
           suggested that I might like wrestling and that I should give it a try. Well,
           I did, and I IMMEDIATELY fell in LOVE with it!! YAHOO!! To me, there is NOTHING that
           turns me on more than getting my paws on an opponent and COMPLETELY dominating him or her.
           I have an EXTREMELY dominant personality, so wrestling is my absolute FAVORITE activity
           for satisfying my need to “own” and control others, especially YOU!
          <br/><br/>
          My head scissors holds have become legendary.
          Scissor holds are my absolute FAVORITE - just talking about them makes me want to
          throw you to the mat and apply one of my Ashley Anaconda head scissors that will have you
          tapping out in a matter of seconds. Don’t think that a hot woman like me could do this to you?
          Maybe you aren’t convinced that I can squeeze and dominate you like an Anaconda does with its prey in the wild??
          <br/><br/>
          There is so, so much more than I can do in a session with you whether you want to do fantasy role-playing,
          a semi-competitive or a full-competitive match! While I LOVE doing fantasy role-plays, I can and will do full
          competitive matches. Again, don’t underestimate me as I will take tremendous pleasure in physically and
          psychologically (I LOVE to trash talk) defeating any challengers, male or female!
          <br/><br/>
          I am happy to work with you to ensure that every session with me is the
          most mind-blowing, fantasy-fulfilling experience you have ever had.
          A session with me is an
          unforgettable experience. Let’s make this happen. I promise you won’t be sorry you did. MeOW!! Ashleywildcat@outlook.com
          <br/><br/>
          Ashley
          <br/>
          XOXOXO!!
        </Col>
      </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(SessionsTwo);