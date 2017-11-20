'use strict';
require('./../styl/about.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import { SectionList, TYPE_BANNER, TYPE_TEXT } from './aboutList.jsx';

function createBackgroundCss(imgSrc) {
	return {
		background: "url(" + imgSrc + ")",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat"
	};
}

export class AboutPage extends React.Component {
	render() {
		const sections = SectionList
			.map((section, index) =>
				<Section key={index} index={index} type={section.type} imgSrc={section.imgSrc} title={section.title} texts={section.texts}/>
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
			return (
				<Banner index={this.props.index} imgSrc={this.props.imgSrc}/>
			);
		} else {
			return (
				<Paragraph title={this.props.title} texts={this.props.texts}/>
			);
		}
	}
}

class Banner extends React.Component {
	render() {
		const backgroundCss = createBackgroundCss(this.props.imgSrc);
		return (
			<div className="about-banner-container">
				<div className="about-banner-img" style={backgroundCss}/>
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
				<div className="about-header-container">
					<div className="about-header">{this.props.title}</div>
				</div>
				{texts}
			</div>
		);
	}
}
