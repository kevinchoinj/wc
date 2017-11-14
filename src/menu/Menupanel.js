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
				width: "260px",
				height: "100%",
				backgroundColor: "rgba(24,24,24,1)",
				position:"fixed",
				left: this.props.menuright,
				paddingTop:"75px",
        top:"0px",
				fontSize: "16px",
				fontFamily: "Lato, Helvetica",
        textAlign:"center",

				WebkitTransition: ".4s ease-in-out",
				MozTransition: ".4s ease-in-out",
				OTransition: ".4s ease-in-out",
				transition:".4s ease-in-out",

				zIndex:"12",
        WebkitBoxShadow: "0px 10px 50px 10px rgba(0,0,0,0.5)",
        MozBoxShadow: "0px 10px 50px 10px rgba(0,0,0,0.5)",
        BoxShadow: "0px 10px 50px 10px rgba(0,0,0,0.5)",
			}

			const desktoplink={
				textDecoration: "none",
			}

      const select={
        width:"100%",
        paddingTop:"12px",
        paddingBottom:"12px",
        position: "relative",
      }
      const goldtext={
        color: "#af9759",
        paddingTop:"12px",
        paddingBottom:"12px",
        position: "relative",
        cursor:"default",
      }
      const outimgstyle={
        height:"10px",
        marginBottom:"4px",

      }
      const socialicon={
        height:"25px",
        width:"25px",
        margin:"10px",
      }

      const outlinkstyle={
        width:"100%",
        paddingTop:"12px",
        paddingBottom:"12px",
        position: "relative",
        backgroundColor:"#af9759",
      }

      const email={
        fontFamily: "Lato, Helvetica",
        color: "#af9759",
      }

        const indic={
          top:"12px",
          position:"absolute",
          width:"100%",
          borderRight:"8px solid #af9759",
          borderLeft:"8px solid #af9759",
          borderTop:"8px solid transparent",
          borderBottom: "8px solid transparent",
        }
	  return(

				<div>
				<div style={desktopmenu}>
        <Link to='/' style={desktoplink} onClick={this.props.toggler}>
        {this.props.currentpage==="home" ? <div style={goldtext}>HOME<div style={indic}></div></div> 
        :
        <Menutext><div style={select}>HOME</div></Menutext>}
        </Link>

        <Link to='/sessions' style={desktoplink} onClick={this.props.toggler}>
        {this.props.currentpage==="sessions" ? <div style={goldtext}>SESSIONS<div style={indic}></div></div> 
        :
        <Menutext><div style={select}>SESSIONS</div></Menutext>}
        </Link>

        <Link to='/kittens' style={desktoplink} onClick={this.props.toggler}>
        {this.props.currentpage==="kittens" ? <div style={goldtext}>CUSTOMS<div style={indic}></div></div> 
        :
        <Menutext><div style={select}>CUSTOMS</div></Menutext>}
        </Link>

        <Link to='/gallery' style={desktoplink} onClick={this.props.toggler}>
        {this.props.currentpage==="gallery" ? <div style={goldtext}>GALLERY<div style={indic}></div></div> 
        :
        <Menutext><div style={select}>GALLERY</div></Menutext>}
        </Link>

        <Link to='/links' style={desktoplink} onClick={this.props.toggler}>
        {this.props.currentpage==="links" ? <div style={goldtext}>LINKS<div style={indic}></div></div> 
        :
        <Menutext><div style={select}>LINKS</div></Menutext>}
        </Link>

        <Link to='/contact' style={desktoplink} onClick={this.props.toggler}>
        {this.props.currentpage==="contact" ? <div style={goldtext}>CONTACT<div style={indic}></div></div> 
        :
        <Menutext><div style={select}>CONTACT</div></Menutext>}
        </Link>


        <a 
          href='https://ashley.knockoutcats.com/'
          target='_blank'
          rel='noopener noreferrer'
          style={desktoplink} 
          onClick={this.props.toggler}
        >
          <Outlink>
            <div style={outlinkstyle}>
              MEMBERSHIP &nbsp; 
              <img 
                src={outimg} 
                style={outimgstyle} 
                alt=''
              />
            </div>
          </Outlink>
        </a>

        <a 
          href='http://sessiongirls.com/component/comprofiler/userprofile/Ashley%20Wildcat'
          target='_blank'
          rel='noopener noreferrer'
          style={desktoplink} 
          onClick={this.props.toggler}
        >
          <Outlink>
            <div style={outlinkstyle}>
              SCHEDULE &nbsp; 
              <img 
                src={outimg} 
                style={outimgstyle} 
                alt=''
              />
            </div>
          </Outlink>
        </a>

        <a 
          href='http://clips4sale.com/84041' 
          target='_blank'
          rel='noopener noreferrer' 
          style={desktoplink} 
          onClick={this.props.toggler}
        >
          <Outlink>
            <div style={outlinkstyle}>
              CLIPS &nbsp; 
              <img 
                src={outimg} 
                style={outimgstyle} 
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
            style={socialicon} 
            alt=''
          /> 
          : 
          <img 
            src={twicon} 
            style={socialicon} 
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
            style={socialicon} 
            alt=''
          /> 
          : 
          <img 
            src={fbicon} 
            style={socialicon} 
            alt=''
          />
        }
        </a>
      <br/>
        <span style={email}>
        ashleywildcat@outlook.com
        </span>

				</div>




				</div>
	  );
  }
}
