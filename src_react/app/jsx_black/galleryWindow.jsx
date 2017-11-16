'use strict';
require('./../styl/galleryWindow.styl');
var _ = require('lodash/core');
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { ColumnMaxWidth1, ColumnMaxWidth2 } from './constants.jsx';
import { ContentList } from './contentList.jsx';
import { ContentMap } from './contentMap.jsx';
import { GalleryDetails } from './galleryDetails.jsx';

export const MinModalWidth = ColumnMaxWidth1;
const WindowStyle = {
	overlay: {
		backgroundColor: 'rgba(33, 33, 33, 0.8)'
	},
	content : {
	    top: '50%',
	    bottom: 'auto',
			left: '50%',
			right: '0',
			width: '80%',
			maxWidth: '880px',
	    transform: 'translate(-50%, -50%)',
	    padding: '0',
	    border: 'none',
			borderRadius: 'none',
	    backgroundColor: 'transparent',
	}
};

export class Window extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			originalTile: props.tile,
    	tile: props.tile,
			showContent: false
    };

		this.startWindow = this.startWindow.bind(this);
		this.closeWindow = this.closeWindow.bind(this);
		this.handleNext = this.handleNext.bind(this);
		this.handlePrev = this.handlePrev.bind(this);
		this.handleResize = this.handleResize.bind(this);
	}

	startWindow() {
		this.setState({showContent: true});
	}

	closeWindow() {
		this.setState({
			showContent: false,
			tile: this.state.originalTile
		});
		this.props.closeModal();
	}

	handleResize() {
		if (window.innerWidth < MinModalWidth) {
			this.props.closeModal();
		}
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
		var galleryWindowClassNames = "gallery-window";
		galleryWindowClassNames += this.state.showContent ? " show " : "";

		return (
			<Modal
						isOpen={this.props.showModal}
						onAfterOpen={this.startWindow}
						onRequestClose={this.closeWindow}
						style={WindowStyle}
						contentLabel="Gallery Modal">

				<div className={galleryWindowClassNames}>
					<div className="window-container">
						<WindowContent tile={tile}/>
						{/*
						<div className="window-details-container">
							<GalleryDetails content={tile}/>
						</div>
						*/}
					</div>

					<button className="window-close-btn" onClick={this.closeWindow}>
						<img src="assets/close_white.svg"/>
					</button>

					<button className="window-prev-btn" onClick={this.handlePrev}>
						<img src="assets/arrow_left_white.svg"/>
					</button>

					<button className="window-next-btn" onClick={this.handleNext}>
						<img src="assets/arrow_right_white.svg"/>
					</button>
				</div>

			</Modal>
		);
	}

	componentWillMount() {
		this.handleResize();
	}
	componentDidMount() {
		window.addEventListener("resize", this.handleResize);
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize);
	}
}

class WindowContent extends React.Component {
	render() {
		const tile = this.props.tile;
		const imgSrc = tile.source.fullUrl;
		const ingredientsStr = tile.ingredients.join(", ");
		return (
			<div className="content-container">
				<div className="content-img-container">
					<img className="content-img" src={imgSrc}/>
					<div className="content-banner header">
						{tile.title}
					</div>
					<div className="content-banner footer">
						{ingredientsStr}<br/>
						{tile.details}
					</div>
				</div>
			</div>
		);
	}
}

function getNextTile(currentId) {
	var listSize = ContentList.length;
	var listIndex = _.indexOf(ContentList, currentId);
	if (listIndex < 0) {
		console.log("listId not found: " + currentId);
	}
	var index = (listIndex + 1) % listSize;
	return ContentMap[ContentList[index]];
}

function getPrevTile(currentId) {
	var listSize = ContentList.length;
	var listIndex = _.indexOf(ContentList, currentId);
	if (listIndex < 0) {
		console.log("listId not found: " + currentId);
	}
	var index = (listIndex - 1 + listSize) % listSize;
	return ContentMap[ContentList[index]];
}
