import "./gallery.sass";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Analytics from "../common/analytics.js";
import Banner from "../common/banner.js";
import GalleryModal from "./galleryModal.js";
import ImageGallery from "./imageGallery.js";
import CommunityGallery from "./community.js";
import Profile from "./profile.js";

import srcCaretDown from "../assets/caret_down_white.svg";
import { GalleryImages, CommunityImages } from "./images";
class GalleryPage extends React.Component {
    constructor(props) {
        super(props);
        this.divToFocus = React.createRef();
        this.state = {
            showModal: false,
            selectedImageId: undefined,
            images: GalleryImages,
        };
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };

    componentDidMount() {
        Analytics.track("page_gallery");
    }

    goToContactPage = () => {
        const { match, location, history } = this.props;
        history.push("contact");
    };

    onClickGalleryImage = (imageId) => {
        this.setState({
            showModal: true,
            selectedImageId: imageId,
            images: GalleryImages,
        });
    };

    onClickCommunityImage = (imageId) => {
        this.setState({
            showModal: true,
            selectedImageId: imageId,
            images: CommunityImages,
        });
    };

    onSwitchImage = (imageId) => {
        this.setState({
            showModal: true,
            selectedImageId: imageId,
        });
    };

    onCloseModal = () => {
        this.setState({
            showModal: false,
            selectedImageId: undefined,
        });
    };

    render() {
        return (
            <div id="gallery">
                <HomeBanner divToFocus={this.divToFocus} />

                <div className="section text">
                    <h3 className="first-title">
                        An elegant omakase brought to you
                        <br />
                        in a welcoming home
                    </h3>
                </div>

                <div className="section" ref={this.divToFocus}>
                    <ImageGallery onClickImage={this.onClickGalleryImage} />
                </div>

                <Banner
                    height={"560px"}
                    bannerImgSrc={
                        "https://aaronhsushi.b-cdn.net/banner_homakase1.jpg"
                    }
                    buttonText={"Make a reservation"}
                    buttonOnClick={this.goToContactPage}
                    notHeader={true}
                />

                <div className="section">
                    <CommunityGallery
                        onClickImage={this.onClickCommunityImage}
                    />
                </div>

                <div className="section">
                    <Profile />
                </div>

                <Banner
                    height={"400px"}
                    title={"Passion, Technique, and Connection"}
                    bannerImgSrc={
                        "https://aaronhsushi.b-cdn.net/banner_table_setup.jpg"
                    }
                    buttonText={"Make a reservation"}
                    buttonOnClick={this.goToContactPage}
                    notHeader={true}
                />

                <GalleryModal
                    show={this.state.showModal}
                    selectedImageId={this.state.selectedImageId}
                    onSwitchImage={this.onSwitchImage}
                    images={this.state.images}
                    onClose={this.onCloseModal}
                />
            </div>
        );
    }
}

export default withRouter(GalleryPage);

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
};

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = React.useState(
        getWindowDimensions()
    );

    React.useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
};

const HomeBanner = (props) => {
    const { height, width } = useWindowDimensions();
    let bannerHeight;
    if (height > 640) {
        // 'height - ???px', 480 is approx the height of the header
        bannerHeight = width <= 480 ? height - 480 : height;
    } else {
        bannerHeight = height - 120;
    }
    return (
        <div id="home-banner">
            <Banner
                height={bannerHeight + "px"}
                bannerImgSrc={
                    "https://aaronhsushi.b-cdn.net/banner_home_me.jpeg"
                }
                overlayAlpha={0.4}
            />
            <button
                className="caret"
                onClick={() => {
                    if (props.divToFocus && props.divToFocus.current) {
                        props.divToFocus.current.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                        });
                    }
                }}>
                <img src={srcCaretDown} />
            </button>
        </div>
    );
};
