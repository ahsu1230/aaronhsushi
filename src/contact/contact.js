import "./contact.sass";

import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import {
    MyEmail,
    MyInstagram,
    MyInstagramLink,
    MyLinkedIn,
    MyLinkedInLink,
} from "../common/constants.js";
import Banner from "../common/banner.js";
import ContactForm from "./contactForm.js";
import ContactSuccess from "./contactSuccess.js";
import { getMinDateTime } from "./datetime.js";
import { calculateEstimatePerGuest } from "./estimate.js";

import iconEmail from "./../assets/email_black.svg";
import iconIG from "./../assets/instagram_black.svg";
import iconLI from "./../assets/linkedin_black.svg";

class ContactPage extends React.Component {
    state = {
        contactSuccess: false,
        fullName: "",
        email: "",
        phone: "",
        numGuests: 1,
        datetime: getMinDateTime(), // must always be a 'moment' object
        dietRestrictions: "",
        additionalRequests: "",
        wantsUniUSEast: false,
        wantsUniUSWest: false,
        wantsUniJP: false,
        wantsToro: false,
        wantsTakeHome: false,
        estimatedCostPerGuest: calculateEstimatePerGuest(
            1,
            false,
            false,
            false,
            false
        ),
    };

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (
            prevState.numGuests != this.state.numGuests ||
            prevState.wantsUniUSEast != this.state.wantsUniUSEast ||
            prevState.wantsUniUSWest != this.state.wantsUniUSWest ||
            prevState.wantsUniJP != this.state.wantsUniJP ||
            prevState.wantsToro != this.state.wantsToro
        ) {
            const estimate = calculateEstimatePerGuest(
                this.state.numGuests,
                this.state.wantsUniUSEast,
                this.state.wantsUniUSWest,
                this.state.wantsUniJP,
                this.state.wantsToro
            );
            this.setState({
                estimatedCostPerGuest: estimate,
            });
        }
    }

    onChangeField = (propName, newValue) => {
        this.setState({
            [propName]: newValue,
        });
    };

    onChangeFields = (propValues) => {
        this.setState(propValues);
    };

    onSubmitSuccess = () => {
        this.setState({
            contactSuccess: true,
        });
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    render() {
        const formData = this.state;
        return (
            <div id="contact">
                <Banner
                    height={"280px"}
                    mainTitle={"Book an Omakase Reservation"}
                    bannerImgSrc={
                        "https://aaronhsushi.b-cdn.net/banner_highlandpark_dc.jpg"
                    }
                />
                {this.state.contactSuccess && (
                    <ContactSuccess data={formData} />
                )}
                {!this.state.contactSuccess && (
                    <div className="contact-container">
                        <ContactForm
                            data={formData}
                            onChangeField={this.onChangeField}
                            onChangeFields={this.onChangeFields}
                            onSubmitSuccess={this.onSubmitSuccess}
                        />
                        <ContactMe />
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(ContactPage);

function ContactMe() {
    return (
        <section className="contact-me">
            <h3>Or contact me:</h3>
            <div className="contact-line email">
                <img src={iconEmail} />
                <span>{MyEmail}</span>
            </div>
            <div className="contact-line ig">
                <a href={MyInstagramLink}>
                    <img src={iconIG} />
                    <span>{MyInstagram}</span>
                </a>
            </div>
            <div className="contact-line li">
                <a href={MyLinkedInLink}>
                    <img src={iconLI} />
                    <span>{MyLinkedIn}</span>
                </a>
            </div>
        </section>
    );
}
