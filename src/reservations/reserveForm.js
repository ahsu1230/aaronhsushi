import "./reserveForm.sass";
import React from "react";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import Select from "react-select";
import ReserveFormAdditions from "./utils/additions/reserveFormAdditions.js";
import SampleMenu from "./utils/sampleMenu/sampleMenu.js";
import Disclaimers from "./utils/disclaimers/disclaimers.js";
import TermsOfService from "./utils/tos/tos.js";
import {
    isDateHighlighted,
    isDateOutsideRange,
    isDateBlocked,
    TimeOptions,
} from "./utils/scheduler/datetime.js";
import { generateEmailMessage, sendEmail } from "./utils/email/email.js";
import {
    InvalidMessages,
    Validators,
} from "./utils/formValidation/validation.js";
import Constants from "./reserveConstants.js";
import { MyEmail, MyVenmo } from "../common/constants.js";
import Analytics from "../common/analytics";

import iconDine from "./../assets/dine_white.svg";
import iconHome from "./../assets/home_white.svg";
import iconContact from "./../assets/social_white.svg";

class ReserveForm extends React.Component {
    onClear = () => {
        this.props.onChangeFields({
            fullName: "",
            email: "",
            phone: "",
            location: "",
            numGuests: 1,
            datetime: this.props.minDateTime,
            dietRestrictions: "",
            additionalRequests: "",
            additionalInfo: "",
            omakaseAdditions: [],
            hasAgreedToS: false,
        });
    };

    validateAll = () => {
        return (
            Validators["fullName"](this.props.data.fullName) &&
            Validators["email"](this.props.data.email) &&
            Validators["phone"](this.props.data.phone) &&
            Validators["location"](this.props.data.location) &&
            Validators["numGuests"](this.props.data.numGuests) &&
            Validators["additionalInfo"](this.props.data.additionalInfo) &&
            Validators["hasAgreedToS"](this.props.data.hasAgreedToS)
        );
    };

    onSubmitFail = () => {
        console.log("Failed to submit!");
        window.alert(
            "An error occured when trying to submit. Please contact me at " +
                MyEmail +
                " instead."
        );
    };

    onSubmit = () => {
        console.log("Submit form!");

        console.log("Validating...");
        const validate = this.validateAll();
        const data = this.props.data;
        if (validate) {
            console.log("Validate success!");
            const message = generateEmailMessage(data);
            console.log(message);
            Analytics.track("submit_request_clicked", {
                data: data,
                message: message,
            });
            sendEmail(message, this.props.onSubmitSuccess, this.onSubmitFail);
            console.log("Email sent!");
        } else {
            console.log("Validate failed!");
            Analytics.track("submit_request_failed", {
                data: data,
            });
            if (this.props.data.hasAgreedToS) {
                window.alert(
                    "Please correctly fill out all fields before submitting."
                );
            } else {
                window.alert(
                    "You must agree to the Terms of Service policies to submit a reservation request."
                );
            }
        }
    };

    onChangeField = (propName, propValue) => {
        this.props.onChangeField(propName, propValue);
    };

    onChangeNum = (fieldName, num) => {
        this.props.onChangeField(fieldName, parseInt(num, 10) || 0);
    };

    onChangeBool = (fieldName, val) => {
        this.props.onChangeField(fieldName, val || false);
    };

    onChangeAddition = (name) => {
        this.props.onChangeAddition(name);
    };

    onChangeEmail = (name, value) => {
        this.onChangeField(name, value);
        // Analytics.trackDebounce("form_change_email");
    };

    onChangeDateTime = (name, value) => {
        this.onChangeField(name, value);
        // Analytics.trackDebounce("form_change_date_time", {datetime: value});
    };

    onChangeAdditionalInfo = (name, value) => {
        this.onChangeField(name, value);
        // Analytics.trackDebounce("form_change_additional_info");
    };

