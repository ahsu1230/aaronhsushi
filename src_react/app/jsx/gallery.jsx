'use strict';
var css = require('./../styl/gallery.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import { TileLayout } from './galleryTileLayout.jsx';

export class GalleryPage extends React.Component {
	render() {
		return (
      <div id="view-gallery">
        <TileLayout/>
      </div>
		);
	}
}
