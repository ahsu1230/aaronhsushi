'use strict';
var css = require('./../styl/footer.styl');
import React from 'react';
import ReactDOM from 'react-dom';

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
				<div id="footer-text-container">
					<p className="footer-line">
						Designed and created by<br/>
						<span className="bold">Aaron Hsu</span>
					</p>
					<p className="footer-line">
						To continue keeping up with my adventures,<br/>
						Follow me on social media!
					</p>
				</div>
				<div id="footer-social-container">
					{socialFooters}
				</div>
      </div>
		);
	}
}



class FooterIcon extends React.Component {
	render() {
		const social = this.props.social;
		const classNames = "footer-icon " + social.id;
		return (
			<a href={social.url} target="_blank">
				<button className={classNames}></button>
			</a>
		);
	}
}
