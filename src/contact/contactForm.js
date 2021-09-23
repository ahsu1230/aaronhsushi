import "./contact.sass";
import React from "react";
import SampleMenu from "./sampleMenu.js";
import { generateEmailMessage, sendEmail } from "./email.js";

const COST_UNI_US = 65;
const COST_UNI_JP = 140;
const COST_SALMON = 40;
const COST_SEASONAL = 50;
const COST_TUNA = 80; // cost for maguro, chutoro, otoro (~2 saku)

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
        let data = this.state || {};
        data.estimatePerGuest = calculateEstimate(
            this.state.numGuests,
            this.state.wantsUniUS,
            this.state.wantsUniJP,
            this.state.wantsToro
        );
        return data;
    };

    onChangeField = (propName, newValue) => {
        this.setState({
            [propName]: newValue,
        });
    };

    onClearForm = () => {
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
        return (
            <div className="fill-form">
                <section>
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
                </section>

                <section>
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
                </section>

                <section>
                    <EstimatedCosts
                        numGuests={this.props.numGuests}
                        wantsUniUS={this.props.wantsUniUS}
                        wantsUniJP={this.props.wantsUniJP}
                        wantsToro={this.props.wantsToro}
                    />
                </section>

                <div className="buttons">
                    <button className="clear" onClick={this.onClearForm}>
                        Clear Form
                    </button>
                    <button className="submit" onClick={this.onSubmitForm}>
                        Submit
                    </button>
                </div>
            </div>
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
    const estimate = calculateEstimate(
        props.numGuests,
        props.wantsUniUS,
        props.wantsUniJP,
        props.wantsToro
    );
    return (
        <div className="estimates">
            <h4>
                Estimated cost per guest: <strong>${estimate}</strong>
            </h4>
            <p>
                These are rough estimates as fresh fish and seafood may differ
                based on market value.
            </p>
        </div>
    );
}

function calculateEstimate(numGuests, wantsUniUS, wantsUniJP, wantsToro) {
    // Omakase per person usually includes:
    // 1 edomame + amuse / unagi ($12 total)
    // 1 sashimi plate (1 salmon + 2 seasonal OR 2 tuna + 1 seasonal)
    // 4 nigiri (2 salmon + 2 seasonal OR 3 tuna + 1 seasonal)
    // 1 ikura ($5pp), 1 botan-ebi ($3pp), 1 scallop ($2pp) = total $10
    // 1 miso soup

    // These are costs per person
    const costAmuse = 5;
    const costFrozen = 10;
    const costMiso = 5;
    const presplitDivisor = numGuests <= 2 ? 2 : 1.5;

    let subtotal = costAmuse + costFrozen + costMiso;
    subtotal += wantsUniUS
        ? COST_UNI_US / presplitDivisor / (numGuests + 1)
        : 0;
    subtotal += wantsUniJP
        ? COST_UNI_JP / presplitDivisor / (numGuests + 1)
        : 0;
    if (wantsToro) {
        subtotal += COST_TUNA / (numGuests + 1);
        subtotal += (COST_SEASONAL * 1) / presplitDivisor / (numGuests + 1);
    } else {
        subtotal += COST_SALMON / 2 / (numGuests + 1);
        subtotal += (COST_SEASONAL * 2) / presplitDivisor / (numGuests + 1);
    }
    return Math.round(subtotal * 100) / 100;
}
