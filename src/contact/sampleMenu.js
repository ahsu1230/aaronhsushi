import "./sampleMenu.sass";

import React from "react";
import Banner from "../common/banner.js";
import iconClose from "./../assets/close_white.svg";

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
                    Click here to view a sample omakase menu.{" "}
                    {this.state.showPopup}
                </a>
                {this.state.showPopup && <Popup onClose={this.onClosePopup} />}
            </div>
        );
    }
}

function Popup(props) {
    return (
        <div className="modal">
            <div className="overlay" onClick={props.onClose}></div>
            <div className="modal-content">
                <button className="btn-close" onClick={props.onClose}>
                    <img src={iconClose} />
                </button>
                <Banner
                    height={"120px"}
                    mainTitle={"Sample Tasting Menu"}
                    bannerImgSrc={
                        "https://aaronhsushi.b-cdn.net/banner_hotate_nigiri.jpeg"
                    }
                />

                <section>
                    <p>
                        The tasting menu may change based on seasonal
                        availability, customer requests and accomodations. Come
                        often to get a taste of what each seasonal celebrations
                        have to offer!
                    </p>
                </section>
                <section>
                    <h4>Openers</h4>
                    <MenuItem
                        title={"Sakizuke"}
                        description={
                            "Cooked seasonal fish and vegetable appetizer"
                        }
                    />
                    <MenuItem
                        title={"Seasonal Sashimi"}
                        description={"Madai, Salmon, Mackerel"}
                    />
                </section>
                <section>
                    <h4>Sushi</h4>
                    <MenuItem
                        title={"Kobujime Madai"}
                        description={"Red seabream cured in kelp"}
                    />
                    <MenuItem
                        title={"Pecan-smoked Salmon"}
                        description={"Salmon belly smoked in pecan wood chips"}
                    />
                    <MenuItem
                        title={"Seared Salmon"}
                        description={"Tender salmon with a crispy skin finish"}
                    />
                    <MenuItem
                        title={"Pickled Kohada"}
                        description={
                            "Pickled Gizzard Shad with sweet oboro egg flakes"
                        }
                    />
                </section>
                <section>
                    <MenuItem
                        title={"Hotate"}
                        description={
                            "Scallops with truffle salt and citrus zest"
                        }
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
                        title={"Miso Soup"}
                        description={
                            "Umami-packed soup made from 3 different miso"
                        }
                    />
                    <MenuItem
                        title={"Tamago"}
                        description={"Sweetened rolled egg omelet"}
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
