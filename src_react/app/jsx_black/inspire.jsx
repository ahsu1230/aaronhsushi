'use strict';
var css = require('./../styl/inspire.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import { CardsSources, CardsFavorites } from './inspireList.jsx';

export const CATEGORY_FAVORITE = 'favorite';
export const CATEGORY_SOURCE = 'source';

export class InspirePage extends React.Component {
	render() {
		const cardsSource = CardsSources.map((card, index) =>
			<InspireCard key={index} card={card} category={CATEGORY_SOURCE} categoryIndex={index+1} categoryTotal={CardsSources.length}/>
		);
		const cardsFav = CardsFavorites.map((card, index) =>
			<InspireCard key={index} card={card} category={CATEGORY_FAVORITE} categoryIndex={index+1} categoryTotal={CardsFavorites.length}/>
		);

		return (
      <div id="view-inspire">
				<Banner/>
				{cardsFav}
				{cardsSource}
      </div>
		);
	}
}

class Banner extends React.Component {
	render() {
		return (
			<div id="inspire-banner-container">
				<div className="banner-overlay"></div>
				<div className="banner-text">
					<p className="bold">
						Two questions I always get asked.
					</p>
					<p>
						"What is your favorite place for sushi?"<br/>
						"Where do you get your fish?"
					</p>
					<p>
						Here's a list of my favorite places that I've been to<br/>
						and preferred markets for training and catering.
					</p>
				</div>
			</div>
		);
	}
}

class InspireCard extends React.Component {
	render() {
		const card = this.props.card;
		const header = this.props.category == CATEGORY_FAVORITE ? "Personal Favorites" : "My Markets";
		const categoryClassName = this.props.category == CATEGORY_FAVORITE ? "favorite" : "source";
		const containerNames = "card-container " + categoryClassName;
		const headerNames = "card-header " + categoryClassName;
		return (
			<div className={containerNames}>

				<div className={headerNames}>
					<div className="card-header-icon"></div>
					<div className="card-header-text">{header}</div>
				</div>

				<div className="card-col1">
					<img src={card.imgSrc}/>
				</div>

				<div className="card-col2">
					<div className="card-title">{card.title}</div>
					<div className="card-subtitle">{card.subtitle}</div>
					<a className="card-url" href={card.url} target="_blank">{card.url}</a>
					<div className="card-description">{card.description}</div>
					<div className="card-counter">{this.props.categoryIndex} / {this.props.categoryTotal}</div>
				</div>

			</div>
		);
	}
}