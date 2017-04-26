'use strict';
var css = require('./../styles/gallery.styl'); 
import React from 'react';
import ReactDOM from 'react-dom';

export class GalleryPage extends React.Component {
	render() {
		var numColumns = 3;
		var columnList = [[], [], []];
		for (var i = 0; i < tiles.length; i++) {
			var columnIndex = i % numColumns;
			columnList[columnIndex].push(tiles[i]);
		}

		const columns = columnList.map((column, index) => 
			<Column key={index} tiles={column}/>
		);

		return (
	  	<div id="view-gallery">
				{columns}
			</div>
		);
	}
}

class Column extends React.Component {
  render() {
  	const tiles = this.props.tiles.map((tile, index) => 
  		<Tile key={index} tile={tile}/>
		);

    return (
    	<div className="column">
				{tiles}
			</div>
		);
  }
}

class Tile extends React.Component {
  render() {
  	const tile = this.props.tile;
  	const imgSrc = tile.source.thumbnailUrl;
    return (
    	<div className="tile" style={{backgroundColor: tile.color}}>
				<img src={imgSrc}/>
			</div>
		);
  }
}

const tile1 = {
	title: "Some Sushi",
	source: {
		thumbnailUrl: "https://scontent.xx.fbcdn.net/v/t1.0-0/p206x206/11156218_2706329777284_910193609496174608_n.jpg?oh=76fe35438770952c78b0e1f2b91c52dd&oe=597E651B",
		fullUrl: "https://scontent.xx.fbcdn.net/v/t31.0-8/11167681_2706329777284_910193609496174608_o.jpg?oh=7107dadb6820eef866ec2d8abcd5c3a2&oe=59746B51"
	},
	color: "#ffbb00"
};
const tile2 = {
	title: "Some other Sushi",
	source: {
		thumbnailUrl: "https://scontent.xx.fbcdn.net/v/t1.0-0/p206x206/10352940_2496991263952_1005846077137632990_n.jpg?oh=be408ab3e2c8e5c3c8e19a38cc1b968e&oe=59958A21",
		fullUrl: "https://scontent.xx.fbcdn.net/v/t1.0-9/10352940_2496991263952_1005846077137632990_n.jpg?oh=fd61d6f68fce12c4f826d2214f62cfba&oe=59909B0C"
	},
	color: "#b38300"
};
const tile3 = {
	title: "Guac Roll",
	source: {
		thumbnailUrl: "https://scontent.xx.fbcdn.net/v/t1.0-0/p206x206/14956382_3294509081399_7030668803048428247_n.jpg?oh=8bb2cabd29259b4c4f869a5a1790189e&oe=597478BB",
		fullUrl: "https://scontent.xx.fbcdn.net/v/t1.0-9/14956382_3294509081399_7030668803048428247_n.jpg?oh=1faebf193d57e2685d257da30782e62f&oe=59941A96"
	},
	color: "#00ffbb"
};
const tiles = [tile2, tile2, tile1, tile3, tile1, tile2, tile2, tile3, tile1, tile3];