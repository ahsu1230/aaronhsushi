'use strict';
var css = require('./../styl/header.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import { NavLinks, getNav, isPathAt } from './constants.jsx';
import { HeaderMenu } from './headerMenu.jsx';
import { HeaderList } from './headerList.jsx';

const navMaxWidth = 720;

export class Header extends React.Component {
	render() {
    const atHome = isPathAt(getNav("home").url);
    const classNames = atHome ? "no-bottom" : "";
		return (
      <div id="view-header" className={classNames}>
        <div id="view-header-container">
          <HeaderLogo/>
          <HeaderNavigator/>
        </div>
      </div>
		);
	}
}

class HeaderLogo extends React.Component {
  render() {
    return (
      <a id="header-logo-container" href="/">
        <div className="header-logo-pic"></div>
        <span className="header-logo-text">Aaron Hsushi</span>
      </a>
    );
  }
}

class HeaderNavigator extends React.Component {
  constructor() {
      super();
      this.state = {
	      showList: false
	    };
      this.updateNav = this.updateNav.bind(this);
  }

  render() {
    const links = NavLinks;
    const headerNav = this.state.showList ? <HeaderList links={links}/> : <HeaderMenu links={links}/>;
    return (
      <div id="header-nav-container">
        {headerNav}
      </div>
    );
  }

  updateNav() {
    var windowWidth = window.innerWidth;
    this.setState({
      showList: windowWidth < navMaxWidth
    });
  }

  componentWillMount() {
		this.updateNav();
	}
	componentDidMount() {
		window.addEventListener("resize", this.updateNav);
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateNav);
	}
}
