'use strict';
require('./../styles/galleryWide.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import { ContentList } from './contentList.jsx';
import { ContentMap } from './contentMap.jsx';
import { GalleryFooter } from './galleryFooter.jsx';

export class WideLayout extends React.Component {
	constructor() {
			super();
			this.state = {
				currentIndex: 0
			};
			this.handlePrev = this.handlePrev.bind(this);
			this.handleNext = this.handleNext.bind(this);
	}

	handlePrev() {
		var listSize = ContentList.length;
		this.setState({
			currentIndex: (this.state.currentIndex - 1 + listSize) % listSize
		});
	}

	handleNext() {
		var listSize = ContentList.length;
		this.setState({
			currentIndex: (this.state.currentIndex + 1) % listSize
		});
	}

	render() {
		const show = this.props.show;
		const showClassName = show ? "show" : "";
		const currentIndex = this.state.currentIndex;

		const list = getContents();
		return (
			<div id="gallery-wide-view" className={showClassName}>
				<div id="gallery-wide-content">
					<WideImage list={list} currentIndex={currentIndex}/>
					<WideFooter list={list} currentIndex={currentIndex} handlePrevFunc={this.handlePrev} handleNextFunc={this.handleNext}/>
				</div>
				<GalleryFooter/>
			</div>
		);
	}
}

function getContents() {
	var tiles = [];
	for (var i=0; i < ContentList.length; i++) {
		var id = ContentList[i];
		tiles.push(ContentMap[id]);
	}
	return tiles;
}

class WideImage extends React.Component {
	render() {
		var list = this.props.list;
		var currentIndex = this.props.currentIndex;
		var content = list[currentIndex];
		const imgSrc = content.source.fullUrl;
		return (
			<div className="wide-content-wrapper">
				<img src={imgSrc} className="wide-content-img"/>
			</div>
		);
	}
}

class WideFooter extends React.Component {
	render() {
		var list = this.props.list;
		const currentIndex = this.props.currentIndex;

		const dots = list.map((content, index) =>
			<Dot key={content.id} selected={index==currentIndex}/>
		);

		return (
			<div id="gallery-wide-footer">
				<button className="wide-prev-btn">
					<img src="assets/arrow_left_gray.svg" onClick={this.props.handlePrevFunc}/>
				</button>
				<div id="gallery-wide-dots">
					{dots}
				</div>
				<button className="wide-next-btn">
					<img src="assets/arrow_right_gray.svg" onClick={this.props.handleNextFunc}/>
				</button>
			</div>
		);
	}
}

class Dot extends React.Component {
	render() {
		var selected = this.props.selected;
		var selectedClass = selected ? "selected" : "";
		const classNames = "wide-dot " + selectedClass;
		return (
			<div className={classNames}></div>
		);
	}
}
