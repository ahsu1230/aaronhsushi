import "./reserveFormAdditions.sass";
import "../../../common/simpleModal.sass";

import React from "react";
import { includes } from "lodash";
import Banner from "../../../common/banner.js";
import Additions from "./omakaseAdditions.js";
import { SakeAdditions, TeaAdditions } from "./drinkAdditions.js";
import { ADDITIONAL_COSTS } from "../estimates/estimate.js";

import iconClose from "./../../../assets/close_white.svg";

export default class ReserveFormAdditions extends React.Component {
    state = {
        showSakePopup: false,
        showTeaPopup: false,
    };

    onOpenSakePopup = () => {
        this.setState({ showSakePopup: true });
    };

    onCloseSakePopup = () => {
        this.setState({ showSakePopup: false });
    };

    onOpenTeaPopup = () => {
        this.setState({ showTeaPopup: true });
    };

    onCloseTeaPopup = () => {
        this.setState({ showTeaPopup: false });
    };

    render() {
        const omakaseAdditions = this.props.omakaseAdditions;
        return (
            <section id="reserve-form-additions">
                <h4 className="additions">Omakase Additions</h4>
                <FormCheckbox
                    title={
                        "Uni - Premium Hokkaido " +
                        getPriceStringPerTray(
                            ADDITIONAL_COSTS[Additions.UNI_JP]
                        )
                    }
                    fieldName={Additions.UNI_JP}
                    value={isChecked(omakaseAdditions, Additions.UNI_JP)}
                    onChange={this.props.onChangeAddition}
                />

                <h4 className="additions">Drink Additions</h4>
                <FormCheckbox
                    title={
                        "Interested in Sake? approx. " +
                        getPriceStringPerBottle(
                            ADDITIONAL_COSTS[Additions.SAKE_GENERAL]
                        )
                    }
                    fieldName={Additions.SAKE_GENERAL}
                    value={isChecked(omakaseAdditions, Additions.SAKE_GENERAL)}
                    onChange={this.props.onChangeAddition}
                />
                <SakeMenuPrompt
                    showPopup={this.state.showSakePopup}
                    onOpenPopup={this.onOpenSakePopup}
                    onClosePopup={this.onCloseSakePopup}
                />
                <FormCheckbox
                    title={
                        "Interested in Tea? " +
                        getPriceStringPerPerson(
                            ADDITIONAL_COSTS[Additions.TEA_GENERAL]
                        )
                    }
                    fieldName={Additions.TEA_GENERAL}
                    value={isChecked(omakaseAdditions, Additions.TEA_GENERAL)}
                    onChange={this.props.onChangeAddition}
                />
                <TeaMenuPrompt
                    showPopup={this.state.showTeaPopup}
                    onOpenPopup={this.onOpenTeaPopup}
                    onClosePopup={this.onCloseTeaPopup}
                />
            </section>
        );
    }
}

function isChecked(omakaseAdditions, fieldName) {
    return includes(omakaseAdditions, fieldName);
}

function getPriceString(price, prefix, suffix) {
    const pre = prefix || "";
    const post = suffix || "";
    return "(" + pre + "+$" + price + post + ")";
}

function getPriceStringPerTray(price) {
    return "(+$" + price + "/tray)";
}

function getPriceStringPerBottle(price) {
    return "(+$" + price + "/bottle)";
}

function getPriceStringPerPerson(price) {
    return "(+$" + price + "/person)";
}

function FormCheckbox(props) {
    const classNames = ["form-input checkbox", props.classLabel].join(" ");
    return (
        <div className={classNames}>
            <input
                type="checkbox"
                value={Boolean(props.value) || false}
                checked={Boolean(props.value) || false}
                onChange={(e) => props.onChange(props.fieldName)}
            />
            <div className="label">
                <h4>{props.title}</h4>
                {props.description && <h5>{props.description}</h5>}
            </div>
        </div>
    );
}

function SakeMenuPrompt(props) {
    return (
        <div className="prompt">
            <a onClick={props.onOpenPopup}>
                Click here to view the Chef's curated sake menu.
            </a>
            {props.showPopup && <SakePopup onClose={props.onClosePopup} />}
        </div>
    );
}

function SakePopup(props) {
    const sakeListItems = SakeAdditions.map((sake, index) => {
        return (
            <li key={index}>
                <h5>{sake.title + " $(" + sake.price + ")"}</h5>
                <p>
                    {sake.description}
                    <br />
                    {"$" + sake.price}
                </p>
            </li>
        );
    });
    return (
        <div className="simple-modal">
            <div className="overlay" onClick={props.onClose}></div>
            <div className="modal-content">
                <button className="btn-close" onClick={props.onClose}>
                    <img src={iconClose} />
                </button>
                <Banner
                    height={"180px"}
                    mainTitle={"Chef's Sake Collection"}
                    bannerImgSrc={
                        "https://aaronhsushi.b-cdn.net/banner_sake1.jpg"
                    }
                />
                <ul>{sakeListItems}</ul>

                <p>
                    For more Sake options, you may visit
                    <br />
                    <a href="https://dcsake.com/" target="_blank">
                        DC Sake
                    </a>{" "}
                    and include which sake you would like in the "Additional
                    Accomodation" section below.
                </p>
            </div>
        </div>
    );
}

function TeaMenuPrompt(props) {
    return (
        <div className="prompt">
            <a onClick={props.onOpenPopup}>
                Click here to view the Chef's curated tea menu.
            </a>
            {props.showPopup && <TeaPopup onClose={props.onClosePopup} />}
        </div>
    );
}

function TeaPopup(props) {
    const teaListItems = TeaAdditions.map((tea, index) => {
        return (
            <li key={index}>
                <h5>{tea.title}</h5>
                <p>
                    {tea.description}
                    <br />
                    {"$" + tea.price}
                </p>
            </li>
        );
    });
    return (
        <div className="simple-modal">
            <div className="overlay" onClick={props.onClose}></div>
            <div className="modal-content">
                <button className="btn-close" onClick={props.onClose}>
                    <img src={iconClose} />
                </button>
                <Banner
                    height={"180px"}
                    mainTitle={"Chef's Tea Collection"}
                    bannerImgSrc={
                        "https://aaronhsushi.b-cdn.net/banner_tea1.jpg"
                    }
                />

                <ul>{teaListItems}</ul>

                <p>
                    For more Tea options, you may visit
                    <br />
                    <a href="https://www.valleybrooktea.com/" target="_blank">
                        Valley Brook Tea
                    </a>{" "}
                    and include which tea you would like in the "Additional
                    Accomodation" section below.
                </p>
            </div>
        </div>
    );
}
