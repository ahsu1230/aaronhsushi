import "./contact.sass";

import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
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
        wantsUniUS: false,
        wantsUniJP: false,
        wantsToro: false,
        wantsTakeHome: false,
        expectedCostGuest: 0,
    };

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (
            prevState.numGuests != this.state.numGuests ||
            prevState.wantsUniUS != this.state.wantsUniUS ||
            prevState.wantsUniJP != this.state.wantsUniJP ||
            prevState.wantsToro != this.state.wantsToro
        ) {
            const estimate = calculateEstimatePerGuest(
                this.state.numGuests,
                this.state.wantsUniUS,
                this.state.wantsUniJP,
                this.state.wantsToro
            );
            this.setState({
                expectedCostGuest: estimate,
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
    };

    render() {
        const formData = this.state;
        return (
            <div id="contact">
                <Banner
                    height={"280px"}
                    mainTitle={"Book an Omakase Reservation"}
                    bannerImgSrc={
                        "https://aaronhsushi.b-cdn.net/highlandpark_dc.jpg"
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
                <span>aaronhsushi@gmail.com</span>
            </div>
            <div className="contact-line ig">
                <a href="https://www.instagram.com/mooseyhsushi">
                    <img src={iconIG} />
                    <span>@mooseyhsushi</span>
                </a>
            </div>
            <div className="contact-line li">
                <a href="https://www.linkedin.com/aaron-hsu-sushi">
                    <img src={iconLI} />
                    <span>www.linkedin.com/aaron-hsu-sushi</span>
                </a>
            </div>
        </section>
    );
}
