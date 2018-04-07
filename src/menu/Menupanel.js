import React from "react";
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as pagesActions from '../actions/pages';

import fbicon from '../images/facebook.png';
import twicon from '../images/twitter.png';
import goldfbicon from '../images/goldfacebook.png';
import goldtwicon from '../images/goldtwitter.png';

var FontAwesome = require('react-fontawesome');

class Menupanel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mouseoverfb: false,
      mouseovertw: false
    }
	}
  fbover = () => {
    this.setState({ mouseoverfb: true });
  }
  fbleave = () => {
    this.setState({ mouseoverfb: false });
  }
  twover = () => {
    this.setState({ mouseovertw: true });
  }
  twleave = () => {
    this.setState({ mouseovertw: false });
  }
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
            MEMBERSHIP &nbsp;<FontAwesome name="external-link-alt"/>
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
            SCHEDULE &nbsp;<FontAwesome name="external-link-alt"/>
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
            CLIPS &nbsp;<FontAwesome name="external-link-alt"/>
          </div>
        </a>

        <br/><br/>
        <a
          href='https://twitter.com/ItsAshleyWC'
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={this.twover}
          onMouseLeave={this.twleave}
        >
         {this.state.mouseovertw ?
          <img
            src={goldtwicon}
            className='menu_social_icon'
            alt=''
          />
          :
          <img
            src={twicon}
            className='menu_social_icon'
            alt=''
          />
        }
         </a>
        <a
          href='https://www.facebook.com/ashley.wildcat.14'
          onMouseEnter={this.fbover}
          onMouseLeave={this.fbleave}
        >
        {this.state.mouseoverfb ?
          <img
            src={goldfbicon}
            className='menu_social_icon'
            alt=''
          />
          :
          <img
            src={fbicon}
            className='menu_social_icon'
            alt=''
          />
        }
        </a>
        <br/>
        <span className='menu_email'>
          ashleywildcat@outlook.com
        </span>

				</div>

	  );
  }
}

function mapStateToProps(state, prop){
  return{
    menuDisplayed: state.pages.menuDisplayed,
    currentPage: state.pages.currentPage,
  }
}

function mapDispatchToProps(dispatch){
  return {
    pagesActions: bindActionCreators(pagesActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menupanel);