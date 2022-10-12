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
import {
    calculateEstimatePerGuest,
    calculateFinalEstimate,
} from "./utils/estimates/estimate.js";

import iconDine from "./../assets/dine_white.svg";
import iconHome from "./../assets/home_white.svg";
import iconContact from "./../assets/social_white.svg";

const DEFAULT_NUM_GUESTS = 2;
const MIN_DATE_TIME = getMinDateTime(); // always 'moment' object

class ReservationsPage extends React.Component {
    state = {
        view: Constants.VIEW_DINE_IN,
        reserveSuccess: true,
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
        estimatedFinalCost: calculateFinalEstimate(DEFAULT_NUM_GUESTS, []),
        estimatedCostPerGuest: calculateEstimatePerGuest(
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
        /* This must stay as `page_contact` to be back-compat with analytics */
        Analytics.track("page_contact");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (
            prevState.numGuests != this.state.numGuests ||
            !isEqual(
                JSON.stringify(prevState.omakaseAdditions),
                JSON.stringify(this.state.omakaseAdditions)
            )
        ) {
            const estimateFinal = calculateFinalEstimate(
                this.state.numGuests,
                this.state.omakaseAdditions
            );
            const estimatePerGuest = calculateEstimatePerGuest(
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

    changeView = (newView) => {
        this.setState({
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
                        <section className="reserve-view-selector">
                            <button
                                className={
                                    this.state.view === Constants.VIEW_DINE_IN
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    this.changeView(Constants.VIEW_DINE_IN)
                                }
                            >
                                <img src={iconDine} />
                                Dine-In
                            </button>
                            <button
                                className={
                                    this.state.view === Constants.VIEW_CATERING
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    this.changeView(Constants.VIEW_CATERING)
                                }
                            >
                                <img src={iconHome} />
                                Catering
                            </button>
                            <button
                                className={
                                    this.state.view === Constants.VIEW_CONTACT
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    this.changeView(Constants.VIEW_CONTACT)
                                }
                            >
                                <img src={iconContact} />
                                Contact
                            </button>
                        </section>
                        <section className="reserve-form-container">
                            {(this.state.view == Constants.VIEW_DINE_IN ||
                                this.state.view == Constants.VIEW_CATERING) && (
                                <ReserveForm
                                    data={formData}
                                    onChangeField={this.onChangeField}
                                    onChangeFields={this.onChangeFields}
                                    onChangeAddition={this.onChangeAddition}
                                    onSubmitSuccess={this.onSubmitSuccess}
                                />
                            )}
                            {this.state.view == Constants.VIEW_CONTACT && (
                                <ContactMe />
                            )}
                        </section>
                    </section>
                )}
            </div>
        );
    }
}

export default withRouter(ReservationsPage);
