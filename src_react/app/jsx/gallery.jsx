'use strict';
require('./../styles/gallery.styl'); 
require('./../styles/gallerySwitchers.styl'); 

import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './header.jsx';
import { WideLayout } from './galleryWideLayout.jsx';
import { TileLayout } from './galleryTileLayout.jsx';

const LAYOUT_WIDE = "wide";
const LAYOUT_TILES = "tiles";

export class GalleryPage extends React.Component {
	constructor() {
	    super();
	    this.state = {
	      layout: LAYOUT_WIDE
	    };
		this.setLayoutFunc = this.setLayoutFunc.bind(this);
	}
	
	setLayoutFunc(layout) {
		if (this.state.layout != layout) {
			this.setState({layout: layout});
		}
	}
	
	render() {
		const showWide = this.state.layout == LAYOUT_WIDE;
		const showTiles = this.state.layout == LAYOUT_TILES;
		return (
			<div id="view-gallery">
				<Header/>
				<GallerySwitcher setLayoutFunc={this.setLayoutFunc}/>
				<div id="view-gallery-container">
					<WideLayout show={showWide}/>
					<TileLayout show={showTiles}/>
				</div>
			</div>
		);
	}
}

class GallerySwitcher extends React.Component {
	render() {
		return (
			<div id="gallery-switchers">
				<div className="gallery-switches">
					<GallerySwitchWide setLayoutFunc={this.props.setLayoutFunc}/>
					<GallerySwitchTiles setLayoutFunc={this.props.setLayoutFunc}/>
				</div>
			</div>
		);
	}
}

class GallerySwitchWide extends React.Component {
	render() {
		return (
			<button className="gallery-switch" title="Gallery View" onClick={() => this.props.setLayoutFunc(LAYOUT_WIDE)}>
				<div className="gallery-switch-wide"></div>
			</button>
		);
	}
}

class GallerySwitchTiles extends React.Component {
	render() {
		return (
			<button className="gallery-switch" title="Tile View" onClick={() => this.props.setLayoutFunc(LAYOUT_TILES)}>
				<div className="gallery-switch-tiles">
					<div className="gallery-switch-tile-row">
						<div className="gallery-switch-tile"/>
						<div className="gallery-switch-tile"/>
					</div>
					<div className="gallery-switch-tile-row">
						<div className="gallery-switch-tile"/>
						<div className="gallery-switch-tile"/>
					</div>
				</div>
			</button>
		);
	}
}