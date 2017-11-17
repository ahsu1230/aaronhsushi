'use strict';
require('./../styl/galleryDetails.styl');
import React from 'react';
import ReactDOM from 'react-dom';

export class GalleryDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.toggleDetails = this.toggleDetails.bind(this);
    this.handleDetailsOff = this.handleDetailsOff.bind(this);
  }

  toggleDetails() {
    this.setState({
      show: !this.state.show
    });
  }

  handleDetailsOff() {
    this.setState({
      show: false
    });
  }

  render() {
    return (
      <div>
        <button className="details-btn" onClick={this.toggleDetails}>
          <img src="assets/ellipsis.svg"/>
        </button>
        <div className="details-popup"></div>
        <DetailsPopup content={this.props.content} show={this.state.show} handleDetailsOffFunc={this.handleDetailsOff}/>
      </div>
    );
  }
}

class DetailsPopup extends React.Component {
  render() {
    const showClass = this.props.show ? " show" : "";
    const detailsClasses = "details-popup " + showClass;
	  const ingredients = this.props.content.ingredients.map((ingredient, index) =>
      <Ingredient key={index} ingredient={ingredient}/>
    );
    return (
      <div className={detailsClasses}>
        <button className="details-close-btn" onClick={this.props.handleDetailsOffFunc}>
          <img src="assets/close_black.svg"/>
        </button>
        <h4>Ingredients</h4>
        {ingredients}
      </div>
    );
  }
}

class Ingredient extends React.Component {
	render() {
		const ingredient = this.props.ingredient;
		return (
			<div className="ingredient-row">
				<span>{ingredient}</span>
			</div>
		);
	}
}
