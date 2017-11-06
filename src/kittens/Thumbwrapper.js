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
										scrollamount={this.props.scrollamount}
				 >
				 Ashley Wildcat
				 </Thumbcont>
					</Link>



					<a href="https://twitter.com/bellawrestler19">
					<Thumbcont
									bgimage={image2}
									scrollamount={this.props.scrollamount}
			     >
					 Bella
					 </Thumbcont>
					 </a>
					 <a href="https://twitter.com/ScarlettRain110">
 					<Thumbcont
									 bgimage={image3}
									 scrollamount={this.props.scrollamount}
 			     >
 					 Scarlett Rain
 					 </Thumbcont>
 					 </a>

					 <a href="https://twitter.com/veronikawithak">
 					<Thumbcont
									 bgimage={image4}
									 scrollamount={this.props.scrollamount}
 			     >
 					 Veronika Valentine
 					 </Thumbcont>
 					 </a>

					 <a href="https://twitter.com/mizzamandamarie">
 					<Thumbcont
									 bgimage={image5}
									 scrollamount={this.props.scrollamount}
 			     >
 					 Mizz Amanda Marie
 					 </Thumbcont>
 					 </a>

 					<Thumbcont
									 bgimage={image6}
									 scrollamount={this.props.scrollamount}
 			     >
 					Sin D
 					 </Thumbcont>
					 <Thumbcont

									 bgimage={image7}
									 scrollamount={this.props.scrollamount}
						>
					 Jordan
						</Thumbcont>

					 <a href="https://twitter.com/BellaInksClips">
						<Thumbcont
										bgimage={image8}
										scrollamount={this.props.scrollamount}
						 >
						Bella Ink
						 </Thumbcont>
						 </a>

		</div>





	  );
  }
}
