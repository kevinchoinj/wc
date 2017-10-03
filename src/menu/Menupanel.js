import React from "react";
import {Link} from 'react-router-dom';

import Menutext from './Menutext';

import DesktopBreakpoint from '../responsive/desktop_breakpoint.js';
import TabletBreakpoint from '../responsive/tablet_breakpoint.js';
import PhoneBreakpoint from '../responsive/phone_breakpoint.js';


export default class Menupanel extends React.Component{


  render(){


			const desktopmenu={
				width: "260px",
				height: "100%",
				backgroundColor: "rgba(24,24,24,1)",
				position:"fixed",
				left: this.props.menuright,
				paddingTop:"75px",
        top:"0px",
				fontSize: "18px",
				fontFamily: "Lato, Helvetica",
        textAlign:"center",

				WebkitTransition: ".4s ease-in-out",
				MozTransition: ".4s ease-in-out",
				OTransition: ".4s ease-in-out",
				transition:".4s ease-in-out",

				zIndex:"12",

			}

			const mobilemenu={
				width: "100%",
				height: "100%",
				backgroundColor: "rgba(24,24,24,1)",
				position:"fixed",
				left: this.props.mobileright,
				paddingTop:"18vh",
        top: "0px",
				paddingLeft:"50px",
				fontSize: "14px",
				letterSpacing: "6px",
				fontFamily: "Roboto",
				lineHeight: "300%",
				fontWeight: "bold",

				WebkitTransition: ".4s ease-in-out",
				MozTransition: ".4s ease-in-out",
				OTransition: ".4s ease-in-out",
				transition:".4s ease-in-out",

				zIndex:"12",
			}

			const desktoplink={
				textDecoration: "none",
				color:"#fff",

			}

      const select={
        width:"100%",
        paddingTop:"16px",
      }
	  return(

				<div>
				<DesktopBreakpoint>
				<div style={desktopmenu}>
        <div style={select}>
				<Link to='/'
          style={desktoplink}
          onClick={this.props.toggler}
        >
          <Menutext>
            HOME
          </Menutext>
        </Link>
        </div>
        <div style={select}>
				<Link
          to='/'
          style={desktoplink}
          onClick={this.props.toggler}
        >
          <Menutext>
            MEMBERSHIPS
          </Menutext>
        </Link>
        </div>
				<div style={select}><Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>SCHEDULE</Menutext></Link></div>
				<div style={select}><Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>SESSIONS</Menutext></Link></div>
				<div style={select}><Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>KITTENS</Menutext></Link></div>
        <div style={select}><Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>ABOUT</Menutext></Link></div>
        <div style={select}><Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>CONTACT</Menutext></Link></div>
        <div style={select}><Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>GALLERY</Menutext></Link></div>
        <div style={select}><Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>CLIPS</Menutext></Link></div>
				</div>
				</DesktopBreakpoint>

				<TabletBreakpoint>
				<div style={desktopmenu}>
        <Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>HOME</Menutext></Link><br/>
				<Link to='/projects' style={desktoplink} onClick={this.props.toggler}><Menutext>PROJECTS</Menutext></Link><br/>
				<Link to='/gaming' style={desktoplink} onClick={this.props.toggler}><Menutext>GAMING</Menutext></Link><br/>
				<Link to='/resume' style={desktoplink} onClick={this.props.toggler}><Menutext>RESUME</Menutext></Link><br/>
				<Link to='/recent' style={desktoplink} onClick={this.props.toggler}><Menutext>RECENT</Menutext></Link><br/>
				</div>
				</TabletBreakpoint>

				<PhoneBreakpoint>
				<div style={mobilemenu}>
        <Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>HOME</Menutext></Link><br/>
				<Link to='/projects' style={desktoplink} onClick={this.props.toggler}><Menutext>PROJECTS</Menutext></Link><br/>
				<Link to='/gaming' style={desktoplink} onClick={this.props.toggler}><Menutext>GAMING</Menutext></Link><br/>
				<Link to='/resume' style={desktoplink} onClick={this.props.toggler}><Menutext>RESUME</Menutext></Link><br/>
				<Link to='/recent' style={desktoplink} onClick={this.props.toggler}><Menutext>RECENT</Menutext></Link><br/>
				</div>
				</PhoneBreakpoint>
				</div>
	  );
  }
}
