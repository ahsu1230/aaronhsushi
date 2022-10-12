import "./contact.sass";
import React from "react";
import {
    MyEmail,
    MyInstagram,
    MyInstagramLink,
    MyLinkedIn,
    MyLinkedInLink,
} from "../../../common/constants.js";

import iconEmail from "./../../../assets/email_black.svg";
import iconIG from "./../../../assets/instagram_black.svg";
import iconLI from "./../../../assets/linkedin_black.svg";
import imgProfile from "./../../../assets/profile1a.jpg";

export default class ContactMe extends React.Component {
    render() {
        return (
            <section className="contact-me">
                <h3>Contact me</h3>
                <img className="profile" src={imgProfile} />
                <p>
                    For any other inquiries, questions or concerns, please
                    contact me through email or social media.
                </p>
                <div className="contact-line email">
                    <img src={iconEmail} />
                    <span>{MyEmail}</span>
                </div>
                <div className="contact-line ig">
                    <a href={MyInstagramLink}>
                        <img src={iconIG} />
                        <span>{MyInstagram}</span>
                    </a>
                </div>
                <div className="contact-line li">
                    <a href={MyLinkedInLink}>
                        <img src={iconLI} />
                        <span>{MyLinkedIn}</span>
                    </a>
                </div>
            </section>
        );
    }
}
