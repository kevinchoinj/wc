import React from "react";
import {Link} from 'react-router-dom';

import Menutext from './Menutext';
import Outlink from './Outlink';
import outimg from '../images/out.png';

import fbicon from '../images/facebook.png';
import twicon from '../images/twitter.png';
import goldfbicon from '../images/goldfacebook.png';
import goldtwicon from '../images/goldtwitter.png';

export default class Menupanel extends React.Component{
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

  render(){

			const desktopmenu={
				left: this.props.menuright,
			}

	  return(
			<div>
        <div 
          style={desktopmenu} 
          className='menu'
        >
        <Link to='/' className='menu_link' onClick={this.props.toggler}>
        {
          this.props.currentpage==='home' 
          ? 
          <div className='menu_goldtext'>
            HOME
            <div className='menu_indicator'>
            </div>
          </div> 
          :
          <Menutext>
            <div className='menu_select'>
              HOME
            </div>
          </Menutext>
        }
        </Link>

        <Link to='/sessions' className='menu_link' onClick={this.props.toggler}>
        {
          this.props.currentpage==="sessions" 
          ? 
          <div className='menu_goldtext'>
          SESSIONS
          <div className='menu_indicator'>
          </div>
        </div> 
        :
        <Menutext>
          <div className='menu_select'>
            SESSIONS
          </div>
        </Menutext>
        }
        </Link>

        <Link to='/kittens' className='menu_link' onClick={this.props.toggler}>
        {this.props.currentpage==="kittens" ? <div className='menu_goldtext'>CUSTOMS<div className='menu_indicator'></div></div> 
        :
        <Menutext><div className='menu_select'>CUSTOMS</div></Menutext>}
        </Link>

        <Link to='/gallery' className='menu_link' onClick={this.props.toggler}>
        {this.props.currentpage==="gallery" ? <div className='menu_goldtext'>GALLERY<div className='menu_indicator'></div></div> 
        :
        <Menutext><div className='menu_select'>GALLERY</div></Menutext>}
        </Link>

        <Link to='/links' className='menu_link' onClick={this.props.toggler}>
        {this.props.currentpage==="links" ? <div className='menu_goldtext'>LINKS<div className='menu_indicator'></div></div> 
        :
        <Menutext><div className='menu_select'>LINKS</div></Menutext>}
        </Link>

        <Link to='/contact' className='menu_link' onClick={this.props.toggler}>
        {this.props.currentpage==="contact" ? <div className='menu_goldtext'>CONTACT<div className='menu_indicator'></div></div> 
        :
        <Menutext><div className='menu_select'>CONTACT</div></Menutext>}
        </Link>


        <a 
          href='https://ashley.knockoutcats.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='menu_link' 
          onClick={this.props.toggler}
        >
          <Outlink>
            <div className='menu_outlink'>
              MEMBERSHIP &nbsp; 
              <img 
                src={outimg} 
                className='menu_outlink__image' 
                alt=''
              />
            </div>
          </Outlink>
        </a>

        <a 
          href='http://sessiongirls.com/component/comprofiler/userprofile/Ashley%20Wildcat'
          target='_blank'
          rel='noopener noreferrer'
          className='menu_link' 
          onClick={this.props.toggler}
        >
          <Outlink>
            <div className='menu_outlink'>
              SCHEDULE &nbsp; 
              <img 
                src={outimg} 
                className='menu_outlink__image' 
                alt=''
              />
            </div>
          </Outlink>
        </a>

        <a 
          href='http://clips4sale.com/84041' 
          target='_blank'
          rel='noopener noreferrer' 
          className='menu_link' 
          onClick={this.props.toggler}
        >
          <Outlink>
            <div className='menu_outlink'>
              CLIPS &nbsp; 
              <img 
                src={outimg} 
                className='menu_outlink__image' 
                alt=''
              />
            </div>
          </Outlink>
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




			</div>
	  );
  }
}
