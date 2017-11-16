'use strict';

export const NavLinks = [
  { id: "home", title: "Home", url: "/"},
  { id: "inspire", title: "Inspiration", url: "/inspiration"},
	{ id: "gallery", title: "Gallery", url: "/gallery"},
  { id: "about", title: "About", url: "/about"},
];

export const ColumnMaxWidth1 = 600;
export const ColumnMaxWidth2 = 800;

export function getHomeLink() {
  return NavLinks[0];
}

export function isPathAt(url) {
  var path = location.hash;
  if (url == getHomeLink().url) {
    return path == '#/';
  } else {
    return path.indexOf(url) >= 0;
  }
}
