'use strict';
var _ = require('lodash/core');

export const NavLinks = [
  { id: "home", title: "Home", url: "/"},
	{ id: "gallery", title: "Gallery", url: "/gallery"},
  { id: "inspire", title: "Inspiration", url: "/inspiration"},
  { id: "about", title: "About", url: "/about"},
];

export const ColumnMaxWidth1 = 600;
export const ColumnMaxWidth2 = 800;

export function getNav(id) {
  return _.find(NavLinks, {id: id});
}

export function isPathAt(url) {
  var path = location.hash;
  if (url == getNav("home").url) {
    return path == '#/';
  } else {
    return path.indexOf(url) >= 0;
  }
}

export function isLastIndex(i, num) {
  return i >= num - 1;
}

export function createBackgroundCss(imgSrc) {
	return {
		background: "url(" + imgSrc + ")",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat"
	};
}
