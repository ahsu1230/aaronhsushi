'use strict';
var css = require('./../styl/home.styl');
import React from 'react';
import ReactDOM from 'react-dom';

export class HomePage extends React.Component {
	render() {
		return (
      <div id="view-home">
        <HomeBanner/>
        <HomeText/>
      </div>
		);
	}
}

class HomeBanner extends React.Component {
  render() {
    return (
      <div className="banner-container">
        <div className="banner-pic"></div>
        <div className="banner-overlay"></div>
        <div className="profile-container">
          <div className="profile-pic"></div>
          <div className="profile-text">Aaron Hsu</div>
					<div className="profile-text">A student to the art of sushi</div>
        </div>
      </div>
    );
  }
}

class HomeText extends React.Component {
  render() {
    return (
      <div className="home-text-container">
        <p>
          Welcome, this portfolio is meant to show people what I've achieved and learned throughout my sushi adventures.
					I started making sushi 3 years ago after I moved to Bay Area, California for a software engineer career.
					And as a hobby, I enjoy making sushi and am always looking to take my skills to the next level.
        </p>
				<p>
					To start looking at my sushi, visit my <a href="#/gallery">Gallery</a>.
				</p>
      </div>
    );
  }
}
