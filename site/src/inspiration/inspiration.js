import "./inspiration.sass";
import React from "react";

const selectionMyFish = "my_fish";
const selectionRecs = "restaurant_recs";
const selectionHowTo = "how_to";

export default function InspirationPage() {
    return (
        <div id="inspiration">
            <h2>Inspiration</h2>
            <Selector/>
        </div>
    );
}

class Selector extends React.Component {
    state = {
        selection: selectionMyFish
    }

    onSelect = (selection) => {
        this.setState({
            selection: selection
        });
    }

    render() {
        return (
            <div className="selector">
                <div className="select-container" onClick={() => this.onSelect(selectionMyFish)}>
                    <img src={"/trueworldfoods.png"}/>
                    <p></p>
                </div>
                <div className="select-container" onClick={() => this.onSelect(selectionRecs)}>
                    <img src={"/trueworldfoods.png"}/>
                    <p></p>
                </div>
                <div className="select-container" onClick={() => this.onSelect(selectionHowTo)}>
                    <img src={"/trueworldfoods.png"}/>
                    <p></p>
                </div>
                <div className="select-view"></div>
            </div>
        );
    }
}