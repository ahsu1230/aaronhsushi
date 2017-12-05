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
					I’ve been working as a Software Engineer for the past 5 years,
					but my real passion has been teaching myself the art of sushi.
					I’ve dedicated a huge portion of time outside of work to hone my sushi crafting,
					not just as a cuisine, but also as an art form.
					It’s been a great run in the tech industry,
					but I’m ready to focus on taking my skills with sushi to a professional level.
					So I’m looking to start a full-time apprenticeship at a renowned restaurant
					to learn from the best chefs in the industry.
				</p>
				<p>
					I developed this website to showcase both my sushi and software skills.
					My time in the tech industry has given me experience with customer service,
					expanding social media presence, and designing websites.
					And with these skills, I’m more than happy to help manage any website or social media needs.
				</p>
				<p>
					To follow my sushi journey, visit my <a href="#/gallery">Gallery</a>.
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
