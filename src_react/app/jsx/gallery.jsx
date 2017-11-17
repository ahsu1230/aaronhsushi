'use strict';
var css = require('./../styl/gallery.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import { TileLayout } from './galleryTileLayout.jsx';

var firstLoaded = false;

export class GalleryPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showLoading: !firstLoaded
		};
	}

	render() {
		return (
      <div id="view-gallery">
				<Loader show={this.state.showLoading}/>
				<div id="gallery-content-container" className={this.state.showLoading ? "" : "show"}>
					<p>My Gallery</p>
					<TileLayout/>
				</div>
      </div>
		);
	}

	componentDidMount() {
		if (!firstLoaded) {
			setTimeout(function() {
				this.setState({showLoading: false});
			}.bind(this), 4000);
		}
		firstLoaded = true;
	}
}

class Loader extends React.Component {
	render() {
		return (
			<div id="gallery-load-container" className={this.props.show ? "show" : ""}>
				<div className="gallery-load-text">Loading Gallery</div>

				<div className="gallery-load-pulser">
					<div className="pulse first"></div>
					<div className="pulse second"></div>
					<div className="pulse third"></div>
					<div className="pulse fourth"></div>
				</div>
			</div>
		);
	}
}
