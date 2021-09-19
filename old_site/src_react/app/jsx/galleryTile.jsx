'use strict';
require('./../styl/galleryTile.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import { Window, MinModalWidth } from './galleryWindow.jsx';

export class Tile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
    };
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		if (window.innerWidth >= MinModalWidth) {
			this.setState({showModal: true});
		}
	}

	closeModal() {
		this.setState({showModal: false});
	}

	render() {
	  	const tile = this.props.tile;
	  	const imgUrl = tile.source.thumbnailUrl;
	    return (
	    	<div className="gallery-tile" style={{backgroundColor: tile.color}} onClick={this.openModal}>
				<TileImage imgSrc={imgUrl}/>
				<Window tile={tile} showModal={this.state.showModal} closeModal={this.closeModal}/>
			</div>
		);
	}
}

class TileImage extends React.Component {
	render() {
		const imgSrc = this.props.imgSrc;
	    return (
	    	<div>
		    	<img src={imgSrc}/>
			</div>
		);
	}
}
