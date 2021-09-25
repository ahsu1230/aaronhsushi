import "./contact.sass";
import React from "react";
import SampleMenu from "./sampleMenu.js";
import { generateEmailMessage, sendEmail } from "./email.js";

class ContactForm extends React.Component {
    onClear = () => {
        this.props.onChangeFields({
            fullName: "",
            email: "",
            phone: "",
            numGuests: 1,
            date: "",
            time: "",
            dietRestrictions: "",
            additionalRequests: "",
            wantsUniUS: false,
            wantsUniJP: false,
            wantsToro: false,
            wantsTakeHome: false,
        });
    };

    onSubmit = () => {
        console.log("Submit form!");
        const data = this.props.data;
        const message = generateEmailMessage(data);
        console.log(message);
        sendEmail(message);
        console.log("Email sent!");
        this.props.onSubmitSuccess();
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

    onChangeDateTime = () => {};

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
                            valueDate={"asdf"}
                            valueTime={"qwer"}
                            onChange={this.onChangeDateTime}
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

function FormDateTime(props) {
    return (
        <div className="select-date-time">
            <h4>Select a date and time (weekends, evenings-only)</h4>
            <p>
                Date: <br />
                Time: <br />
            </p>
        </div>
    );
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
