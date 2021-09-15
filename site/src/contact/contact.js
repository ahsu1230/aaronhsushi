import "./contact.sass";
import React from "react";
import Banner from "../common/banner.js";
import ContactForm from "./contactForm.js";

import iconEmail from "./../assets/email_black.svg";
import iconIG from "./../assets/instagram_black.svg";
import iconLI from "./../assets/linkedin_black.svg";

export default function ContactPage() {
    return (
        <div id="contact">
            <Banner
                height={"280px"}
                mainTitle={"Book an Omakase Reservation"}
                bannerImgSrc={"/highlandpark_dc.jpg"}
            />
            <div className="contact-container">
                {/* <ContactForm/> */}
                <ContactMe/>
            </div>
        </div>
    );
}

function ContactMe() {
    return (
        <section className="contact-me">
            <h3>Contact me</h3>
            <div className="contact-line email">
                <img src={iconEmail}/>
                <span>aaronhsushi@gmail.com</span>
            </div>
            <div className="contact-line ig">
                <a href="www.instagram.com/mooseyhsushi">
                    <img src={iconIG}/>
                    <span>@mooseyhsushi</span>
                </a>
            </div>
            <div className="contact-line li">
                <a href="www.linkedin.com/aaron-hsu-sushi">
                    <img src={iconLI}/>
                    <span>www.linkedin.com/aaron-hsu-sushi</span>
                </a>
            </div>
        </section>
    );
}