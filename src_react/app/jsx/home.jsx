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
				<HomeProfile/>
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
				<div className="banner-text-container">
					<div className="banner-text-headers">
						<h3>Software Engineer</h3>
						<h3>To Sushi Artist</h3>
						<a href="#/gallery">Visit Gallery</a>
					</div>
				</div>
      </div>
    );
  }
}

class HomeProfile extends React.Component {
	render() {
		return (
			<div className="profile-container">
				<div className="profile-pic-wrapper">
					<div className="profile-pic"></div>
				</div>
				<div className="profile-text">Aaron Hsu</div>
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
					Often, when we Americans talk about sushi, we’re picturing sushi rolls or at least some rendition, like the <a target="_blank" href="https://www.sushirrito.com/">Sushi Burrito</a>.
					Once I experienced <i>omakase (chef's choice)</i> and <i>kaiseki (multi-course)</i> sushi, I discovered a whole new world.
					Pieces, at this level of sushi, are sourced from around the world and then constructed into elegant packages full of complex textures and flavors.
				</p>
				<p>
					I've embarked on a personal (soon to be professional!) journey to experience as much of this world as I can.
					It’s not just about the different flavors chefs put on the table;
					I’m interested in the stories and inspiration behind each piece.
					For instance, answers to questions like, "what toppings balance the flavor of this fish?" or "which fish do you want to sear and why?"
				</p>
				<p>
					After listening to these stories, I get inspired to continue developing my own.
					Whether applying newly discovered techniques or using more challenging ingredients,
					I always try to take that extra step to try something new.
					And, of course, the best part is sharing my creations and stories with friends.
					My goal is to give people an experience they can’t forget, while sharing what I love and learn on this adventure.
					And as I was inspired to pursue my passion, I hope to inspire others to follow their own.
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
