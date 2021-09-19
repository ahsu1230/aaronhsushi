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
          text1={section.text1}
          text2={section.text2}
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
          bannerImgSrc={
            "https://aaronhsushi.b-cdn.net/banner_hotate_nigiri.jpeg"
          }
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
        <p>{props.text1}</p>
        <p>{props.text2}</p>
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
        <h3 className="action">
          Please join me for your most memorable omakase
        </h3>
        <button onClick={props.onClickAction}>Make a reservation</button>
      </div>
    </div>
  );
}

const sectionContents = [
  {
    subtitle: "How did you make sushi a hobby in the first place?",
    text1:
      "When I moved to the Bay Area for my first Software Engineering job after graduating college, I found that I was surrounded by several Asian markets that sold sushi-grade fresh. Excited to try making sushi at home, I eagerly searched Youtube videos and bought basic equipment from Amazon or local Japanese stores to get started.",
    text2:
      "From there, I started replicating my favorite specialty rolls from restaurants and tried to push the boundaries to creatively include ingredients from other cuisines. My favorite Frankenstein creations are my Salmon-Guacamole rolls with crushed Tostitos lime-hinted chips and torched Brazillian-steak roll topped with grilled pineapples. Check out my Inspiration page to view my library of resources for beginners!",
    imgSrc: "",
  },
  {
    subtitle: "What made you jump from your day job to becoming a sushi chef?",
    text1:
      "After a few years of making sushi as a hobby, I realized I was dawdling too much into superficialities of what I thought sushi was. I realized I knew nothing about the history, art and traditions passed down from generations. And more importantly, I needed to know what it took to become a chef at a restaurant. I wanted the mind, spirit and heart of a sushi chef.",
    text2:
      "At the time, I was living in San Francisco, but I thought New York City would be the best place to learn from Japanese sushi chefs who've learned the traditions from their masters in Japan. When the opportunity came, I took it without hesitation and haven't looked back since. I made sure to notify my parents AFTER I took the new job.",
    imgSrc: "https://aaronhsushi.b-cdn.net/prep_kohada_skin.jpeg",
  },
  {
    subtitle: "What are you doing now?",
    text1:
      "Today, I perform multi-course omakase dinners for guests at my home in Washington D.C. I try my best to welcome guests to an intimate dining stage and serve the highest quality sushi course to the best of my ability. This setting gives guests the opportunity to comfortably enjoy a much more affordable omakase experience and to learn what the art of sushi omakase means to me.",
    imgSrc: "https://aaronhsushi.b-cdn.net/knife_name.jpeg",
  },
];
