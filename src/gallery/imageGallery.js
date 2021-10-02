import "./imageGallery.sass";

import React from "react";
import { GalleryImages, GetThumbnailSrc } from "./galleryImages.js";

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
    onClickCard = () => {
        this.props.onClickCard(this.props.image.id);
    };

    render() {
        const image = this.props.image;
        const thumbSrc = GetThumbnailSrc(image.imageSrc);
        return (
            <div className="gallery-card" onClick={this.onClickCard}>
                <img src={thumbSrc} />
            </div>
        );
    }
}
