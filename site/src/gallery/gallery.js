import "./gallery.sass";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Banner from "../common/banner.js";
import ImageGallery from "./imageGallery.js";
import Profile from "./profile.js";
import srcCaretDown from "../assets/caret_down_white.svg";
class GalleryPage extends React.Component {
    constructor(props) {
        super(props);
        this.divToFocus = React.createRef()
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };

    goToContactPage = () => {
        const { match, location, history } = this.props;
        history.push("contact");
    };

    render() {
        return (
            <div id="gallery">
                <HomeBanner divToFocus={this.divToFocus}/>

                <div className="section text">
                    <h2>Concept</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean ornare semper enim, tristique ullamcorper ante
                        posuere in. Ut ac cursus sem, ut consectetur neque.
                        Vestibulum ac augue consectetur libero mattis blandit.
                        Sed dignissim neque iaculis, lacinia erat ultrices,
                        pellentesque purus. Donec ornare justo nec risus
                        convallis aliquam vitae ac nulla.
                    </p>
                </div>

                <div className="section" ref={this.divToFocus}>
                    <ImageGallery />
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

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());
  
    React.useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
}

const HomeBanner = (props) => {
    const { height, width } = useWindowDimensions();

    return (
        <div id="home-banner">
            <Banner
                height={(height - 220) + "px"}
                bannerImgSrc={"/samples/chef_grinding_crop.jpg"}
                overlayAlpha={0.4}
            />
            <button className="caret" onClick={() => {
                if(props.divToFocus && props.divToFocus.current){
                    props.divToFocus.current.scrollIntoView({ 
                        behavior: "smooth", 
                        block: "nearest"
                    });
                }
            }}>
                <img src={srcCaretDown}/>
            </button>
        </div>
    );
}