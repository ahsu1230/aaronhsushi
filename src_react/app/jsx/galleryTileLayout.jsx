'use strict';
require('./../styles/galleryTile.styl'); 
import React from 'react';
import ReactDOM from 'react-dom';
import { ContentList } from './contentList.jsx';
import { ContentMap } from './contentMap.jsx';
import { Tile } from './galleryTile.jsx';

const columnMaxWidth1 = 600;
const columnMaxWidth2 = 800;

export class TileLayout extends React.Component {
	constructor() {
	    super();
	    this.state = {
	      numColumns: 0
	    };
	    this.updateColumns = this.updateColumns.bind(this);
	}
	
	render() {
		const show = this.props.show;
		const showClassName = show ? "show" : "";
		
		const numColumns = this.state.numColumns;
		console.log('render: ' + numColumns);
		var columnList = createColumnList(numColumns);
		var tiles = getAllTiles();
		for (var i = 0; i < tiles.length; i++) {
			var columnIndex = i % numColumns;
			columnList[columnIndex].push(tiles[i]);
		}
		
		const columns = columnList.map((column, index) => 
			<Column key={index} tiles={column} columnIndex={index} numColumns={numColumns}/>
		);

		return (
			<div id="gallery-tile-view" className={showClassName}>
				{columns}
			</div>
		);
	}
	
	updateColumns() {
		var numColumns = 0;
		var windowWidth = window.innerWidth;
		if (windowWidth < columnMaxWidth1) {
			numColumns = 1;
		} else if (windowWidth < columnMaxWidth2) {
			numColumns = 2;
		} else {
			numColumns = 3;
		}
		if (numColumns != this.state.numColumns) {
			console.log('change num columns to ' + numColumns);
			this.setState({
				numColumns: numColumns
				});    		
		}
	}
	componentWillMount() {
		this.updateColumns();
	}
	componentDidMount() {
		window.addEventListener("resize", this.updateColumns);
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateColumns);
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

function createColumnList(numColumns) {
	var list = [];
	for (var i = 0; i < numColumns; i++) {
		list.push([]);
	}
	return list;
}

class Column extends React.Component {
  	render() {
	  	const tiles = this.props.tiles.map((tile, index) =>
	  		<Tile key={index} tile={tile}/>
			);

			const marginSpace = 12;
			const columnIndex = this.props.columnIndex;
			const numColumns = this.props.numColumns;
			const totalMargin = (numColumns - 1) * (marginSpace / numColumns);
			
			var marginLeft = 0;
			var marginRight = 0;
			if (numColumns == 2) {
				if (columnIndex == 0) {
					marginRight = marginSpace;
				}
			} else if (numColumns == 3) {
				if (columnIndex == 1) {
					marginLeft = marginSpace;
					marginRight = marginSpace;
				}
			}
			
			const colWidth = "calc(" + ((100 / numColumns) + '%') + " - " + totalMargin + "px)";
			
	    return (
				<div className="column" style={{width: colWidth, marginLeft: marginLeft + 'px', marginRight: marginRight + 'px'}}>
					{tiles}
				</div>
			);
  	}
}
