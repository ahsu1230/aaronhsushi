import "./inspiration.sass";
import React from "react";
import { withRouter } from "react-router-dom";
import mixpanel from "mixpanel-browser";
import Banner from "../common/banner.js";
import InspirationMyFish from "./inspirationMyFish.js";
import InspirationRestaurants from "./inspirationRestaurants.js";
import InspirationBuyFish from "./inspirationBuyFish.js";
import InspirationHowTo from "./inspirationHowTo.js";

const selectionMyFish = "my_fish";
const selectionRecs = "restaurant_recs";
const selectionBuyFish = "buy_fish";
const selectionHowTo = "how_to";

class InspirationPage extends React.Component {
    componentDidMount() {
        if (process.env.NODE_ENV === "production") {
            mixpanel.track("page_gallery");
        }
    }

    render() {
        return (
            <div id="inspiration">
                <Banner
                    height={"320px"}
                    mainTitle={"Inspiration"}
                    bannerImgSrc={
                        "https://aaronhsushi.b-cdn.net/banner_sashimi_medley.jpg"
                    }
                />
                <Selector />
            </div>
        );
    }
}

export default withRouter(InspirationPage);

class Selector extends React.Component {
    state = {
        selection: selectionMyFish,
    };

    onSelect = (selection) => {
        this.setState({
            selection: selection,
        });
    };

    render() {
        return (
            <div className="selector">
                <div className="selections">
                    <div
                        className="select-container"
                        onClick={() => this.onSelect(selectionMyFish)}>
                        <div className="overlay" />
                        <img src={"/fresh_fish/trueworldfoods.png"} />
                        <p>Where do you get your fresh fish?</p>
                    </div>
                    <div
                        className="select-container"
                        onClick={() => this.onSelect(selectionRecs)}>
                        <div className="overlay" />
                        <img src={"/restaurants/kosaka_outside.jpg"} />
                        <p>Favorite Sushi Restaurants</p>
                    </div>
                    <div
                        className="select-container"
                        onClick={() => this.onSelect(selectionBuyFish)}>
                        <div className="overlay" />
                        <img src={"/fresh_fish/people_buying_fish.jpg"} />
                        <p>Where can I buy fresh fish?</p>
                    </div>
                    <div
                        className="select-container"
                        onClick={() => this.onSelect(selectionHowTo)}>
                        <div className="overlay" />
                        <img src={"/youtube_channels/akira-san1.png"} />
                        <p>How can I start making sushi?</p>
                    </div>
                </div>
                <div className="select-view">
                    {this.state.selection == selectionMyFish && (
                        <InspirationMyFish />
                    )}
                    {this.state.selection == selectionRecs && (
                        <InspirationRestaurants />
                    )}
                    {this.state.selection == selectionBuyFish && (
                        <InspirationBuyFish />
                    )}
                    {this.state.selection == selectionHowTo && (
                        <InspirationHowTo />
                    )}
                </div>
            </div>
        );
    }
}
