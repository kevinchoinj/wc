import React from "react";
import {Link} from 'react-router-dom';

import Menutext from './Menutext';

import outimg from '../images/outw.png';

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

      const outimgstyle={
        height:"18px",

      }
	  return(

				<div>
				<DesktopBreakpoint>
				<div style={desktopmenu}>
        <div style={select}><Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>HOME</Menutext></Link></div>

				<div style={select}><Link to='/sessions' style={desktoplink} onClick={this.props.toggler}><Menutext>SESSIONS</Menutext></Link></div>
				<div style={select}><Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>KITTENS</Menutext></Link></div>

        <div style={select}><Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>GALLERY</Menutext></Link></div>
        <div style={select}><Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>CONTACT</Menutext></Link></div>

        <div style={select}><a href="https://ashley.knockoutcats.com/"style={desktoplink} onClick={this.props.toggler}><Menutext>MEMBERSHIPS &nbsp; <img src={outimg} style={outimgstyle}/></Menutext></a></div>
				<div style={select}><a href="http://sessiongirls.com/component/comprofiler/userprofile/Ashley%20Wildcat" style={desktoplink} onClick={this.props.toggler}><Menutext>SCHEDULE &nbsp; <img src={outimg} style={outimgstyle}/></Menutext></a></div>
        <div style={select}><a href="http://clips4sale.com/84041" style={desktoplink} onClick={this.props.toggler}><Menutext>CLIPS &nbsp; <img src={outimg} style={outimgstyle}/></Menutext></a></div>
				</div>
				</DesktopBreakpoint>

				<TabletBreakpoint>
				<div style={desktopmenu}>
        <div style={select}><Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>HOME</Menutext></Link></div>

        <div style={select}><Link to='/sessions' style={desktoplink} onClick={this.props.toggler}><Menutext>SESSIONS</Menutext></Link></div>
        <div style={select}><Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>KITTENS</Menutext></Link></div>

        <div style={select}><Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>GALLERY</Menutext></Link></div>
        <div style={select}><Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>CONTACT</Menutext></Link></div>

        <div style={select}><a href="https://ashley.knockoutcats.com/"style={desktoplink} onClick={this.props.toggler}><Menutext>MEMBERSHIPS &nbsp; <img src={outimg} style={outimgstyle}/></Menutext></a></div>
        <div style={select}><a href="http://sessiongirls.com/component/comprofiler/userprofile/Ashley%20Wildcat" style={desktoplink} onClick={this.props.toggler}><Menutext>SCHEDULE &nbsp; <img src={outimg} style={outimgstyle}/></Menutext></a></div>
        <div style={select}><a href="http://clips4sale.com/84041" style={desktoplink} onClick={this.props.toggler}><Menutext>CLIPS &nbsp; <img src={outimg} style={outimgstyle}/></Menutext></a></div>
        </div>
				</TabletBreakpoint>

				<PhoneBreakpoint>
				<div style={desktopmenu}>
        <div style={select}><Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>HOME</Menutext></Link></div>

				<div style={select}><Link to='/sessions' style={desktoplink} onClick={this.props.toggler}><Menutext>SESSIONS</Menutext></Link></div>
				<div style={select}><Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>KITTENS</Menutext></Link></div>

        <div style={select}><Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>GALLERY</Menutext></Link></div>
<div style={select}><Link to='/' style={desktoplink} onClick={this.props.toggler}><Menutext>CONTACT</Menutext></Link></div>

        <div style={select}><a href="https://ashley.knockoutcats.com/"style={desktoplink} onClick={this.props.toggler}><Menutext>MEMBERSHIPS &nbsp; <img src={outimg} style={outimgstyle}/></Menutext></a></div>
				<div style={select}><a href="http://sessiongirls.com/component/comprofiler/userprofile/Ashley%20Wildcat" style={desktoplink} onClick={this.props.toggler}><Menutext>SCHEDULE &nbsp; <img src={outimg} style={outimgstyle}/></Menutext></a></div>
        <div style={select}><a href="http://clips4sale.com/84041" style={desktoplink} onClick={this.props.toggler}><Menutext>CLIPS &nbsp; <img src={outimg} style={outimgstyle}/></Menutext></a></div>
				</div>
				</PhoneBreakpoint>
				</div>
	  );
  }
}
