'use strict';
require('./../styles/galleryFooter.styl'); 
import React from 'react';
import ReactDOM from 'react-dom';

export class GalleryFooter extends React.Component {
	render() {
		return (
			<div id="gallery-footer">
				<div className="gallery-logos">
					<a href="https://www.instagram.com/mooseyhsushi/" target="_blank">
						<div className="gallery-logo ig"/>
					</a>
					<a href="https://www.linkedin.com/in/aaron-hsu-7b053238" target="_blank">
						<div className="gallery-logo li"/>
					</a>
				</div>
			</div>
		);
	}
}
