import React from 'react';
import Gallerycomp from '../gallery/Gallery';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from '../actions/pages';
import * as scrollActions from '../actions/scroll';
import CheckScrollComponent from '../components/CheckScrollComponent';
import classNames from 'classnames';
import Scrollbar from 'smooth-scrollbar';

class Gallery extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			opacity: "0",
		}
	}
  componentDidMount() {
    this.props.pagesActions.toggleTriangle(false);
    this.props.pagesActions.setPage('gallery');
    setTimeout(function() { this.setState({opacity:"1"}); }.bind(this), 400);

    const scrollbar = Scrollbar.init(document.querySelector('#scroll_gallery'), {
      alwaysShowTracks: true,
      syncCallbacks: true,
    });
    scrollbar.addListener(({ offset }) => {
      this.props.scrollActions.checkScroll(offset.y);
    });
  }
  render(){
    const galleryStyle={
      marginTop: this.props.scrollAmount*(.5),
    }
    const headerName = classNames({
      'gallery_header': true,
      'gallery_header--scrolled': this.props.scrollAmount > window.innerHeight,
    });
    const galleryContainerStyle={
			opacity: this.state.opacity,
		}
    return(
      <div id="scroll_gallery" style={galleryContainerStyle}>
        <CheckScrollComponent/>
        <div className="gallery_header__notice">
          Scroll &rarr;
        </div>
        <div className={headerName} style={galleryStyle}>
          Gallery
        </div>
        <Gallerycomp/>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    scrollAmount: state.scroll.scrollAmount,
  }),
  (dispatch) => ({
    pagesActions: bindActionCreators(pagesActions, dispatch),
    scrollActions: bindActionCreators(scrollActions, dispatch),
  }),
)(Gallery);
