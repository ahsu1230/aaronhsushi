import "./sampleMenu.sass";
import "../../../common/simpleModal.sass";

import React from "react";
import Banner from "../../../common/banner.js";
import Constants from "../../reserveConstants.js";
import iconClose from "./../../../assets/close_white.svg";

export default class SampleMenu extends React.Component {
    state = {
        showPopup: false,
    };

    onOpenPopup = () => {
        this.setState({ showPopup: true });
    };

    onClosePopup = () => {
        this.setState({ showPopup: false });
    };

    render() {
        return (
            <div id="sample-menu">
                <a onClick={this.onOpenPopup}>
                    Click here to view a sample multi-course omakase menu.
                </a>
                {this.state.showPopup && (
                    <Popup
                        reserveView={this.props.reserveView}
                        onClose={this.onClosePopup}
                    />
                )}
            </div>
        );
    }
}

function Popup(props) {
    const bannerImgSrc =
        props.reserveView == Constants.VIEW_DINE_IN
            ? "https://aaronhsushi.b-cdn.net/banner_kaiseki1b.jpg"
            : "https://aaronhsushi.b-cdn.net/banner_salmon_nigiri_blue.jpg";
    const bannerHeight =
        props.reserveView == Constants.VIEW_DINE_IN ? "240px" : "180px";
    return (
        <div className="simple-modal">
            <div className="overlay" onClick={props.onClose}></div>
            <div className="modal-content">
                <button className="btn-close" onClick={props.onClose}>
                    <img src={iconClose} />
                </button>
                <Banner
                    height={bannerHeight}
                    mainTitle={"Sample Tasting Menu"}
                    bannerImgSrc={bannerImgSrc}
                />

                <section>
                    <p className="description">
                        The tasting menu may change based on seasonal
                        availability, customer requests and/or accomodations.
                        Come often to get a taste of what each seasonal
                        celebrations have to offer!
                    </p>
                </section>
                <section>
                    <h4>Openers</h4>
                    <MenuItem
                        title={"Sakizuke"}
                        description={
                            "Three cooked seasonal fish and vegetable appetizers"
                        }
                    />
                    <MenuItem
                        title={"Seasonal Sashimi"}
                        description={"Madai, Shima Aji, Katsuo"}
                    />
                </section>
                <section>
                    <h4>Sushi</h4>
                    <MenuItem
                        title={"Kobujime Madai"}
                        description={"Red seabream cured in kelp"}
                    />
                    <MenuItem
                        title={"Shima Aji"}
                        description={"Japanese yellow-striped jack"}
                    />
                    <MenuItem
                        title={"Pickled Kohada"}
                        description={
                            "Pickled Gizzard Shad with sweet oboro egg flakes"
                        }
                    />
                    <MenuItem
                        title={"Seared smoked salmon"}
                        description={
                            "Pecan-smoked salmon with a crispy skin finish"
                        }
                    />
                    <MenuItem
                        title={"Kinmedai"}
                        description={
                            "Golden Eye Snapper seared and topped with yuzu kosho"
                        }
                    />
                    <MenuItem
                        title={"Intermission Kaiseki Tasting"}
                        description={
                            "Miso simmered salmon with baby bamboo shoots"
                        }
                    />
                    <MenuItem
                        title={"Hotate"}
                        description={"Scallops with truffle salt"}
                    />
                    <MenuItem
                        title={"Botan Ebi"}
                        description={"Raw sweet shrimp"}
                    />
                    <MenuItem
                        title={"Ikura"}
                        description={"Soy-sauce marinated salmon roe"}
                    />
                    <MenuItem
                        title={"Extra Sushi"}
                        description={"Any sushi piece of customer's choice"}
                    />
                </section>
                <section>
                    <h4>Closers</h4>
                    <MenuItem
                        title={"Clear mushroom soup"}
                        description={
                            "Mushroom soup made from assorted Japanese mushrooms"
                        }
                    />
                    <MenuItem
                        title={"Tamago"}
                        description={"Sweetened rolled egg omelet"}
                    />
                    <MenuItem
                        title={"Fruit Dessert Jelly"}
                        description={
                            "Agar jelly with assorted fruits and matcha ice cream"
                        }
                    />
                </section>
            </div>
        </div>
    );
}

function MenuItem(props) {
    return (
        <div className="menu-item">
            <h5>{props.title}</h5>
            {props.description && <p>{props.description}</p>}
        </div>
    );
}
