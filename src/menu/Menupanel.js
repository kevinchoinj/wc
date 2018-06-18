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

    const menuValues = [
      {text: 'HOME', link: '/', indicator: homeName},
      {text: 'SESSIONS', link: 'sessions', indicator: sessionsName},
      {text: 'CUSTOMS', link: '/kittens', indicator: customsName},
      {text: 'GALLERY', link: '/gallery', indicator: galleryName},
      {text: 'LINKS', link: '/links', indicator: linksName},
      {text: 'CONTACT', link: '/contact', indicator: contactName},
    ]
    const linkValues = [
      {text: 'MEMBERSHIP', link: 'https://ashley.knockoutcats.com/'},
      {text: 'SCHEDULE', link: 'http://sessiongirls.com/component/comprofiler/userprofile/Ashley%20Wildcat'},
      {text: 'CLIPS', link: 'http://clips4sale.com/84041'},

    ]
	  return(
      <div className={panelName}>

        {menuValues.map((value, index)=>(
          <div key={index}>
            <Link to={value.link} className='menu_link' onClick={()=>this.closeMenu()}>
              <div className={value.indicator}>
                {value.text}
                <div className='menu_indicator'></div>
              </div>
            </Link>
          </div>
        ))}

        {linkValues.map((value, index)=>(
          <div key={index}>
            <a
              href={value.link}
              target='_blank'
              rel='noopener noreferrer'
              className='menu_link'
              onClick={this.props.toggler}
            >
              <div className='menu_outlink'>
                {value.text} &nbsp;<FontAwesome name="external-link"/>
              </div>
            </a>
          </div>
        ))}

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
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesome name="facebook" className="menu_social_icon"/>
        </a>
        <br/>
        <a href="mailto:ashleywildcat@outlook.com" className="menu_link">
          <div role="contentinfo">
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
