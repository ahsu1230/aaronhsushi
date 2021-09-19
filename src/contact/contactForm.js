import "./contact.sass";
import React from "react";
import SampleMenu from "./sampleMenu.js";

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
    wantsUniJapan: false,
    wantsToro: false,
    wantsTakeHome: false,
  };

  onChangeField = (propName, newValue) => {
    this.setState({
      [propName]: newValue,
    });
    console.log(propName + "-> " + newValue);
  };

  render() {
    return (
      <div id="contact-form">
        <FormSelectType
          omakaseType={this.state.omakaseType}
          onChangeField={this.onChangeField}
        />
        <SampleMenu omakaseType={this.state.omakaseType} />
        <FormInformation
          omakaseType={this.state.omakaseType}
          fullName={this.state.fullName}
          email={this.state.email}
          phone={this.state.phone}
          numGuests={this.state.numGuests}
          date={this.state.date}
          time={this.state.time}
          dietRestrictions={this.state.dietRestrictions}
          additionalRequests={this.state.additionalRequests}
          wantsUniUS={this.state.wantsUniUS}
          wantsUniJapan={this.state.wantsUniJapan}
          wantsToro={this.state.wantsToro}
          onChangeField={this.onChangeField}
        />
      </div>
    );
  }
}

export default ContactForm;

function FormSelectType(props) {
  const onSelectType = (e) => {
    const val = e.target.value;
    props.onChangeField("omakaseType", val);
  };

  return (
    <section>
      <h3>Please choose one.</h3>
      <form>
        <div>
          <input
            type="radio"
            name="party_selection"
            value="party_2"
            onChange={onSelectType}
          />
          <label for="party_2">Omakase Tasting (up to 2)</label>
        </div>
        <div>
          <input
            type="radio"
            name="party_selection"
            value="party_4"
            onChange={onSelectType}
          />
          <label for="party_4">Group Omakase (up to 4)</label>
        </div>
      </form>
    </section>
  );
}

function FormInformation(props) {
  const onChange = props.onChangeField;
  const onChangeNum = (fieldName, num) =>
    onChange(fieldName, parseInt(num, 10) || 0);
  const onChangeBool = (fieldName, val) => onChange(fieldName, val || false);
  const estimateTotal = calculateTotalEstimate();
  const estimateGuest = estimateTotal / props.numGuests;
  return (
    <section>
      <FormInput
        title={"Full Name"}
        value={props.fullName}
        placeholder={"Please enter your full name"}
        fieldName={"fullName"}
        onChange={onChange}
      />
      <FormInput
        title={"Email"}
        value={props.email}
        placeholder={"Please enter a valid email"}
        fieldName={"email"}
        onChange={onChange}
      />
      <FormInput
        title={"Phone Number"}
        value={props.phone}
        placeholder={"Please enter your phone number"}
        fieldName={"phone"}
        onChange={onChange}
      />
      <FormInput
        title={"No. Guests"}
        value={props.numGuests}
        placeholder={2}
        fieldName={"numGuests"}
        onChange={onChangeNum}
      />
      Date Time (Evenings-only)
      <FormInput
        title={"Add Santa Barbara Uni?"}
        value={props.wantsUniUS}
        fieldName={"wantsUniUS"}
        onChange={onChangeBool}
        isCheckbox={true}
      />
      <FormInput
        title={"Add Hokkaido Uni?"}
        value={props.wantsUniJapan}
        fieldName={"wantsUniJapan"}
        onChange={onChangeBool}
        isCheckbox={true}
      />
      <FormInput
        title={"Add Bluefin Tuna?"}
        value={props.wantsToro}
        fieldName={"wantsToro"}
        onChange={onChangeBool}
        isCheckbox={true}
      />
      <FormInput
        title={"Any Dietary Restrictions?"}
        value={props.dietRestrictions}
        fieldName={"dietRestrictions"}
        onChange={onChange}
      />
      <FormInput
        title={"Additional Accomodation Requests"}
        value={props.additionalRequests}
        fieldName={"additionalRequests"}
        onChange={onChange}
        isTextArea={true}
      />
      <FormInput
        title={"Would you like to take anything home?"}
        value={props.wantsTakeHome}
        fieldName={"wantsTakeHome"}
        onChange={onChangeBool}
        isCheckbox={true}
      />
      <div className="buttons">
        <button>Clear Form</button>
        <button>Submit</button>
      </div>
      {/* <div>
                <h5>Estimated total: {estimateTotal}</h5>
                <h5>Estimated subtotal per guest: {estimateGuest}</h5>
            </div> */}
    </section>
  );
}

function FormInput(props) {
  const isTextArea = props.isTextArea || false;
  const isCheckbox = props.isCheckbox || false;
  return (
    <div className="form-input">
      <h4>{props.title}</h4>
      {props.description && <p>{props.description}</p>}
      {isTextArea && (
        <textarea
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.onChange(props.fieldName, e.target.value)}
        />
      )}
      {isCheckbox && (
        <input
          type="checkbox"
          value={props.value || false}
          onChange={(e) => props.onChange(props.fieldName, e.target.value)}
        />
      )}
      {!isTextArea && !isCheckbox && (
        <input
          type="text"
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.onChange(props.fieldName, e.target.value)}
        />
      )}
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
