'use strict';
require('./../styl/headerMenu.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import { isPathAt, isLastIndex } from './constants.jsx';
var classNames = require('classnames');

export class HeaderMenu extends React.Component {
  render() {
    const numLinks = this.props.links.length;
    const items = this.props.links.map((link, i) =>
      <span key={link.id}>
        <MenuLink title={link.title} url={link.url}/>
        <div className={isLastIndex(i, numLinks) ? "" : "menu-link-separator"}></div>
      </span>
    );
    return (
      <div>{items}</div>
    );
  }
}

class MenuLink extends React.Component {
  render() {
    var linkClasses = classNames("menu-link-container", {
      "active": isPathAt(this.props.url)
    });
    return (
    	<Link to={this.props.url} className={linkClasses}>
    		<span>{this.props.title}</span>
    	</Link>
		);
  }
}
