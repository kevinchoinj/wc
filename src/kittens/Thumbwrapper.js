import React from "react";
import Thumbcont from './Thumbnailcont';
import image1 from '../images/kittens/ashley.jpg';
import image2 from '../images/kittens/bella.jpg';
import image3 from '../images/kittens/scarlett.jpg';
import image4 from '../images/kittens/veronika.jpg';
import image5 from '../images/kittens/amanda.jpg';
import image6 from '../images/kittens/sind.jpg';
import image7 from '../images/kittens/jordan.jpeg';
import image8 from '../images/kittens/bellaink.jpg';

import {Link} from 'react-router-dom';
export default class Thumbwrap extends React.Component{
  render(){
		const thumbwrap={
			marginTop:"100px",
			backgroundColor:"#ddd",
			marginBottom:"100px",
		}

	  return(

    <div style={thumbwrap} className="row">

					<Link to="/">
					<Thumbcont
				            bgimage={image1}
				 >
				 Ashley Wildcat
				 </Thumbcont>
					</Link>



					<a href="https://twitter.com/bellawrestler19">
					<Thumbcont
			            bgimage={image2}
			     >
					 Bella
					 </Thumbcont>
					 </a>
					 <a href="https://twitter.com/ScarlettRain110">
 					<Thumbcont
 			            bgimage={image3}
 			     >
 					 Scarlett Rain
 					 </Thumbcont>
 					 </a>

					 <a href="https://twitter.com/veronikawithak">
 					<Thumbcont
 			            bgimage={image4}
 			     >
 					 Veronika Valentine
 					 </Thumbcont>
 					 </a>

					 <a href="https://twitter.com/mizzamandamarie">
 					<Thumbcont
 			            bgimage={image5}
 			     >
 					 Mizz Amanda Marie
 					 </Thumbcont>
 					 </a>

 					<Thumbcont
 			            bgimage={image6}
 			     >
 					Sin D
 					 </Thumbcont>
					 <Thumbcont

									 bgimage={image7}
						>
					 Jordan
						</Thumbcont>

					 <a href="https://twitter.com/BellaInksClips">
						<Thumbcont
										bgimage={image8}
						 >
						Bella Ink
						 </Thumbcont>
						 </a>

		</div>





	  );
  }
}
