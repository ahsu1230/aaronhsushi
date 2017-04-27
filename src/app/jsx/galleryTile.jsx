'use strict';
var css = require('./../styles/galleryTile.styl'); 
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Window } from './galleryWindow.jsx';

const modalStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    padding				  : '0',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border                : 'none',
    borderRadius		  : '0px'
  }
};

export class Tile extends React.Component {
	constructor() {
	    super();
	    this.state = {
	      modalIsOpen: false
	    };

	    this.openModal = this.openModal.bind(this);
	    this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
	    this.setState({modalIsOpen: true});
	}

	closeModal() {
	    this.setState({modalIsOpen: false});
	}

	render() {
	  	const tile = this.props.tile;
	  	const imgUrl = tile.source.thumbnailUrl;
	    return (
	    	<div className="gallery-tile" style={{backgroundColor: tile.color}} onClick={this.openModal}>
				<TileImage imgSrc={imgUrl}/>
				<Modal
		          isOpen={this.state.modalIsOpen}
		          onRequestClose={this.closeModal}
		          style={modalStyle}
		          contentLabel="Example Modal">
		          <Window url={tile.source.fullUrl} color={tile.color} closeWindow={this.closeModal}/>
		        </Modal>
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
		const width = this.state.dimensions.width;
		const height = this.state.dimensions.height;
		const status = this.state.status;
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