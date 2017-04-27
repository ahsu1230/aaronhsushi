'use strict';
var css = require('./../styles/galleryWindow.styl'); 
import React from 'react';
import ReactDOM from 'react-dom';

export class Window extends React.Component {
	render() {
		const imgSrc = this.props.url;
		return (
			<div>
				<div className="window-closer-container" onClick={this.props.closeWindow}>
					<img className="window-closer" src="assets/close-black.svg"></img>
				</div>
				<div className="gallery-window">
					<img src={imgSrc}></img>
				</div>
			</div>
		);
	}
}
