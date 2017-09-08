'use strict';
require('./../styles/galleryWide.styl'); 
import React from 'react';
import ReactDOM from 'react-dom';
import { ContentList } from './contentList.jsx';
import { ContentMap } from './contentMap.jsx';

export class WideLayout extends React.Component {
	render() {
		const show = this.props.show;
		const showClassName = show ? "show" : "";
		
		var list = getContents();
		return (
			<div id="gallery-wide-view" className={showClassName}>
				<div id="gallery-wide-content">
					<WideFooter list={list}/>
				</div>
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

class WideFooter extends React.Component {
	render() {
		var list = this.props.list;
		const dots = list.map(content =>
			<Dot key={content.id}/>
		)
		return (
			<div id="gallery-wide-footer">
				<button className="wide-prev-btn" onClick={this.handlePrev}>
					<img src="assets/arrow_left_black.svg"/>
				</button>
				<div id="gallery-wide-dots">
					{dots}
				</div>
				<button className="wide-next-btn" onClick={this.handleNext}>
					<img src="assets/arrow_right_black.svg"/>
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