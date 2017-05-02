'use strict';
var css = require('./../styles/galleryWindow.styl'); 
var _ = require('lodash/core');
import React from 'react';
import ReactDOM from 'react-dom';
import { ContentList } from './contentList.jsx';
import { ContentMap } from './contentMap.jsx';

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

				<div className="gallery-content">
					<div className="window-closer-container" onClick={this.props.closeWindow}>
						<img className="window-closer" src="assets/close_black.svg"/>
					</div>
					<div className="window-img-container">
						<img src={imgSrc}/>
					</div>
				</div>

				<div className="window-prev-container" onClick={this.handlePrev}>
					<img className="window-prev" src="assets/arrow_left_black.svg"/>
				</div>
				<div className="window-next-container" onClick={this.handleNext}>
					<img className="window-next" src="assets/arrow_right_black.svg"/>
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
