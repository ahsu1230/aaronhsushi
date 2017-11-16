'use strict';
var css = require('./../styl/home.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import { AboutPage } from './about.jsx';
import { GalleryPage } from './gallery.jsx';
import { Header } from './header.jsx';
import { HomePage } from './home.jsx';
import { InspirePage } from './inspire.jsx';
import { Footer } from './footer.jsx';

class MainContainer extends React.Component {
	render() {
		return (
			<Router>
				<div>
          <Header/>
					<Route exact path="/" component={Home}/>
          <Route path="/inspiration" component={Inspiration}/>
					<Route path="/gallery" component={Gallery}/>
					<Route path="/about" component={About}/>
          <Footer/>
				</div>
			</Router>
		);
	}
}

const Home = () => <HomePage/>;
const Inspiration = () => <InspirePage/>;
const Gallery = () => <GalleryPage/>;
const About = () => <AboutPage/>;

ReactDOM.render(
  <MainContainer/>,
  document.getElementById('root')
);
