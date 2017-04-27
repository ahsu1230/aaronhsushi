'use strict';
var css = require('./../styles/galleryWindow.styl'); 
import React from 'react';
import ReactDOM from 'react-dom';

export class Window extends React.Component {
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
		const imgSrc = this.props.url;
		const width = this.state.dimensions.width;
		const height = this.state.dimensions.height;
		const status = this.state.status;
		const loaded = status == 'loaded';
		return (
			<div className="gallery-window">
				<div className="window-closer-container" onClick={this.props.closeWindow}>
					<img className="window-closer" src="assets/close-black.svg"/>
				</div>
				<div className="window-img-container">
					<div className={"loader-container " + (loaded ? 'hide' : '')}></div>
					<img
			    		src={imgSrc}
						onLoad={this.handleLoaded}
						style={{height: height+"px", width: width+"px"}}
						className={loaded ? 'loaded' : ''}
					/>
				</div>
			</div>
		);
	}
}
