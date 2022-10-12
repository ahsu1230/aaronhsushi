import "./reserveSuccess.sass";

import moment from "moment";
import { Link } from "react-router-dom";
import { MyEmail, MyVenmo } from "../common/constants.js";
import Constants from "./reserveConstants.js";

export default function ReserveSuccessPage(props) {
    return (
        <div id="reserve-success">
            <div className="reserve-container">
                <section>
                    <h1>Thank you for your submission!</h1>
                    <p>
                        Your reservation request has successfully been
                        submitted! I will review your request and reply via
                        email or text as soon as possible. Please double check
                        your spam inbox for my email.
                        <br />
                        <br />
                        If you have any questions or want to update your
                        reservation, please email me at <a>{MyEmail}</a>.<br />
                        Thank you again for booking a reservation with me!
                    </p>
                </section>

                {props.data.view == Constants.VIEW_CATERING && (
                    <section>
                        <h3>Instructions before Chef comes</h3>
                        <ul>
                            <li>
                                Please have a free parking space available
                                throughout the duration of the dinner. Please
                                allot for around 4 hours of parking time.
                            </li>
                            <li>Please clear 2 refridgerator shelves.</li>
                            <li>
                                Please clear sink and leave at least 36 inches
                                wide counter space or provide a separate table
                                for the chef.
                            </li>
                            <li>
                                Feel free to enjoy own drinks and desserts!
                                Thank you and see you soon!
                            </li>
                        </ul>
                    </section>
                )}

                {props.data.view == Constants.VIEW_DINE_IN && (
                    <div>
                        <section>
                            <h3>Want to bring something?</h3>
                            <p>
                                Feel free to bring your favorite dessert (like
                                ice cream, cake or mochi) to share! Drinks, like
                                wine or sake, are welcome as well!
                            </p>
                        </section>

                        <section>
                            <h3>Location</h3>
                            <p>
                                I'm located at the Highland Park Apartments on
                                Irving St and 14th Street next to the Columbia
                                Heights Metro station. It is most accessible via
                                Metro or Uber/Lyft.
                                <br />
                                <br />
                                If you would like to drive, the next door
                                Target/Best Buy (DC USA) has a parking garage
                                available (~ $2/hour). For drivers, there are
                                many one-way streets and congested traffic here,
                                so please do plan ahead!
                                <br />
                                <br />
                                If driving, the entrance to the parking garage
                                is next to Mattress Firm near 14th St and Park
                                Rd NW.
                            </p>
                            <p className="address">
                                Highland Park Apartments
                                <br />
                                1400 Irving St NW
                                <br />
                                Washington, D.C. 20010
                            </p>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.7989026234272!2d-77.03576654915767!3d38.928573652610766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c820291dea95%3A0x4f487bf599521aad!2sHighland%20Park%20at%20Columbia%20Heights%20Metro!5e0!3m2!1sen!2sus!4v1632413050796!5m2!1sen!2sus"
                                width="100%"
                                height="420"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            />
                        </section>
                    </div>
                )}

                <section>
                    <h3>Payment Information</h3>
                    <p>
                        My most preferred method of payment would be Venmo. You
                        can Venmo me at <u>{MyVenmo}</u>. The last 4 digits of
                        my phone number are 0850. Please contact me if you
                        prefer another method of payment.
                    </p>
                </section>

                <section>
                    <h4>Review your reservation request</h4>
                    <p>
                        You have requested a{" "}
                        {props.data.view == Constants.VIEW_CATERING
                            ? "catering"
                            : "dine-in"}{" "}
                        reservation on
                        <br />
                        {moment(props.data.datetime).format(
                            "dddd, MMM Do YYYY, h:mm a"
                        )}{" "}
                        for {props.data.numGuests} guests.
                    </p>
                    <p>Dietary Restrictions: {props.data.dietRestrictions}</p>
                    <p>Additional Requests: {props.data.additionalRequests}</p>
                    <p>
                        The chef will contact you by email at {props.data.email}
                        <br />
                        or by phone at {props.data.phone}.
                    </p>
                    <p>
                        If any of this information is incorrect, please email me
                        at aaronhsushidc@gmail.com.
                    </p>
                </section>

                <section>
                    <Link to="/">Return to Gallery</Link>
                    <br />
                    <br />
                    <Link to="/story">Read my Story</Link>
                </section>
            </div>
        </div>
    );
}
