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
				<div className="banner-img">
					<div className="banner-overlay"></div>
					<div className="profile-container">
						<div className="profile-img-wrapper">
							<div className="profile-img"/>
						</div>
						<h3>Aaron Hsu</h3>
						<h4>A student to the art of sushi</h4>
					</div>
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
					<p className="half-section">
						{BiographyContent1}
					</p>
					<img className="half-section" src="assets/sushi_boat_ice0.jpg"/>
				</div>
				<div className="about-content-section">
					<p>
						{BiographyContent2}
					</p>
				</div>
				<div className="about-content-section">
					<img className="collage" src="assets/nigiri_platter0.jpg"/>
					<img className="collage" src="assets/sushi_art0.jpg"/>
				</div>
				<div className="about-content-section">
					<p>
						{BiographyContent3}
					</p>
					<p>
						To continue following my adventure, follow me through my Instagram <a href="https://www.instagram.com/mooseyhsushi/" target="_blank">@mooseyhsushi</a>.
					</p>
				</div>
			</div>
		);
	}
}

const BiographyContent1 = "Born and raised in Potomac, Maryland, "
 + "I ate my first sushi at the age of 10 and fell in love with it since. "
 + "It began when I started frequently visiting this then quiet restaurant in Germantown city. "
 + "As a kid, I was always there - whether it was to celebrate a huge achievement (like getting an honorable mention from a piano competition - yes it was huge for me) "
 + "or to take advantage of their lunch buffets, I was always there. "
 + "More than 15 years later, this now infamous and constantly-bustling restaurant, Yuraku, still has a place in my heart and has been a great inspiration to me. "
 ;
 
 const BiographyContent2 = "I made my first roll when I moved out to Bay Area, California. "
  + "Thankfully, many Bay Area markets have sashimi grade fish, so it's an excellent place to make your own sushi. "
  + "I watched a couple of Youtube videos, and started with a few basic maki rolls. "
  + "From there, I wanted to upgrade my skills and started making my all-time favorite signature rolls, some of which include Yuraku's Triple Salmon rolls and the Rainbow Roll. "
  + "Since then, my adventure started. I constantly sought to challenge myself to the point of travelling across the Bay Area to specifically go to certain Asian markets in search of particular fish and ingredients I wanted to work with. "
  
  
const BiographyContent3 = "This site is here to help me remember the dedication I've put into exploring my more creative side. "
 + "But I also hope that throughout my journey, as I share my art of sushi with friends and family, that I may also inspire others to also discover a side of them that they've never explored before."
 ;