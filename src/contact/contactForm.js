import "./contact.sass";
import React from "react";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import Select from "react-select";
import SampleMenu from "./sampleMenu.js";
import { getMinDateTime, TimeOptions } from "./datetime.js";
import { generateEmailMessage, sendEmail } from "./email.js";
import { InvalidMessages, Validators } from "./validation.js";

class ContactForm extends React.Component {
    onClear = () => {
        this.props.onChangeFields({
            fullName: "",
            email: "",
            phone: "",
            numGuests: 1,
            datetime: getMinDateTime(),
            dietRestrictions: "",
            additionalRequests: "",
            wantsUniUS: false,
            wantsUniJP: false,
            wantsToro: false,
            wantsTakeHome: false,
        });
    };

    validateAll = () => {
        return (
            Validators["fullName"](this.props.data.fullName) &&
            Validators["email"](this.props.data.email) &&
            Validators["phone"](this.props.data.phone) &&
            Validators["numGuests"](this.props.data.numGuests)
        );
    };

    onSubmit = () => {
        console.log("Submit form!");

        console.log("Validating...");
        const validate = this.validateAll();
        if (validate) {
            console.log("Validate success!");
            const data = this.props.data;
            const message = generateEmailMessage(data);
            console.log(message);
            sendEmail(message);
            console.log("Email sent!");
            this.props.onSubmitSuccess();
        } else {
            console.log("Validate failed!");
            window.alert(
                "Please fill out all fields correctly before submitting."
            );
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

    render() {
        return (
            <div id="contact-form">
                <p>
                    Please fill the following form to request an omakase
                    reservation. Once the form is filled out and submitted, I
                    will confirm the reservation as soon as possible.
                </p>
                <SampleMenu />
                <div className="fill-form">
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
                            onChange={this.onChangeField}
                        />
                        <FormInput
                            title={"Phone Number"}
                            classLabel={"phone"}
                            value={this.props.data.phone}
                            placeholder={"(___)-___-____"}
                            fieldName={"phone"}
                            onChange={this.onChangeField}
                        />
                        <FormInput
                            title={"No. Guests"}
                            classLabel={"num-guests"}
                            value={this.props.data.numGuests}
                            placeholder={2}
                            fieldName={"numGuests"}
                            onChange={this.onChangeNum}
                        />
                    </section>

                    <section>
                        <FormDateTime
                            datetime={this.props.data.datetime}
                            onChange={this.onChangeField}
                        />
                    </section>

                    <section>
                        <h4>Omakase Additions</h4>
                        <FormCheckbox
                            title={"Add Santa Barbara Uni?"}
                            value={this.props.data.wantsUniUS}
                            fieldName={"wantsUniUS"}
                            onChange={this.onChangeBool}
                        />
                        <FormCheckbox
                            title={"Add Hokkaido Uni?"}
                            value={this.props.data.wantsUniJP}
                            fieldName={"wantsUniJP"}
                            onChange={this.onChangeBool}
                        />
                        <FormCheckbox
                            title={"Add Bluefin Tuna?"}
                            value={this.props.data.wantsToro}
                            fieldName={"wantsToro"}
                            onChange={this.onChangeBool}
                        />
                    </section>

                    <section>
                        <FormInput
                            title={"Any Dietary Restrictions?"}
                            classLabel={"diet"}
                            placeholder={"e.g. allergic to shellfish"}
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
                    </section>

                    <section>
                        <EstimatedCosts
                            estimate={this.props.data.expectedCostGuest}
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
                </div>
            </div>
        );
    }
}

export default ContactForm;

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
                />
            )}
            {!isValid && !isEmpty && <p className="error">{invalidMessage}</p>}
        </div>
    );
}

function FormCheckbox(props) {
    const classNames = ["form-input checkbox", props.classLabel].join(" ");
    return (
        <div className={classNames}>
            <input
                type="checkbox"
                value={Boolean(props.value) || false}
                checked={Boolean(props.value) || false}
                onChange={(e) =>
                    props.onChange(props.fieldName, e.target.checked)
                }
            />
            <h4>{props.title}</h4>
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

    isDayBlocked = (date) => {
        // Day is blocked if not Saturday or Sunday
        return date.day() != 6 && date.day() != 0;
    };

    isOutsideDateRange = (date) => {
        // Day must be at or after minimum date
        let minDate = getMinDateTime();
        minDate.hour(0);
        minDate.minute(0);
        return date.isBefore(minDate);
    };

    isDayHighlighted = (date) => {
        // Highlight weekend days
        return date.day() == 6 || date.day() == 0;
    };

    render() {
        return (
            <div className="select-date-time">
                <h4>Select a date and time (weekends, evenings-only)</h4>
                <div className="date-picker">
                    <SingleDatePicker
                        date={this.props.datetime}
                        onDateChange={this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={({ focused }) =>
                            this.setState({ focused })
                        }
                        showDefaultInputIcon
                        isDayBlocked={this.isDayBlocked}
                        isOutsideRange={this.isOutsideDateRange}
                        isDayHighlighted={this.isDayHighlighted}
                        id="date-picker"
                    />
                </div>
                <div className="time-picker">
                    <Select
                        defaultValue={TimeOptions[0]}
                        options={TimeOptions}
                        onChange={this.onTimeChange}
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
                Estimated cost per guest: <strong>${props.estimate}</strong>
            </h4>
            <p>
                These are rough estimates as fresh fish and seafood may differ
                based on market value.
            </p>
        </div>
    );
}
