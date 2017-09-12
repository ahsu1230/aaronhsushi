'use strict';
require('./../styles/galleryWindow.styl');
var _ = require('lodash/core');
import React from 'react';
import ReactDOM from 'react-dom';
import { ContentList } from './contentList.jsx';
import { ContentMap } from './contentMap.jsx';
import { GalleryDetails } from './galleryDetails.jsx';

export class Window extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	tile: props.tile
    };
		this.handleNext = this.handleNext.bind(this);
		this.handlePrev = this.handlePrev.bind(this);
	}

	handleNext() {
		const tile = this.state.tile;
		const nextTile = getNextTile(tile.id);
		this.setState({
			tile: nextTile
		});
	}

	handlePrev() {
		const tile = this.state.tile;
		const prevTile = getPrevTile(tile.id);
		this.setState({
			tile: prevTile
		});
	}

	render() {
		const tile = this.state.tile;
		const imgSrc = tile.source.fullUrl;
		return (
			<div className="gallery-window">

				<div className="window-content">
					<div className="window-content-container">
						<img className="content-img" src={imgSrc}></img>
						<button className="window-closer-btn" onClick={this.props.closeWindow}>
							<img src="assets/close_black.svg"/>
						</button>
					</div>
				</div>

				<button className="window-prev-btn" onClick={this.handlePrev}>
					<img src="assets/arrow_left_black.svg"/>
				</button>
				<button className="window-next-btn" onClick={this.handleNext}>
					<img src="assets/arrow_right_black.svg"/>
				</button>

				<div className="window-details-container">
					<GalleryDetails content={tile}/>
				</div>
			</div>
		);
	}
}

function getNextTile(currentId) {
	var listSize = ContentList.length;
	var listIndex = _.indexOf(ContentList, currentId);
	var index = (listIndex + 1) % listSize;
	return ContentMap[ContentList[index]];
}

function getPrevTile(currentId) {
	var listSize = ContentList.length;
	var listIndex = _.indexOf(ContentList, currentId);
	var index = (listIndex - 1 + listSize) % listSize;
	return ContentMap[ContentList[index]];
}
