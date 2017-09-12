'use strict';
require('./../styles/galleryDetails.styl');

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
    const content = this.props.content;
    const ingredients = content.ingredients.map((ingredient, index) =>
      <Ingredient key={index} ingredient={ingredient}/>
    );

    return (
      <div>
        <button className="details-btn" onClick={this.toggleDetails}>
          <img src="assets/ellipsis.svg"/>
        </button>
        <div className="details-popup"></div>
        <DetailsPopup content={content} show={show}/>
      </div>
    );
  }
}

class DetailsPopup extends React.Component {
  render() {
    const showClass = this.props.show ? " show" : "";
    const detailsClasses = "details-popup " + showClass;
    return (
      <div className={detailsClasses}>
        <button className="details-close-btn" onClick={this.handleDetailsOff}>
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
				<div className="ingredient-img"></div>
				<span>{ingredient}</span>
			</div>
		);
	}
}
