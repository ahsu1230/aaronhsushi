'use strict';
var css = require('./../styl/headerMenu.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import { isPathAt } from './constants.jsx';

export class HeaderMenu extends React.Component {
  render() {
    const items = this.props.links.map((link) =>
      <MenuLink key={link.id} title={link.title} url={link.url}/>
    );
    return (
      <div>{items}</div>
    );
  }
}

class MenuLink extends React.Component {
  render() {
    var classNames = "menu-link-container";
    classNames += isPathAt(this.props.url) ? " active" : "";
    return (
    	<Link to={this.props.url} className={classNames}>
    		<span>{this.props.title}</span>
    	</Link>
		);
  }
}
