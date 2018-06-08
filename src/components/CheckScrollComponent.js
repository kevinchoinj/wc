import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as templateACtions from '../actions/template';

class CheckScrollComponent extends React.Component {
  constructor(props){
    super(props);
		this.scroller = this.scroller.bind(this)
	}
  componentDidMount(){
    this.scroller();
    document.getElementById('scroll_gallery').addEventListener("scroll", this.scroller);
    document.getElementById('scroll_gallery').addEventListener("resize", this.scroller);
  }
  scroller() {
    this.props.templateActions.checkScrollComponent(document.getElementById('scroll_gallery').scrollTop);
  }

  render(){
    return(
      <div>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
  }),
  dispatch => ({
    templateActions: bindActionCreators(templateACtions, dispatch),
  }),
)(CheckScrollComponent);