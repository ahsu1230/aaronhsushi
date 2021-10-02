import "./galleryModal.sass";
import React from "react";
import {
    GalleryImages,
    GetFullImageSrc,
    GetImageById,
    GetImageIndexById,
} from "./galleryImages.js";

import iconArrowLeft from "./../assets/arrow_left_white.svg";
import iconArrowRight from "./../assets/arrow_right_white.svg";
import iconClose from "./../assets/close_white.svg";

export default class GalleryModal extends React.Component {
    onClickLeft = () => {
        const currentIndex = GetImageIndexById(this.props.selectedImageId);
        const nextIndex =
            (currentIndex - 1 + GalleryImages.length) % GalleryImages.length;
        const nextImageId = GalleryImages[nextIndex].id;
        this.props.onSwitchImage(nextImageId);
    };

    onClickRight = () => {
        const currentIndex = GetImageIndexById(this.props.selectedImageId);
        const nextIndex = (currentIndex + 1) % GalleryImages.length;
        const nextImageId = GalleryImages[nextIndex].id;
        this.props.onSwitchImage(nextImageId);
    };

    onDismiss = () => {
        this.setState({
            imageId: undefined,
        });
        this.props.onClose();
    };

    render() {
        const show = this.props.show;
        const selectedImageId = this.props.selectedImageId;
        const selectedImage = GetImageById(selectedImageId) || {};
        const fullImageSrc = GetFullImageSrc(selectedImageId);

        const modalClassNames = show ? "show" : "";
        return (
            <div id="gallery-modal" className={modalClassNames}>
                <div className="overlay"></div>

                <button className="close" onClick={this.onDismiss}>
                    <img src={iconClose} />
                </button>
                <button className="left" onClick={this.onClickLeft}>
                    <img src={iconArrowLeft} />
                </button>
                <button className="right" onClick={this.onClickRight}>
                    <img src={iconArrowRight} />
                </button>

                <div className="modal">
                    <img src={fullImageSrc} />
                    <div className="caption">
                        <p>{selectedImage.caption}</p>
                    </div>
                </div>
            </div>
        );
    }
}
