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
	constructor() {
	    super();
	    this.state = {
	      condensed: false
	    };
	    this.condenseLogo = this.condenseLogo.bind(this);
	}
	render() {
		const isCondensed = this.state.condensed;
		const isTransparent = this.props.isTransparent || false;
		return (
	  		<div id="header" className={isTransparent ? "transparent" : ""}>
		  		<div id="header-container">
		  			<HeaderLogo isFullWindow={!isCondensed} id="header-logo"/>
		  			<HeaderLinks links={links}/>
		  		</div>
			</div>
		);
	}
	condenseLogo() {
   	var windowWidth = window.innerWidth;
   	var condensed = windowWidth < 480;
    if (condensed != this.state.condensed) {
    	this.setState({
    		condensed: condensed
			});    		
    }
  }
  componentWillMount() {
      this.condenseLogo();
  }
  componentDidMount() {
      window.addEventListener("resize", this.condenseLogo);
  }
  componentWillUnmount() {
      window.removeEventListener("resize", this.condenseLogo);
  }
}

class HeaderLogo extends React.Component {
  render() {
  	// const imgSrc = this.props.isFullWindow ? "assets/logo_full.png" : "assets/logo_small.png";
    const imgSrc = "assets/logo_small.png";
	const headerHomeText = this.props.isFullWindow ? "Aaron Hsushi" : "";
	return (
    	<a href="/" className="header-home-link">
			<img src={imgSrc}/> 
			<span>{headerHomeText}</span>
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