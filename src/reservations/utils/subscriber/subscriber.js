import "./subscriber.sass";
import React from "react";
import Analytics from "../../../common/analytics.js";

export default class Subscriber extends React.Component {
    state = {
        email: "",
        howYouKnowMe: "",
        additionalInfo: "",
    }

    render() {
        return (
            <section className="subscriber">
                <div className="email">
                    <h4>Email</h4>
                    <input
                        type="text"
                        placeholder={"email@address.com"}
                        value={this.state.email}
                        onChange={(e) => {
                            this.setState({email: e.target.value});
                        }}
                        onFocus={(e) => {
                            Analytics.track("subscribe_focus_email");
                        }}
                    />
                </div>

                <div className="hdykm">
                    <h4>How do you know me?</h4>
                    <input
                        type="text"
                        placeholder={"Friend, family, coworker? Please specify!"}
                        value={this.state.howYouKnowMe}
                        onChange={(e) => {
                            this.setState({howYouKnowMe: e.target.value});
                        }}
                        onFocus={(e) => {
                            Analytics.track("subscribe_focus_hdykm");
                        }}
                    />
                </div>

                <div className="inquiries">
                    <h4>Questions and Inquiries</h4>
                    <input
                        type="text"
                        placeholder={"Any questions, comments or inquiries."}
                        value={this.state.inquiries}
                        onChange={(e) => {
                            this.setState({inquiries: e.target.value});
                        }}
                        onFocus={(e) => {
                            Analytics.track("subscribe_focus_inquiries");
                        }}
                    />
                </div>
                
                <button>Submit</button>
                
            </section>
        );
    }
}
