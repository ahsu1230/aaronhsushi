'use strict';
var css = require('./../styles/home.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import { Header } from './header.jsx';
import { GalleryPage } from './gallery.jsx';
import { AboutPage } from './about.jsx';

class MainContainer extends React.Component {
  render() {
    return (
    	<Router>
    		<div>
    			<Header/>
					<div id="container">
						<Route exact path="/" component={Home}/>
			      <Route path="/gallery" component={Gallery}/>
			      <Route path="/about" component={About}/>
					</div> 
	      </div>
      </Router>
		);
  }
}

const Home = () => <GalleryPage/>;
const Gallery = () => <GalleryPage/>;
const About = () => <AboutPage/>;

ReactDOM.render(
  <MainContainer/>,
  document.getElementById('root')
);