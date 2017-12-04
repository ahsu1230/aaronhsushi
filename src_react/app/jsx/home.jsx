'use strict';
require('./../styl/home.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import { createBackgroundCss } from './constants.jsx';
var classNames = require('classnames');

var imgSrcList = [
	{ src: "./assets/covers/seared_tombo.jpg", "minBgPosition": "80% 50%" },
	{ src: "./assets/covers/octo_plate.jpg", "minBgPosition": "20% 50%" },
	{ src: "./assets/covers/make_nigiri.jpg", "minBgPosition": "center" },
	{ src: "./assets/covers/roll_dragon.jpg", "minBgPosition": "80% 50%" },
];

export class HomePage extends React.Component {
	render() {
		return (
      <div id="view-home">
        <HomeBanner/>
        <HomeText/>
				<HomeGalleryButton/>
      </div>
		);
	}
}

class HomeBanner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgIndex: 0
		};
		this.timer = this.timer.bind(this);
	}

	componentDidMount() {
		var intervalId = setInterval(this.timer, 5000);
		this.setState({intervalId: intervalId});
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
	}

	timer() {
		var nextIndex = (this.state.imgIndex + 1) % imgSrcList.length;
		this.setState({
		 	imgIndex: nextIndex
		});
	}

  render() {
		console.log("banner img render: " + this.state.imgIndex);
		const bannerImgs = imgSrcList.map((src, index) =>
			<BannerImg key={index} src={src.src}
				minBgPosition={src.minBgPosition}
				show={this.state.imgIndex == index}/>
		);
    return (
      <div className="banner-container">
				{bannerImgs}
        <div className="profile-container">
          <div className="profile-pic"></div>
          <div className="profile-text">Aaron Hsu</div>
					<div className="profile-text">Sushi Artist</div>
        </div>
      </div>
    );
  }
}

class BannerImg extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		};
		this.handleOnLoad = this.handleOnLoad.bind(this);
	}

	handleOnLoad() {
		this.setState({ loaded: true });
	}

	render() {
		const imgClasses = classNames("banner-img", {
			"show": this.props.show && this.state.loaded
		});
		const imgSrc = this.props.src;

		var bgPosition = window.innerWidth <= 640 ? this.props.minBgPosition : "center"
		const bannerImgStyle = createBackgroundCss(imgSrc, bgPosition);
		return(
			<div>
				<img className="banner-preloader" src={imgSrc} onLoad={this.handleOnLoad}/>
				<div className={imgClasses} style={bannerImgStyle}></div>
			</div>
		);
	}
}

class HomeText extends React.Component {
  render() {
    return (
      <div className="home-text-container">
        <p>
					Often times, when we Americans talk about sushi, we usually think about sushi rolls or at least some rendition of it, like the <a target="_blank" href="https://www.sushirrito.com/">Sushi Burrito</a>.
					But, having tried <i>omakase (chef's choice)</i> and <i>kaiseki (multi-course)</i> sushi,
					I've discovered a whole new world where sushi comes from unique fish sourced from different parts of the world, or
					textures and flavors that are intentionally designed into simple, elegant packages.
				</p>
				<p>
					And so, I've embarked on this journey to experience this world as much as I can.
					However, I'm not just looking for the different flavors chefs put on the table.
					But also, the stories and inspiration behind them.
					Answers to questions like, "why is the sushi done in this way and whose idea did this originate from?"
				</p>
				<p>
					And after listening to these stories, I immediately start developing stories of my own.
					Whether it is applying newly discovered techniques or using more challenging ingredients, I would always try to take that extra step to try something new.
					And the best part after applying what I learn, is sharing those creations and stories with friends.
					My goal is to give people an experience they can remember, and to share what I love and what I've learned on my adventure.
					And just like how I was inspired to pursue my passion, I hope to inspire others to follow theirs.
				</p>
				<p>
					To follow my adventures, visit my <a href="#/gallery">Gallery</a>.
				</p>
      </div>
    );
  }
}

class HomeGalleryButton extends React.Component {
	render() {
		return (
			<div className="home-gallery-container">
				<a href="#/gallery">
					<img src="./assets/covers/sushi_boat_ice2.jpg"/>
					<div className="home-gallery-overlay"></div>
					<button>Gallery</button>
				</a>
			</div>
		);
	}
}
