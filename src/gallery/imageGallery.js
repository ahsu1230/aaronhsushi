import "./imageGallery.sass";

import React from "react";
import { GalleryImages, FindIdFromSrc } from "./galleryImages.js";

export default class ImageGallery extends React.Component {
  render() {
    const cards = GalleryImages.map((image, index) => (
      <GalleryCard
        key={index}
        image={image}
        onClickCard={this.props.onClickGalleryImage}
      />
    ));
    return (
      <div id="image-gallery">
        <div className="gallery-container">{cards}</div>
      </div>
    );
  }
}

class GalleryCard extends React.Component {
  onClickCard = (e) => {
    const detectedId = FindIdFromSrc(e.target.currentSrc);
    this.props.onClickCard(detectedId);
  };

  render() {
    return (
      <div className="gallery-card" onClick={this.onClickCard}>
        <img src={this.props.image.imageSrc} />
      </div>
    );
  }
}
