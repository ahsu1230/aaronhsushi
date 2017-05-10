'use strict';
var css = require('./../styles/about.styl'); 
import React from 'react';
import { Header } from './header.jsx';

export class AboutPage extends React.Component {
	render() {
		return (
			<div id="view-about">
				<Header isTransparent={true}/>
	  			<AboutBanner/>
	  			<AboutContent/>
	  		</div>
		);
	}
}

class AboutBanner extends React.Component {
	render() {
		return (
			<div className="banner-container">
				<div className="banner-overlay"></div>
				<div className="profile-container">
					<div className="profile-img-wrapper">
						<div className="profile-img"/>
					</div>
					<h3>Aaron Hsu</h3>
					<h4>A student to the art of sushi</h4>
				</div>
			</div>
		);
	}
}

class AboutContent extends React.Component {
	render() {
		return (
			<div>
			</div>
		);
	}
}