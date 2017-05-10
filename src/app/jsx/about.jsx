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
			<div id="content-about">
				<div className="about-content-section">
					<img src="assets/sushi_boat_ice0.jpg"/>
					<span>
						Born and raised in Potomac, Maryland, Aaron ate his first sushi at the age of 10 and loved sushi since. The restaurant that will always have a place in his heart is Yuraku in Germantown, MD. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus eleifend mi. Cras ut tristique nisl, et facilisis ex. Suspendisse efficitur lorem diam, ut ultricies leo porttitor id. In hendrerit porttitor arcu, id fringilla magna suscipit sit amet. Sed tincidunt mi ut arcu laoreet, sed rutrum leo lobortis. Sed ac urna in ex posuere pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed nisl tortor. Nulla facilisi.
					</span>
				</div>
				<div className="about-content-section">
					<h3>Connect with me</h3>

				</div>
			</div>
		);
	}
}