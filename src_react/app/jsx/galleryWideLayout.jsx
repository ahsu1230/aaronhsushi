'use strict';
require('./../styles/galleryWide.styl'); 
import React from 'react';
import ReactDOM from 'react-dom';
import { ContentList } from './contentList.jsx';
import { ContentMap } from './contentMap.jsx';

export class WideLayout extends React.Component {
	render() {
		const show = this.props.show;
		const showClassName = show ? "show" : "";
		
		return (
			<div id="gallery-wide-view" className={showClassName}>
				<div id="gallery-wide-content">
				</div>
			</div>
		);
	}
}
