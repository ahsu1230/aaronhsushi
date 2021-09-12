import "./story.sass";

import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Banner from "../common/banner.js";

const SECTION_CLASS_NAMES = ["white center", "light left", "dark right"];

class StoryPage extends React.Component {
    constructor(props) {
        super(props);
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
        const sections = sectionContents.map((section, index) => {
            return (
                <StorySection
                    key={index}
                    subtitle={section.subtitle}
                    text={section.text}
                    index={index}
                    imgSrc={section.imgSrc}
                />
            );
        });
        return (
            <div id="story">
                <Banner
                    height="320px"
                    mainTitle={"My Story"}
                    bannerImgSrc={"/samples/chef_cut_fish_crop.jpg"}
                />
                {sections}
                <ActionSection onClickAction={this.goToContactPage} />
            </div>
        );
    }
}

export default withRouter(StoryPage);

function StorySection(props) {
    const classTypes =
        SECTION_CLASS_NAMES[props.index % SECTION_CLASS_NAMES.length];
    const classNames = "story-section " + classTypes;

    return (
        <div className={classNames}>
            <div className="content">
                <h3>{props.subtitle}</h3>
                <p>{props.text}</p>
            </div>
            {props.imgSrc && (
                <div className="img-container">
                    <img src={props.imgSrc} />
                </div>
            )}
        </div>
    );
}

function ActionSection(props) {
    return (
        <div className="story-section white center action">
            <div className="content">
                <h3>Please join me for your most memorable omakase</h3>
                <button onClick={props.onClickAction}>
                    Make a reservation
                </button>
            </div>
        </div>
    );
}

const sectionContents = [
    {
        subtitle: "Software Engineer to Sushi Chef",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare semper enim, tristique ullamcorper ante posuere in. Ut ac cursus sem, ut consectetur neque. Vestibulum ac augue consectetur libero mattis blandit. Sed dignissim neque iaculis, lacinia erat ultrices, pellentesque purus. Donec ornare justo nec risus convallis aliquam vitae ac nulla.",
        imgSrc: "",
    },
    {
        subtitle: "Section B",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare semper enim, tristique ullamcorper ante posuere in. Ut ac cursus sem, ut consectetur neque. Vestibulum ac augue consectetur libero mattis blandit. Sed dignissim neque iaculis, lacinia erat ultrices, pellentesque purus. Donec ornare justo nec risus convallis aliquam vitae ac nulla.",
        imgSrc: "/samples/gallery1.png",
    },
    {
        subtitle: "Section C",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare semper enim, tristique ullamcorper ante posuere in. Ut ac cursus sem, ut consectetur neque. Vestibulum ac augue consectetur libero mattis blandit. Sed dignissim neque iaculis, lacinia erat ultrices, pellentesque purus. Donec ornare justo nec risus convallis aliquam vitae ac nulla.",
        imgSrc: "/samples/gallery6.png",
    },
];
