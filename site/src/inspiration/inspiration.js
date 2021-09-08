import "./inspiration.sass";
import React from "react";
import Banner from "../common/banner.js";
import InspirationFish from "./inspirationFish.js";
import InspirationRestaurants from "./inspirationRestaurants.js";
import InspirationHowTo from "./inspirationHowTo.js";

const selectionMyFish = "my_fish";
const selectionRecs = "restaurant_recs";
const selectionHowTo = "how_to";

export default function InspirationPage() {
    return (
        <div id="inspiration">
            <Banner
                height={"320px"}
                mainTitle={"Inspiration"}
                bannerImgSrc={"/samples/chef_grinding_crop.jpg"}
            />
            <Selector />
        </div>
    );
}

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
                        <div className="overlay"/>
                        <img src={"/trueworldfoods.png"} />
                        <p>Where do you get your fresh fish?</p>
                    </div>
                    <div
                        className="select-container"
                        onClick={() => this.onSelect(selectionRecs)}>
                        <div className="overlay"/>
                        <img src={"/trueworldfoods.png"} />
                        <p>Favorite Sushi Restaurants</p>
                    </div>
                    <div
                        className="select-container"
                        onClick={() => this.onSelect(selectionHowTo)}>
                        <div className="overlay"/>
                        <img src={"/trueworldfoods.png"} />
                        <p>How can I start making sushi?</p>
                    </div>
                </div>
                <div className="select-view">
                    {this.state.selection == selectionMyFish && <InspirationFish />}
                    {this.state.selection == selectionRecs && <InspirationRestaurants />}
                    {this.state.selection == selectionHowTo && <InspirationHowTo />}
                </div>
            </div>
        );
    }
}