    render() {
        return (
            <div id="reserve-form">
                <FormIntro view={this.props.data.view} />
                <div className="fill-form">
                    <section>
                        <FormDateTime
                            datetime={this.props.data.datetime}
                            minDateTime={this.props.data.minDateTime}
                            onChange={this.onChangeDateTime}
                        />
                    </section>
                    <section>
                        <FormInput
                            title={"Full Name"}
                            classLabel={"name"}
                            value={this.props.data.fullName}
                            placeholder={"Enter your full name"}
                            fieldName={"fullName"}
                            onChange={this.onChangeField}
                        />
                        <FormInput
                            title={"Email"}
                            classLabel={"email"}
                            value={this.props.data.email}
                            placeholder={"email@address.com"}
                            fieldName={"email"}
                            onChange={this.onChangeEmail}
                            onFocusChange={(e) => {
                                Analytics.track("form_focus_email");
                            }}
                        />
                        <FormInput
                            title={"Phone Number"}
                            classLabel={"phone"}
                            value={this.props.data.phone}
                            placeholder={"(___)-___-____"}
                            fieldName={"phone"}
                            onChange={this.onChangeField}
                        />
                        {this.props.data.view == Constants.VIEW_CATERING && (
                            <div>
                                <FormInput
                                    title={"Your Location"}
                                    classLabel={"location"}
                                    value={this.props.data.location}
                                    placeholder={
                                        "Valid address or City, State i.e. 'Rockville, MD'"
                                    }
                                    fieldName={"location"}
                                    onChange={this.onChangeField}
                                />
                                <FormInput
                                    title={"Parking Instructions for Chef"}
                                    classLabel={"parking"}
                                    value={this.props.data.parkingInstructions}
                                    placeholder={
                                        "Free street parking, driveway, garage, etc."
                                    }
                                    fieldName={"parkingInstructions"}
                                    onChange={this.onChangeField}
                                />
                            </div>
                        )}

                        <FormInput
                            title={"No. Guests"}
                            classLabel={"num-guests"}
                            value={this.props.data.numGuests}
                            placeholder={2}
                            fieldName={"numGuests"}
                            onChange={this.onChangeNum}
                        />
                    </section>

                    <ReserveFormAdditions
                        omakaseAdditions={this.props.data.omakaseAdditions}
                        onChangeAddition={this.onChangeAddition}
                    />

                    <section>
                        <EstimatedCosts
                            estimateFinal={this.props.data.estimatedFinalCost}
                            estimatePerGuest={
                                this.props.data.estimatedCostPerGuest
                            }
                            numGuests={this.props.data.numGuests}
                        />
                        <h4>Deposit and Cancellation Policy</h4>
                        <p>
                            In order to secure your reservation request,{" "}
                            <b>
                                a non-refundable deposit of $
                                {this.props.data.view == Constants.VIEW_DINE_IN
                                    ? 80
                                    : 100}{" "}
                                per person plus the total cost of seafood
                                supplements is required
                            </b>
                            . Once the deposit is received, your booking will be
                            confirmed and the deposit will go towards your final
                            event cost. If the deposit is not received, your
                            reserved time slot will be available for other
                            clients to book and the reservation will be given to
                            whoever makes the deposit first. Deposit payment
                            information will be included in a reservation
                            confirmation email, which you will receive shortly
                            after submitting this form.
                        </p>
                        <p>
                            Parties may replace guests at no cost as long as the
                            party size is at or more than the original reserved
                            party size. If the party size becomes less than the
                            reserved party size, the deposit will NOT be
                            refunded.
                        </p>
                    </section>

                    <section>
                        <FormInput
                            title={"Any Dietary Restrictions?"}
                            classLabel={"diet"}
                            placeholder={
                                "e.g. allergic to shrimp, scallops, squid, eggs, etc."
                            }
                            value={this.props.data.dietRestrictions}
                            fieldName={"dietRestrictions"}
                            onChange={this.onChangeField}
                        />
                        <FormInput
                            title={"Additional Accomodation Requests"}
                            placeholder={"(Optional)"}
                            value={this.props.data.additionalRequests}
                            fieldName={"additionalRequests"}
                            onChange={this.onChangeField}
                            isTextArea={true}
                        />
                        <FormInput
                            title={"Please tell me about yourself"}
                            placeholder={
                                "Is this dinner for a special occasion? How did you hear about me?"
                            }
                            value={this.props.data.additionalInfo}
                            fieldName={"additionalInfo"}
                            onChange={this.onChangeAdditionalInfo}
                            onFocusChange={(e) => {
                                Analytics.track("form_focus_additional_info");
                            }}
                            isTextArea={true}
                        />
                        <TermsOfService
                            value={this.props.data.hasAgreedToS}
                            onChange={this.onChangeBool}
                        />
                    </section>

                    <div className="buttons">
                        <button className="clear" onClick={this.onClear}>
                            Clear Form
                        </button>
                        <button className="submit" onClick={this.onSubmit}>
                            Submit
                        </button>
                    </div>

                    <section>
                        <Disclaimers />
                    </section>
                </div>
            </div>
        );
    }
}

export default ReserveForm;

