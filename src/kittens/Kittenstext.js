import React from "react";
import {Col} from 'react-bootstrap';

export default class Kittenstext extends React.Component{
  render(){
		const textcontainer={
				fontFamily:"Lato, Helvetica",
				color:"#af9759",
				fontSize:"18px",
				lineHeight:"150%",
				letterSpacing:"1px",

				marginBottom:"200px",
		}

		const title={
			fontSize:"48px",
		}


	  return(

    <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1} style={textcontainer}>
		<span style={title}>Sessions with Kittens!!</span>
		 <br/><br/>
		Kittens available anytime for sessions at Studio Wildcat in West Palm Beach, Florida include:
		Betty Battles, SinD, Amanda Marie, and Lolo Limone! Or boom a double with yours truly!!
		To schedule your session, e-mail Ashley Wildcat at ashleywildcat@outlook.com today!!
		Please include the name of the Kitten(s) you want to session with, the desired date, time, and session length.
		Ashley will follow-up with you to confirm everything to make your wrestling fantasy a reality!! MeOW!!

		<br/><br/><br/><br/>

		<span style={title}>Hey Girls!! </span><br/><br/>
		Do you love to rassle and kick ass?! Would you like to make $$$ doing it??!! If your answer is, "Hell ya!,"
		then consider applying to become one of Ashley Wildcat's Kittens!! If you are selected, you will have opportunities
		to film custom videos, do private wrestling sessions with customers, and much, much more!! You will make money and have
		 fun doing it too!! Ashley Wildcat will be personally involved in supporting your training and development so that you
		  can be a successful session wrestler! If you are interested,
e-mail Ashley now at ashleywildcat@outlook.com and make this happen! Let me hear from ya, girls!! MeOw!!
		</Col>





	  );
  }
}
