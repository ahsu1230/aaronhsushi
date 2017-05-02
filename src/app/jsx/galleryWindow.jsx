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
	    	tile: props.tile,
	    	showDetails: false
	    };
	    this.handleDetails = this.handleDetails.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
	}

	handleNext() {
		const tile = this.state.tile;
		const nextTile = getNextTile(tile.id);
		this.setState({
			tile: nextTile,
			showDetails: false
		});
	}

	handlePrev() {
		const tile = this.state.tile;
		const prevTile = getPrevTile(tile.id);
		this.setState({
			tile: prevTile,
			showDetails: false
		});
	}

	handleDetails() {
		this.setState({
			showDetails: true
		});
	}

	render() {
		const tile = this.state.tile;
		const imgSrc = tile.source.fullUrl;
		return (
			<div className="gallery-window">
					
				<div className="gallery-content">
					<div className="content-container">
						<img className="content-img" src={imgSrc}></img>
						<button className="window-closer-btn" onClick={this.props.closeWindow}>
							<img className="window-closer" src="assets/close_black.svg"/>
						</button>
					</div>
				</div>

				<button className="window-prev-btn" onClick={this.handlePrev}>
					<img className="window-prev" src="assets/arrow_left_black.svg"/>
				</button>
				<button className="window-next-btn" onClick={this.handleNext}>
					<img className="window-next" src="assets/arrow_right_black.svg"/>
				</button>
				<button className="window-details-btn" onClick={this.handleDetails}>
					<div>Show More Information {this.state.showDetails}</div>
				</button>
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
