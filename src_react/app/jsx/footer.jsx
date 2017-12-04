'use strict';
require('./../styl/footer.styl');
import React from 'react';
import ReactDOM from 'react-dom';
var classNames = require('classnames');

const socialLinks = [
	{
		id: 'ig',
		url: 'https://www.instagram.com/mooseyhsushi/'
	},
	{
		id: 'li',
		url: 'https://www.linkedin.com/in/aaron-hsu-7b053238/'
	}
];

export class Footer extends React.Component {
	render() {
		const socialFooters = socialLinks.map((social) =>
			<FooterIcon key={social.id} social={social}/>
		);

		return (
      <div id="view-footer">
				<div id="footer-container">
					<div id="footer-text-container">
						Designed and created by <b>Aaron Hsu</b>
					</div>
					<div id="footer-social-container">
						{socialFooters}
					</div>
				</div>
      </div>
		);
	}
}



class FooterIcon extends React.Component {
	render() {
		const social = this.props.social;
		const buttonClasses = classNames("footer-icon", social.id);
		return (
			<a href={social.url} target="_blank">
				<button className={buttonClasses}></button>
			</a>
		);
	}
}
