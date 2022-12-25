import "./subscriber.sass";
import React from "react";
import Analytics from "../../../common/analytics.js";
import { generateSubscribedEmailMessage, sendEmail } from "../email/email.js";

export default class Subscriber extends React.Component {
    state = {
        name: "",
        email: "",
        howYouKnowMe: "",
        additionalInfo: "",
        submitted: false,
    };

    validateAll = () => {
        // just check email is valid
        return true;
    };

    onChange = (fieldName, newValue) => {
        this.setState({
            [fieldName]: newValue,
        });
    };

    onSubmit = () => {
        console.log("Submit form!");

        console.log("Validating...");
        const validate = this.validateAll();
        const data = this.state;
        if (validate) {
            console.log("Validate success!");
            const message = generateSubscribedEmailMessage(data);
            console.log(message);
            Analytics.track("submit_subscribe_clicked", {
                data: data,
                message: message,
            });
            sendEmail(message, this.props.onSubmitSuccess, this.onSubmitFail);
            console.log("Email sent!");
            this.setState({ submitted: true });
        } else {
            console.log("Validate failed!");
            Analytics.track("submit_subscribe_failed", {
                data: data,
            });
        }
    };

    render() {
        return (
            <section className="subscriber">
                {this.state.submitted && <h3>Thank you for subscribing!</h3>}

                {!this.state.submitted && (
                    <div>
                        <div className="form-input name">
                            <h4>Name</h4>
                            <input
                                type="text"
                                placeholder={"e.g. Christine Lee"}
                                value={this.state.name}
                                onChange={(e) =>
                                    this.onChange("name", e.target.value)
                                }
                                onFocus={(e) => {
                                    Analytics.track("subscribe_focus_name");
                                }}
                            />
                        </div>
                        <div className="form-input email">
                            <h4>Email</h4>
                            <input
                                type="text"
                                placeholder={"email@address.com"}
                                value={this.state.email}
                                onChange={(e) =>
                                    this.onChange("email", e.target.value)
                                }
                                onFocus={(e) => {
                                    Analytics.track("subscribe_focus_email");
                                }}
                            />
                        </div>

                        <div className="form-input hykm">
                            <h4>How do you know me?</h4>
                            <input
                                type="text"
                                placeholder={
                                    "Friend, family, coworker? Please specify!"
                                }
                                value={this.state.howYouKnowMe}
                                onChange={(e) =>
                                    this.onChange(
                                        "howYouKnowMe",
                                        e.target.value
                                    )
                                }
                                onFocus={(e) => {
                                    Analytics.track("subscribe_focus_hykm");
                                }}
                            />
                        </div>

                        <div className="form-input inquiries">
                            <h4>Questions and Additional Info</h4>
                            <textarea
                                placeholder={
                                    "Any questions, comments or inquiries."
                                }
                                value={this.state.additionalInfo}
                                onChange={(e) =>
                                    this.onChange(
                                        "additionalInfo",
                                        e.target.value
                                    )
                                }
                                onFocus={(e) => {
                                    Analytics.track(
                                        "subscribe_focus_additionalInfo"
                                    );
                                }}
                            />
                        </div>

                        <button onClick={this.onSubmit}>Subscribe</button>
                    </div>
                )}
            </section>
        );
    }
}
