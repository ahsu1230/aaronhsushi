'use strict';
require('./../styles/gallery.styl'); 
import React from 'react';
import ReactDOM from 'react-dom';
import { ContentList } from './contentList.jsx';
import { ContentMap } from './contentMap.jsx';

export class WideLayout extends React.Component {
	render() {
		const show = this.props.show;
		return (
			<div></div>
		);
	}
}