function FormIntro(props) {
    return (
        <section className="reserve-form-intro">
            {props.view === Constants.VIEW_DINE_IN && (
                <div>
                    <div className="title-container">
                        <div className="icon-wrapper">
                            <img src={iconDine} />
                        </div>
                        <h3>Dine-in at Chef's home</h3>
                    </div>
                    <p>
                        The Chef welcomes you to his home in Columbia Heights,
                        Washington D.C. to enjoy a full sushi omakase dinner.
                        Celebrate your event here and browse his extensive sake
                        and tea collection to find a perfect pairing to your
                        meal.
                    </p>
                    <SampleMenu view={props.view} />
                    <h4>$105+ per person</h4>
                </div>
            )}
            {props.view === Constants.VIEW_CATERING && (
                <div>
                    <div className="title-container">
                        <div className="icon-wrapper">
                            <img src={iconHome} />
                        </div>
                        <h3>Catered to your home</h3>
                    </div>
                    <p>
                        Enjoy a full sushi omakase dinner brought to the comfort
                        of your home.
                    </p>
                    <SampleMenu view={props.view} />
                    <h4>$175+ per person</h4>
                    <div className="alert">
                        <h4>Please Read!</h4>
                        <p>
                            Due to logistical limitations, caterings are only
                            for diners who live at most 20 miles away from
                            Columbia Heights, Washington D.C. and can guarantee
                            a free parking space at most 30 feet away from the
                            building throughout the duration of the dinner.{" "}
                            <b>
                                Diners who are unable to satisfy these
                                conditions will not be catered to, no
                                exceptions!
                            </b>
                        </p>
                    </div>
                </div>
            )}
            <p>
                Please fill the following form to request an omakase
                reservation. Once the form is filled out and submitted, I will
                confirm the reservation as soon as possible.
            </p>
        </section>
    );
}

function FormInput(props) {
    const isTextArea = props.isTextArea || false;
    const validator = Validators[props.fieldName];
    const isEmpty =
        props.fieldName == "numGuests" ? false : !Boolean(props.value);
    const isValid = validator ? validator(props.value) : true;
    const invalidMessage = validator
        ? InvalidMessages[props.fieldName]
        : undefined;

    const classNames = ["form-input", props.classLabel].join(" ");
    return (
        <div className={classNames}>
            <h4>{props.title}</h4>
            {props.description && <p>{props.description}</p>}
            {isTextArea && (
                <textarea
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={(e) =>
                        props.onChange(props.fieldName, e.target.value)
                    }
                    onFocus={(e) => {
                        if (props.onFocusChange) {
                            props.onFocusChange(e);
                        }
                    }}
                    onBlur={(e) => {
                        if (props.onBlurChange) {
                            props.onBlurChange(e);
                        }
                    }}
                />
            )}
            {!isTextArea && (
                <input
                    type="text"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={(e) =>
                        props.onChange(props.fieldName, e.target.value)
                    }
                    onFocus={(e) => {
                        if (props.onFocusChange) {
                            props.onFocusChange(e);
                        }
                    }}
                    onBlur={(e) => {
                        if (props.onBlurChange) {
                            props.onBlurChange(e);
                        }
                    }}
                />
            )}
            {!isValid && !isEmpty && <p className="error">{invalidMessage}</p>}
        </div>
    );
}

class FormDateTime extends React.Component {
    state = {
        focused: false,
    };

    onDateChange = (date) => {
        let newDateTime = moment(this.props.datetime);
        newDateTime.year(date.year());
        newDateTime.month(date.month());
        newDateTime.date(date.date());
        this.props.onChange("datetime", newDateTime);
    };

    onTimeChange = (time) => {
        let newDateTime = moment(this.props.datetime);
        newDateTime.hour(time.value);
        this.props.onChange("datetime", newDateTime);
    };

    render() {
        return (
            <div className="select-date-time">
                <h4>Select a date and time</h4>
                <p>
                    The fish and seafood I order are sourced from Japan, so they
                    can take around a week to process and be delivered to the
                    U.S. Please select an evening (Thursday - Sunday) at least
                    one week from today.
                </p>
                <div className="date-picker">
                    <SingleDatePicker
                        date={this.props.datetime}
                        onDateChange={this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={({ focused }) => {
                            this.setState({ focused });
                            if (focused) {
                                Analytics.track("form_focus_date");
                            }
                        }}
                        showDefaultInputIcon
                        isDayBlocked={isDateBlocked}
                        isOutsideRange={(date) =>
                            isDateOutsideRange(date, this.props.minDateTime)
                        }
                        isDayHighlighted={isDateHighlighted}
                        id="date-picker"
                    />
                </div>
                <div className="time-picker">
                    <Select
                        defaultValue={TimeOptions[0]}
                        options={TimeOptions}
                        onChange={this.onTimeChange}
                        onFocus={(e) => {
                            Analytics.track("form_focus_time");
                        }}
                    />
                </div>
                <p>
                    Selected date and time:{" "}
                    <b>
                        {this.props.datetime.format(
                            "dddd, MMM Do YYYY, h:mm a"
                        )}
                    </b>
                </p>
            </div>
        );
    }
}

function EstimatedCosts(props) {
    return (
        <div className="estimates">
            <h4>
                Estimated cost per guest:{" "}
                <strong>${props.estimatePerGuest}</strong>
            </h4>
            <h4>
                Total all-inclusive cost for party: ${props.estimatePerGuest}
                {" x "}
                {props.numGuests}
                {" = "}
                <strong>${props.estimateFinal}</strong>
            </h4>
            <p>
                These are rough estimates as fresh fish and seafood may differ
                based on market value.
            </p>
            <p>
                For payment, my most preferred method is through cash, check or
                Venmo at {MyVenmo}. Please contact me if you have another
                preferred method of payment.
            </p>
        </div>
    );
}
