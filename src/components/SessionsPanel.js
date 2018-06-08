import React from 'react';
import { connect } from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import classNames from 'classnames';
import Closebutton from '../sessions/Closebutton';

import SessionsOneText from '../sessions/SessionsOneText';
import SessionsTwoText from '../sessions/SessionsTwoText';
import SessionsThreeText from '../sessions/SessionsThreeText';


const InnerTextDisplay = ({
  currentPage
  }) => {
  if (currentPage==="sessions1"){
    return (
      <SessionsOneText/>
    )
  }
  else if (currentPage==="sessions2"){
    return (
      <SessionsTwoText/>
    );
  }
  else if (currentPage==="sessions3"){
    return (
      <SessionsThreeText/>
    )
  }
  else {
    return null;
  }
};

class SessionsPanel extends React.Component {
  render(){
    const {
      currentPage
    } = this.props;

    const panelName = classNames({
      'split_panel': true,
      'split_panel--displayed': this.props.isActive,
    });

    return(
    <div className={panelName}>
      <Row className="split_panel__inner">
        <Closebutton />
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <InnerTextDisplay
            currentPage={currentPage}
          />
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
)(SessionsPanel);