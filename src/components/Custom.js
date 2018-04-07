import React from 'react';
import {Col} from 'react-bootstrap';

export default class Custom extends React.Component {
  render() {
    const imageStyle={
      backgroundImage: 'url('+this.props.image+')',
      backgroundPosition: this.props.position,
    }
    return (
      <Col
        md={4} mdOffset={0}
        sm={6} smOffset={0}
        xs={10} xsOffset={1}
        className="custom_wrapper"
      >
        <div className="custom_subwrapper">
          <div className="custom_title">
            {this.props.title}
          </div>
          <div className="custom_subtitle">
            {this.props.subtitle}
          </div>
          <div
            className="custom_container"
          >
            <div
              className="custom_image"
              style={imageStyle}
            >
            </div>
          </div>
        </div>
      </Col>
    );
  }
}
