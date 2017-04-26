'use strict';
var css = require('./../styles/home.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { GalleryPage } from './gallery.jsx';
import { AboutPage } from './about.jsx';

class MainContainer extends React.Component {
  render() {
  	var hashHistory = Router.hashHistory;
    return (
    	<Router>
    		<div>
		      <Route exact path="/" component={Home}/>
		      <Route path="/gallery" component={Gallery}/>
		      <Route path="/about" component={About}/>
		      
		      <Link to="/">Link1</Link>
		      <Link to="/gallery">Link2</Link>
		      <Link to="/about">Link3</Link>
	      </div>
      </Router>
		);
  }
}

const Home = () => <GalleryPage/>;
const About = () => <AboutPage/>;
const Gallery = () => <GalleryPage/>;

ReactDOM.render(
  <MainContainer/>,
  document.getElementById('container')
);