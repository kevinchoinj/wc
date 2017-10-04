import React from 'react';
import Viewer from './Viewer';

import image1 from '../images/gallery/1.jpg';
import image2 from '../images/gallery/2.jpg';
import image3 from '../images/gallery/3.jpg';
import image4 from '../images/gallery/4.jpg';
import image5 from '../images/gallery/5.jpg';
import image6 from '../images/gallery/6.jpg';


function makeUnsplashSrc (id) {
	return id;
}

function makeUnsplashThumbnail (id) {
		return id;
}
const DEFAULT_IMAGES = [
	{ id: image1, caption: 'Image 1'},
	{ id: image2, caption: 'Image2'},
	{ id: image3, caption: 'Image3'},
	{ id: image4, caption: 'Image 4'},
	{ id: image5, caption: 'Image 5'},
	{ id: image6, caption: 'Image 5'},
			{ id: 'https://imgur.com/qywvTDQ.jpg', caption: 'Image 5'},
];

export default class Gallerycomp extends React.Component{
	render(){
		const gallerycontainer={
			position:"absolute",
			top:"100px",
		}
		return (
			<div style={gallerycontainer}>
		<Viewer images={DEFAULT_IMAGES.map(({ caption, id }) => ({
			src: makeUnsplashSrc(id),
			thumbnail: makeUnsplashThumbnail(id),
			caption,
		}))} />

	</div>
		);
	}
}
