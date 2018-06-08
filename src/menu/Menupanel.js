import React from "react";
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as pagesActions from '../actions/pages';

var FontAwesome = require('react-fontawesome');

class MenuPanel extends React.Component{
  closeMenu = () => {
    this.props.pagesActions.toggleMenu(false);
  }
  render(){
		const panelName = classNames({
      'menu': true,
      'menu--displayed': this.props.menuDisplayed,
    });
    const homeName = classNames({
      'menu_select': true,
      'menu_select--selected': this.props.currentPage==='home',
    });
    const sessionsName = classNames({
      'menu_select': true,
      'menu_select--selected': this.props.currentPage==='sessions',
    });
    const customsName = classNames({
      'menu_select': true,
      'menu_select--selected': this.props.currentPage==='kittens',
    });
    const galleryName = classNames({
      'menu_select': true,
      'menu_select--selected': this.props.currentPage==='gallery',
    });
    const linksName = classNames({
      'menu_select': true,
      'menu_select--selected': this.props.currentPage==='links',
    });
    const contactName = classNames({
      'menu_select': true,
      'menu_select--selected': this.props.currentPage==='contact',
    });
	  return(
        <div className={panelName}>
        <Link to='/' className='menu_link' onClick={()=>this.closeMenu()}>
          <div className={homeName}>
            HOME
            <div className='menu_indicator'></div>
          </div>
        </Link>

        <Link to='/sessions' className='menu_link' onClick={()=>this.closeMenu()}>
          <div className={sessionsName}>
            SESSIONS
            <div className='menu_indicator'></div>
          </div>
        </Link>

        <Link to='/kittens' className='menu_link' onClick={()=>this.closeMenu()}>
          <div className={customsName}>
            CUSTOMS
            <div className='menu_indicator'></div>
          </div>
        </Link>

        <Link to='/gallery' className='menu_link' onClick={()=>this.closeMenu()}>
          <div className={galleryName}>
            GALLERY
            <div className='menu_indicator'></div>
          </div>
        </Link>

        <Link to='/links' className='menu_link' onClick={()=>this.closeMenu()}>
          <div className={linksName}>
            LINKS
            <div className='menu_indicator'></div>
          </div>
        </Link>

        <Link to='/contact' className='menu_link' onClick={()=>this.closeMenu()}>
          <div className={contactName}>
            CONTACT
            <div className='menu_indicator'></div>
          </div>
        </Link>


        <a
          href='https://ashley.knockoutcats.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='menu_link'
          onClick={this.props.toggler}
        >
          <div className='menu_outlink'>
            MEMBERSHIP &nbsp;<FontAwesome name="external-link"/>
          </div>
        </a>

        <a
          href='http://sessiongirls.com/component/comprofiler/userprofile/Ashley%20Wildcat'
          target='_blank'
          rel='noopener noreferrer'
          className='menu_link'
          onClick={this.props.toggler}
        >
          <div className='menu_outlink'>
            SCHEDULE &nbsp;<FontAwesome name="external-link"/>
          </div>
        </a>

        <a
          href='http://clips4sale.com/84041'
          target='_blank'
          rel='noopener noreferrer'
          className='menu_link'
          onClick={this.props.toggler}
        >
          <div className='menu_outlink'>
            CLIPS &nbsp;<FontAwesome name="external-link"/>
          </div>
        </a>

        <br/><br/>
        <a
          href='https://twitter.com/ItsAshleyWC'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesome name="twitter" className="menu_social_icon"/>
         </a>
        <a
          href='https://www.facebook.com/ashley.wildcat.14'
        >
          <FontAwesome name="facebook" className="menu_social_icon"/>
        </a>
        <br/>
        <a href="mailto:kevinchoinj@gmail.com" className="menu_link">
          <div>
            ashleywildcat@outlook.com
          </div>
        </a>

				</div>

	  );
  }
}

export default connect(
  (state, ownProps) => ({
    menuDisplayed: state.pages.menuDisplayed,
    currentPage: state.pages.currentPage,
  }),
  dispatch => ({
    pagesActions: bindActionCreators(pagesActions, dispatch),
  }),
)(MenuPanel);
