import "./community.sass";

import React from "react";
import { CommunityImages, GetThumbnailSrc } from "./images.js";

export default class CommunityGallery extends React.Component {
    render() {
        const cards = CommunityImages.map((image, index) => (
            <CommunityCard
                key={index}
                image={image}
                onClickCard={this.props.onClickImage}
            />
        ));
        return (
            <div id="image-community">
                <div className="community-container">{cards}</div>
            </div>
        );
    }
}

class CommunityCard extends React.Component {
    onClickCard = () => {
        this.props.onClickCard(this.props.image.id);
    };

    render() {
        const image = this.props.image;
        const thumbSrc = GetThumbnailSrc(image.id);
        return (
            <div className="community-card" onClick={this.onClickCard}>
                <img src={thumbSrc} />
            </div>
        );
    }
}
