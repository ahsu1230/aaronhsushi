'use strict';
var css = require('./../styles/gallery.styl'); 
import React from 'react';
import ReactDOM from 'react-dom';
import { ContentList } from './contentList.jsx';
import { ContentMap } from './contentMap.jsx';
import { Tile } from './galleryTile.jsx';

export class GalleryPage extends React.Component {
	render() {
		var numColumns = 3;
		var columnList = [[], [], []];
		var tiles = getAllTiles();
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

function getAllTiles() {
	var tiles = [];
	for (var i=0; i < ContentList.length; i++) {
		var id = ContentList[i];
		tiles.push(ContentMap[id]);
	}
	return tiles;
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