'use strict';
var css = require('./../styles/galleryTile.styl'); 
import React from 'react';
import ReactDOM from 'react-dom';

export class Tile extends React.Component {
	loadImage(img, url) {
		setTimeout(function() {

		}, 5000);
	}

	render() {
	  	const tile = this.props.tile;
	  	const imgUrl = tile.source.thumbnailUrl;
	    return (
	    	<div className="gallery-tile" style={{backgroundColor: tile.color}}>
				<TileImage imgSrc={imgUrl}/>
			</div>
		);
	}
}

class TileImage extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	dimensions: {},
	    	status: 'loading'
	    };
        this.handleLoaded = this.handleLoaded.bind(this);
	}

	handleLoaded({target:img}) {
		this.setState({
			dimensions: {
				height: img.height,
				width: img.width
			},
	    	status: 'loaded'
		});
	}

	render() {
		const imgSrc = this.props.imgSrc;
		const status = this.state.status;
		const width = this.state.dimensions.width;
		const height = this.state.dimensions.height;
		const loaded = status == 'loaded';
	    return (
	    	<div>
		    	<div className={"loader-container " + (loaded ? 'hide' : '')}></div>
		    	<img
		    		src={imgSrc}
					onLoad={this.handleLoaded}
					style={{height: height+"px", width: width+"px"}}
					className={loaded ? 'loaded' : ''}
				/>
			</div>
		);
	}
}

function returnSampleBigImageUrl() {
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