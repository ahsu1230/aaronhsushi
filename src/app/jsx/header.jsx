'use strict';
var css = require('./../styles/header.styl'); 
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

const links = [
	{ id: "about", title: "About Me", url: "/about"},
	{ id: "gallery", title: "Gallery", url: "/gallery"}
];
					
export class Header extends React.Component {
	render() {
		return (
	  	<div id="header">
	  		<div id="header-container">
	  			<HeaderLogo isFullWindow={true} id="header-logo"/>
	  			<HeaderLinks links={links}/>
	  		</div>
			</div>
		);
	}
}

class HeaderLogo extends React.Component {
  render() {
  	const imgSrc = this.props.isFullWindow ? "assets/logo_full.png" : "assets/logo_small.png";
    return (
    	<a href="/">
			<img src={imgSrc}/>
		</a>
	);
  }
}

function HeaderLinks(props) {
	const items = props.links.map((link) => 
		<HeaderLink key={link.id} title={link.title} url={link.url}/>
	);
	return (
		<div id="header-links">{items}</div>
	);
}

class HeaderLink extends React.Component {
  render() {
    return (
    	<Link to={this.props.url} className="header-link-container">
    		<div>{this.props.title}</div>
    		<div className="header-link-underline"></div>
    	</Link>
		);
  }
}