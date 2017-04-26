'use strict';
var css = require('./../styles/header.styl'); 
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

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

function HeaderLinks(props) {
	const items = props.links.map((link) => 
		<HeaderLink key={link.id} title={link.title} url={link.url}/>
	);
	return (
		<Router>
			<div>{items}</div>
		</Router>
	);
}


ReactDOM.render(
  <HeaderLogo isFullWindow={true}/>,
  document.getElementById('header-logo')
);

const links = [
	{ id: "about", title: "About Me", url: "/about"},
	{ id: "gallery", title: "Gallery", url: "/gallery"}
];
ReactDOM.render(
  <HeaderLinks links={links}/>,
  document.getElementById('header-links')
);