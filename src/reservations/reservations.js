import "./reservations.sass";

import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { includes, remove, isEqual } from "lodash";
import Analytics from "../common/analytics.js";
import Banner from "../common/banner.js";
import ContactMe from "./utils/contact/contact.js";
import Constants from "./reserveConstants.js";
import ReserveForm from "./reserveForm.js";
import ReserveSuccess from "./reserveSuccess.js";
import { getMinDateTime } from "./utils/scheduler/datetime.js";
import Subscriber from "./utils/subscriber/subscriber.js";
import {
    calculateEstimatePerGuest,
    calculateFinalEstimate,
} from "./utils/estimates/estimate.js";

import iconDine from "./../assets/dine_white.svg";
import iconHome from "./../assets/home_white.svg";
import iconContact from "./../assets/social_white.svg";

// const DEFAULT_VIEW = Constants.VIEW_DINE_IN;
const DEFAULT_VIEW = Constants.VIEW_SUBSCRIBE;
const DEFAULT_NUM_GUESTS = 2;
const MIN_DATE_TIME = getMinDateTime(); // always 'moment' object

class ReservationsPage extends React.Component {
    state = {
        view: DEFAULT_VIEW,
        reserveSuccess: false,
        fullName: "",
        email: "",
        phone: "",
        location: "",
        parkingInstructions: "",
        numGuests: DEFAULT_NUM_GUESTS,
        minDateTime: MIN_DATE_TIME,
        datetime: MIN_DATE_TIME,
        dietRestrictions: "",
        additionalRequests: "",
        additionalInfo: "",
        omakaseAdditions: [],
        estimatedFinalCost: calculateFinalEstimate(
            Constants.VIEW_DINE_IN,
            DEFAULT_NUM_GUESTS,
            []
        ),
        estimatedCostPerGuest: calculateEstimatePerGuest(
            Constants.VIEW_DINE_IN,
            DEFAULT_NUM_GUESTS,
            []
        ),
        hasAgreedToS: false,
    };

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };

    componentDidMount() {
        Analytics.track("page_reservations");
        Analytics.track("page_reservations_view", {
            view: DEFAULT_VIEW,
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (
            prevState.view != this.state.view ||
            prevState.numGuests != this.state.numGuests ||
            !isEqual(
                JSON.stringify(prevState.omakaseAdditions),
                JSON.stringify(this.state.omakaseAdditions)
            )
        ) {
            const estimateFinal = calculateFinalEstimate(
                this.state.view,
                this.state.numGuests,
                this.state.omakaseAdditions
            );
            const estimatePerGuest = calculateEstimatePerGuest(
                this.state.view,
                this.state.numGuests,
                this.state.omakaseAdditions
            );
            this.setState({
                estimatedFinalCost: estimateFinal,
                estimatedCostPerGuest: estimatePerGuest,
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

    onChangeAddition = (name) => {
        let additions = Array.from(this.state.omakaseAdditions);
        if (includes(additions, name)) {
            remove(additions, (i) => i === name);
        } else {
            additions.push(name);
        }
        this.setState({ omakaseAdditions: additions });
    };

    onSubmitSuccess = () => {
        this.setState({
            reserveSuccess: true,
        });
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    onChangeView = (newView) => {
        this.setState({
            view: newView,
        });
        Analytics.track("page_reservations_view", {
            view: newView,
        });
    };

    render() {
        const formData = this.state;
        return (
            <div id="reservations">
                <Banner
                    height={"280px"}
                    mainTitle={"Book an Omakase Reservation"}
                    bannerImgSrc={
                        "https://aaronhsushi.b-cdn.net/banner_highlandpark_dc.jpg"
                    }
                />
                {this.state.reserveSuccess && (
                    <ReserveSuccess data={formData} />
                )}
                {!this.state.reserveSuccess && (
                    <section className="reservations-container">
                        {this.state.view == Constants.VIEW_SUBSCRIBE && (
                            <SubscribeView />
                        )}
                        {this.state.view != Constants.VIEW_SUBSCRIBE && (
                            <div>
                                <ReserveViewSelector
                                    view={this.state.view}
                                    onChangeView={this.onChangeView}
                                />
                                <section className="reserve-form-container">
                                    {(this.state.view ==
                                        Constants.VIEW_DINE_IN ||
                                        this.state.view ==
                                            Constants.VIEW_CATERING) && (
                                        <ReserveForm
                                            data={formData}
                                            onChangeField={this.onChangeField}
                                            onChangeFields={this.onChangeFields}
                                            onChangeAddition={
                                                this.onChangeAddition
                                            }
                                            onSubmitSuccess={
                                                this.onSubmitSuccess
                                            }
                                        />
                                    )}
                                    {this.state.view ==
                                        Constants.VIEW_CONTACT && <ContactMe />}
                                </section>
                            </div>
                        )}
                    </section>
                )}
            </div>
        );
    }
}

const ReserveViewSelector = (props) => {
    return (
        <section className="reserve-view-selector">
            <button
                className={
                    props.view === Constants.VIEW_DINE_IN ? "active" : ""
                }
                onClick={() => props.onChangeView(Constants.VIEW_DINE_IN)}
            >
                <img src={iconDine} />
                Dine-In
            </button>
            <button
                className={
                    props.view === Constants.VIEW_CATERING ? "active" : ""
                }
                onClick={() => props.onChangeView(Constants.VIEW_CATERING)}
            >
                <img src={iconHome} />
                Catering
            </button>
            <button
                className={
                    props.view === Constants.VIEW_CONTACT ? "active" : ""
                }
                onClick={() => props.onChangeView(Constants.VIEW_CONTACT)}
            >
                <img src={iconContact} />
                Contact
            </button>
        </section>
    );
};

const SubscribeView = () => {
    return (
        <div className="subscribe-container">
            <div className="text-container">
                <h2>All Reservations Full!</h2>
                <p>
                    Thank you so much for your interest in making a reservation
                    with me. As much as I would be honored to host your special
                    evening... all my available dates in December 2022 and
                    January 2023 are completely booked and I, unfortunately,
                    will no longer be accepting new reservations.
                </p>
                <p>
                    In the meantime, I will be focusing my efforts to work at&nbsp;
                    a new sushi restaurant called&nbsp;
                    <a
                        target="_blank"
                        href="https://www.instagram.com/29omakase.dc/"
                    >
                        Two-Nine Omakase
                    </a>
                    . Coming soon to Georgetown, DC in Spring 2023! Please visit
                    me there when it's open!
                </p>
            </div>
            <p>
                Feel free to contact me directly through email or social media
                platforms.
            </p>
            <ContactMe />
            <p>
                If you would like to stay up to date with my journey in sushi,
                please leave your email contact information to be added to my
                subscriber list! When I have new updates, I will email you with
                new updates.
            </p>
            <Subscriber />
        </div>
    );
};

export default withRouter(ReservationsPage);
