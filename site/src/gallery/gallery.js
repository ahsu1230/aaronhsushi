import "./gallery.sass";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Banner from "../common/banner.js";
import ImageGallery from "./imageGallery.js";
import Profile from "./profile.js";

class GalleryPage extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };

      goToContactPage = () => {
        const { match, location, history } = this.props;
        history.push("contact");
      }

      render() {
        return (
            <div id="gallery">
                <Banner
                    height={"480px"}
                    bannerImgSrc={"/samples/chef_grinding_crop.jpg"}
                />
    
                <div className="section text">
                    <h2>Concept</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean ornare semper enim, tristique ullamcorper ante
                        posuere in. Ut ac cursus sem, ut consectetur neque.
                        Vestibulum ac augue consectetur libero mattis blandit. Sed
                        dignissim neque iaculis, lacinia erat ultrices, pellentesque
                        purus. Donec ornare justo nec risus convallis aliquam vitae
                        ac nulla.
                    </p>
                </div>
    
                <Banner
                    height={"360px"}
                    title={"Cuisine"}
                    description={
                        "Donec ornare justo nec risus convallis aliquam vitae ac nulla."
                    }
                    bannerImgSrc={"/samples/chef_cut_fish_crop.jpg"}
                    buttonText={"Make a reservation"}
                    buttonOnClick={this.goToContactPage}
                />
    
                <div className="section">
                    <ImageGallery />
                </div>
                <div className="section">
                    <Profile />
                </div>
    
                <Banner
                    height={"360px"}
                    bannerImgSrc={"/samples/serve_nigiri.jpg"}
                    buttonText={"Make a reservation"}
                    buttonOnClick={this.goToContactPage}
                />
            </div>
        );
      }
}

export default withRouter(GalleryPage);