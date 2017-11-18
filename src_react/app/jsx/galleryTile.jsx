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

function fakeTile(tile) {
	var url = getSampleBigImageUrl();
	tile.source = {
		thumbnailUrl: url,
		fullUrl: url
	};
	return tile;
}

function getSampleBigImageUrl() {
	var rand = Math.floor((Math.random() * 10));
  	var urls = [
  		"http://s1.picswalls.com/wallpapers/2014/07/24/latest-sushi-wallpaper_112712993_82.jpg",
  		"https://images.alphacoders.com/152/thumb-1920-1523.jpg",
  		"http://s1.picswalls.com/wallpapers/2014/07/24/sushi-wallpapers_112715282_82.jpg",
  		"https://images6.alphacoders.com/407/407820.jpg",
  		"http://eskipaper.com/images/sushi-wallpapers-1.jpg",
  		"http://hdwallsource.com/img/2016/9/sushi-wallpaper-hd-49721-51400-hd-wallpapers.jpg",
  		"https://images3.alphacoders.com/190/190475.jpg",
  		"http://hdwallpaperbackgrounds.net/wp-content/uploads/2015/09/Food-Sushi-Wallpapers-HD.jpg",
  		"http://yesofcorsa.com/wp-content/uploads/2015/07/4546_sushi.jpg",
  		"https://images6.alphacoders.com/333/333488.jpg"
  	];
  	return urls[rand];
}
