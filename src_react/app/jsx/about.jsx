'use strict';
var css = require('./../styl/about.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import { SectionList, BannerImgList, TYPE_BANNER, TYPE_TEXT } from './aboutList.jsx';

export class AboutPage extends React.Component {
	render() {
		const sections = SectionList
			.map((section, index) =>
				<Section key={index} index={index} type={section.type} title={section.title} subtitle={section.subtitle} texts={section.texts}/>
			);

		return (
      <div id="view-about">
				{sections}
      </div>
		);
	}
}

class Section extends React.Component {
	render() {
		const type = this.props.type;
		if (type == TYPE_BANNER) {
			return (<Banner index={this.props.index} title={this.props.title} subtitle={this.props.subtitle}/>);
		} else {
			return (<Paragraph texts={this.props.texts}/>);
		}
	}
}

class Banner extends React.Component {
	render() {
		var containerClassName = "about-banner-container";
		containerClassName += " " + BannerImgList[this.props.index / 2];

		return (
			<div className={containerClassName}>
				<div className="banner-overlay"></div>
				<div className="banner-text-container">
					<div className="banner-text">
						<p>{this.props.title}</p>
						<p>{this.props.subtitle}</p>
					</div>
				</div>
			</div>
		);
	}
}

class Paragraph extends React.Component {
	render() {
		const texts = this.props.texts.map((text, index) =>
			<p key={index}>{text}</p>
		);
		return (
			<div className="about-text-container">
				{texts}
			</div>
		);
	}
}
