import "./contact.sass";
import React from "react";
import SampleMenu from "./sampleMenu.js";
import { generateEmailMessage, sendEmail } from "./email.js";

class ContactForm extends React.Component {
    state = {
        omakaseType: "",
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
    };

    getAllData = () => {
        return this.state || {};
    };

    onChangeField = (propName, newValue) => {
        this.setState({
            [propName]: newValue,
        });
        console.log(propName + "-> " + newValue);
    };

    onClearForm = () => {
        debugger;
        this.setState({
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

    render() {
        return (
            <div id="contact-form">
                <p>
                    Please fill the following form to request an omakase
                    reservation. Once the form is filled out and submitted, I
                    will confirm the reservation as soon as possible.
                </p>
                <SampleMenu />
                <FormInformation
                    fullName={this.state.fullName}
                    email={this.state.email}
                    phone={this.state.phone}
                    numGuests={this.state.numGuests}
                    date={this.state.date}
                    time={this.state.time}
                    dietRestrictions={this.state.dietRestrictions}
                    additionalRequests={this.state.additionalRequests}
                    wantsUniUS={this.state.wantsUniUS}
                    wantsUniJP={this.state.wantsUniJP}
                    wantsToro={this.state.wantsToro}
                    onChangeField={this.onChangeField}
                    onClearForm={this.onClearForm}
                    getAllData={this.getAllData}
                />
            </div>
        );
    }
}

export default ContactForm;

class FormInformation extends React.Component {
    onClearForm = () => {
        this.props.onClearForm();
    };

    onSubmitForm = () => {
        console.log("Submit form!");
        const data = this.props.getAllData();
        const message = generateEmailMessage(data);
        console.log(message);
        sendEmail(message);
        console.log("Email sent!");
    };

    onChangeDateTime = () => {};

    render() {
        const onChange = this.props.onChangeField;
        const onChangeNum = (fieldName, num) =>
            onChange(fieldName, parseInt(num, 10) || 0);
        const onChangeBool = (fieldName, val) =>
            onChange(fieldName, val || false);
        const estimateTotal = calculateTotalEstimate();
        const estimateGuest = estimateTotal / this.props.numGuests;
        return (
            <section className="fill-form">
                <FormInput
                    title={"Full Name"}
                    classLabel={"name"}
                    value={this.props.fullName}
                    placeholder={"Enter your full name"}
                    fieldName={"fullName"}
                    onChange={onChange}
                />
                <FormInput
                    title={"Email"}
                    classLabel={"email"}
                    value={this.props.email}
                    placeholder={"email@address.com"}
                    fieldName={"email"}
                    onChange={onChange}
                />
                <FormInput
                    title={"Phone Number"}
                    classLabel={"phone"}
                    value={this.props.phone}
                    placeholder={"(___)-___-____"}
                    fieldName={"phone"}
                    onChange={onChange}
                />
                <FormInput
                    title={"No. Guests"}
                    classLabel={"num-guests"}
                    value={this.props.numGuests}
                    placeholder={2}
                    fieldName={"numGuests"}
                    onChange={onChangeNum}
                />
                <FormDateTime
                    valueDate={"asdf"}
                    valueTime={"qwer"}
                    onChange={this.onChangeDateTime}
                />
                <FormCheckbox
                    title={"Add Santa Barbara Uni?"}
                    value={this.props.wantsUniUS}
                    fieldName={"wantsUniUS"}
                    onChange={onChangeBool}
                />
                <FormCheckbox
                    title={"Add Hokkaido Uni?"}
                    value={this.props.wantsUniJP}
                    fieldName={"wantsUniJP"}
                    onChange={onChangeBool}
                />
                <FormCheckbox
                    title={"Add Bluefin Tuna?"}
                    value={this.props.wantsToro}
                    fieldName={"wantsToro"}
                    onChange={onChangeBool}
                />
                <FormInput
                    title={"Any Dietary Restrictions?"}
                    classLabel={"diet"}
                    placeholder={"e.g. allergic to shellfish"}
                    value={this.props.dietRestrictions}
                    fieldName={"dietRestrictions"}
                    onChange={onChange}
                />
                <FormInput
                    title={"Additional Accomodation Requests"}
                    placeholder={"(Optional)"}
                    value={this.props.additionalRequests}
                    fieldName={"additionalRequests"}
                    onChange={onChange}
                    isTextArea={true}
                />
                <div className="buttons">
                    <button className="clear" onClick={this.onClearForm}>
                        Clear Form
                    </button>
                    <button className="submit" onClick={this.onSubmitForm}>
                        Submit
                    </button>
                </div>
                {/* <div>
                  <h5>Estimated total: {estimateTotal}</h5>
                  <h5>Estimated subtotal per guest: {estimateGuest}</h5>
              </div> */}
            </section>
        );
    }
}

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
                value={props.value || false}
                checked={Boolean(props.value) || false}
                onChange={(e) =>
                    props.onChange(props.fieldName, Boolean(e.target.value))
                }
            />
            <h4>{props.title}</h4>
        </div>
    );
}

function FormDateTime(props) {
    return (
        <div className="select-date-time">
            <h4>Date Time (Evenings-only)</h4>
        </div>
    );
}

function calculateTotalEstimate(
    omakaseType,
    numGuests,
    wantsUniUSA,
    wantsUniJapan,
    wantsToro,
    wantsTakeHome
) {
    return 100;
}
