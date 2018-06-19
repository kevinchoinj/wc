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
  componentDidMount() {
    this.props.pagesActions.toggleTriangle(false);
    this.props.pagesActions.setPage('gallery');

    const scrollbar = Scrollbar.init(document.querySelector('#scroll_gallery'), {
      alwaysShowTracks: true,
      syncCallbacks: true,
    });
    scrollbar.addListener(({ offset }) => {
      this.props.scrollActions.checkScroll(offset.y);
    });
  }
  render(){
    const {
      scrollAmount,
			currentPage,
		} = this.props;

    const galleryStyle={
      marginTop: scrollAmount*(.5),
    }
    const wrapperName = classNames({
      'gallery_wrapper': true,
      'gallery_wrapper--display': currentPage === 'gallery',
    });
    return(
      <div className={wrapperName}>
        <div id="scroll_gallery" className="gallery_container">
          <CheckScrollComponent/>
          <div className="gallery_header__notice">
            Scroll &rarr;
          </div>
          <div className="gallery_header" style={galleryStyle}>
            Gallery
          </div>
          <Gallerycomp/>
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    scrollAmount: state.scroll.scrollAmount,
    currentPage: state.pages.currentPage,
  }),
  (dispatch) => ({
    pagesActions: bindActionCreators(pagesActions, dispatch),
    scrollActions: bindActionCreators(scrollActions, dispatch),
  }),
)(Gallery);
