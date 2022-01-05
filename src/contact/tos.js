import "./tos.sass";
import "../common/simpleModal.sass";

import React from "react";
import Analytics from "../common/analytics.js";
import iconClose from "./../assets/close_black.svg";

export default class TermsOfService extends React.Component {
    state = {
        showTos: false,
        showPP: false,
    };

    onOpenTOS = () => {
        this.setState({ showTOS: true });
        Analytics.track("tos_view");
    };

    onCloseTOS = () => {
        this.setState({ showTOS: false });
    };

    onOpenPP = () => {
        this.setState({ showPP: true });
        Analytics.track("pp_view");
    };

    onClosePP = () => {
        this.setState({ showPP: false });
    };

    onChange = (e) => {
        let oldValue = Boolean(this.props.value);
        let newValue = !oldValue;
        Analytics.track("tos_checked", { checked: newValue });
        this.props.onChange("hasAgreedToS", newValue);
    };

    render() {
        return (
            <div id="tos">
                <input
                    type="checkbox"
                    value={Boolean(this.props.value) || false}
                    checked={Boolean(this.props.value) || false}
                    onChange={this.onChange}
                />
                <div className="label">
                    <p>
                        I have read and agree to the{" "}
                        <a onClick={this.onOpenTOS}>Terms of Service</a> and{" "}
                        <a onClick={this.onOpenPP}>Privacy Policy</a> agreements
                        and the Disclaimer statements below.
                    </p>
                </div>
                {this.state.showTOS && <PopupTOS onClose={this.onCloseTOS} />}
                {this.state.showPP && <PopupPP onClose={this.onClosePP} />}
            </div>
        );
    }
}

function PopupTOS(props) {
    return (
        <div className="simple-modal">
            <div className="overlay" onClick={props.onClose}></div>
            <div className="modal-content">
                <button className="btn-close" onClick={props.onClose}>
                    <img src={iconClose} />
                </button>
                <h2>Terms of service and conditions for use of this website</h2>
                <h3>Overview</h3>
                <p>
                    This website is operated by Aaron Hsu. Throughout the site,
                    the terms “we”, “us” and “our” refer to Aaron Hsu and any
                    subsidiaries or affiliates under Aaron Hsushi. We offer this
                    website, including all information, tools and services
                    available from this site to you, the user, conditioned upon
                    your acceptance of all terms, conditions, policies and
                    notices stated here.
                </p>
                <p>
                    By visiting our site and/ or purchasing something from us,
                    you engage in our “Service” and agree to be bound by the
                    following terms and conditions (“Terms of Service”,
                    “Terms”), including those additional terms and conditions
                    and policies referenced herein and/or available by
                    hyperlink. These Terms of Service apply to all users of the
                    site, including without limitation users who are browsers,
                    vendors, customers, merchants, and/ or contributors of
                    content.
                </p>
                <p>
                    Please read these Terms of Service carefully before
                    accessing or using our website. By accessing or using any
                    part of the site, you agree to be bound by these Terms of
                    Service. If you do not agree to all the terms and conditions
                    of this agreement, then you may not access the website or
                    use any services. If these Terms of Service are considered
                    an offer, acceptance is expressly limited to these Terms of
                    Service.
                </p>
                <p>
                    Any new features or tools which are added to the current
                    website shall also be subject to the Terms of Service. You
                    can review the most current version of the Terms of Service
                    at any time on this page. We reserve the right to update,
                    change or replace any part of these Terms of Service by
                    posting updates and/or changes to our website. It is your
                    responsibility to check this page periodically for changes.
                    Your continued use of or access to the website following the
                    posting of any changes constitutes acceptance of those
                    changes.
                </p>

                <h3>SECTION 1 – ONLINE WEBSITE TERMS</h3>
                <p>
                    By agreeing to these Terms of Service, you represent that
                    you are at least the age of majority in your state or
                    province of residence, or that you are the age of majority
                    in your state or province of residence and you have given us
                    your consent to allow any of your minor dependents to use
                    this site.
                </p>
                <p>
                    You may not use our services for any illegal or unauthorized
                    purpose nor may you, in the use of the Service, violate any
                    laws in your jurisdiction (including but not limited to
                    copyright laws).
                </p>
                <p>
                    A breach or violation of any of the Terms will result in an
                    immediate termination of your Services.
                </p>

                <h3>SECTION 2 – GENERAL CONDITIONS</h3>
                <p>
                    We reserve the right to refuse service to anyone for any
                    reason at any time.
                </p>

                <h3>
                    SECTION 3 – ACCURACY, COMPLETENESS AND TIMELINESS OF
                    INFORMATION
                </h3>
                <p>
                    We are not responsible if information made available on this
                    site is not accurate, complete or current. The material on
                    this site is provided for general information only and
                    should not be relied upon or used as the sole basis for
                    making decisions without consulting primary, more accurate,
                    more complete or more timely sources of information. Any
                    reliance on the material on this site is at your own risk.
                </p>
                <p>
                    This site may contain certain historical information.
                    Historical information, necessarily, is not current and is
                    provided for your reference only. We reserve the right to
                    modify the contents of this site at any time, but we have no
                    obligation to update any information on our site. You agree
                    that it is your responsibility to monitor changes to our
                    site.
                </p>

                <h3>SECTION 4 – MODIFICATIONS TO THE SERVICE AND PRICES</h3>
                <p>
                    Prices for our products are subject to change without
                    notice.
                </p>
                <p>
                    We reserve the right at any time to modify or discontinue
                    the Service (or any part or content thereof) without notice
                    at any time.
                </p>

                <h3>SECTION 5 – PRODUCTS OR SERVICES</h3>
                <p>
                    We reserve the right, but are not obligated, to limit the
                    sales of our products or Services to any person, geographic
                    region or jurisdiction. We may exercise this right on a
                    case-by-case basis. We reserve the right to limit the
                    quantities of any products or services that we offer. All
                    descriptions of products or product pricing are subject to
                    change at anytime without notice, at the sole discretion of
                    us. We reserve the right to discontinue any product at any
                    time. Any offer for any product or service made on this site
                    is void where prohibited.
                </p>
                <p>
                    We do not warrant that the quality of any products,
                    services, information, or other material purchased or
                    obtained by you will meet your expectations, or that any
                    errors in the Service will be corrected.
                </p>
                <p>
                    Tips/gratuities are not included in the cost of services and
                    are left to your discretion; if you would like to show your
                    appreciation of your Chef and their work please feel free to
                    do so to them directly.
                </p>

                <h3>SECTION 6 – PERSONAL INFORMATION</h3>
                <p>
                    Your submission of personal information through the webiste
                    is governed by our Privacy Policy. To view our Privacy
                    Policy.
                </p>

                <h3>
                    SECTION 7 – DISCLAIMER OF WARRANTIES; LIMITATION OF
                    LIABILITY
                </h3>
                <p>
                    We do not guarantee, represent or warrant that your use of
                    our service will be uninterrupted, timely, secure or
                    error-free.
                </p>
                <p>
                    We do not warrant that the results that may be obtained from
                    the use of the service will be accurate or reliable.
                </p>
                <p>
                    You agree that from time to time we may remove the service
                    for indefinite periods of time or cancel the service at any
                    time, without notice to you.
                </p>
                <p>
                    You expressly agree that your use of, or inability to use,
                    the service is at your sole risk. The service and all
                    products and services delivered to you through the service
                    are (except as expressly stated by us) provided ‘as is’ and
                    ‘as available’ for your use, without any representation,
                    warranties or conditions of any kind, either express or
                    implied, including all implied warranties or conditions of
                    merchantability, merchantable quality, fitness for a
                    particular purpose, durability, title, and non-infringement.
                </p>
                <p>
                    In no case shall Aaron Hsushi, our directors, officers,
                    employees, affiliates, agents, contractors, interns,
                    suppliers, service providers or licensors be liable for any
                    injury, loss, claim, or any direct, indirect, incidental,
                    punitive, special, or consequential damages of any kind,
                    including, without limitation lost profits, lost revenue,
                    lost savings, loss of data, replacement costs, or any
                    similar damages, whether based in contract, tort (including
                    negligence), strict liability or otherwise, arising from
                    your use of any of the service or any products procured
                    using the service, or for any other claim related in any way
                    to your use of the service or any product, including, but
                    not limited to, any errors or omissions in any content, or
                    any loss or damage of any kind incurred as a result of the
                    use of the service or any content (or product) posted,
                    transmitted, or otherwise made available via the service,
                    even if advised of their possibility. Because some states or
                    jurisdictions do not allow the exclusion or the limitation
                    of liability for consequential or incidental damages, in
                    such states or jurisdictions, our liability shall be limited
                    to the maximum extent permitted by law.
                </p>

                <h3>SECTION 8 – INDEMNIFICATION</h3>
                <p>
                    You agree to indemnify, defend and hold harmless Aaron Hsu,
                    AaronHsushi and our parent, subsidiaries, affiliates,
                    partners, officers, directors, agents, contractors,
                    licensors, service providers, subcontractors, suppliers,
                    interns and employees, harmless from any claim or demand,
                    including reasonable attorneys’ fees, made by any
                    third-party due to or arising out of your breach of these
                    Terms of Service or the documents they incorporate by
                    reference, or your violation of any law or the rights of a
                    third-party.
                </p>

                <h3>SECTION 9 – SEVERABILITY</h3>
                <p>
                    In the event that any provision of these Terms of Service is
                    determined to be unlawful, void or unenforceable, such
                    provision shall nonetheless be enforceable to the fullest
                    extent permitted by applicable law, and the unenforceable
                    portion shall be deemed to be severed from these Terms of
                    Service, such determination shall not affect the validity
                    and enforceability of any other remaining provisions.
                </p>

                <h3>SECTION 10 – TERMINATION</h3>
                <p>
                    The obligations and liabilities of the parties incurred
                    prior to the termination date shall survive the termination
                    of this agreement for all purposes.
                </p>
                <p>
                    These Terms of Service are effective unless and until
                    terminated by either you or us. You may terminate these
                    Terms of Service at any time by notifying us that you no
                    longer wish to use our Services, or when you cease using our
                    site.
                </p>
                <p>
                    If in our sole judgment you fail, or we suspect that you
                    have failed, to comply with any term or provision of these
                    Terms of Service, we also may terminate this agreement at
                    any time without notice and you will remain liable for all
                    amounts due up to and including the date of termination;
                    and/or accordingly may deny you access to our Services (or
                    any part thereof).
                </p>

                <h3>SECTION 11 – ENTIRE AGREEMENT</h3>
                <p>
                    The failure of us to exercise or enforce any right or
                    provision of these Terms of Service shall not constitute a
                    waiver of such right or provision.
                </p>
                <p>
                    These Terms of Service and any policies or operating rules
                    posted by us on this site or in respect to The Service
                    constitutes the entire agreement and understanding between
                    you and us and govern your use of the Service, superseding
                    any prior or contemporaneous agreements, communications and
                    proposals, whether oral or written, between you and us
                    (including, but not limited to, any prior versions of the
                    Terms of Service).
                </p>
                <p>
                    Any ambiguities in the interpretation of these Terms of
                    Service shall not be construed against the drafting party.
                </p>

                <h3>SECTION 12 – CHANGES TO TERMS OF SERVICE</h3>
                <p>
                    You can review the most current version of the Terms of
                    Service at any time at this page.
                </p>
                <p>
                    We reserve the right, at our sole discretion, to update,
                    change or replace any part of these Terms of Service by
                    posting updates and changes to our website. It is your
                    responsibility to check our website periodically for
                    changes. Your continued use of or access to our website or
                    the Service following the posting of any changes to these
                    Terms of Service constitutes acceptance of those changes.
                </p>

                <h3>SECTION 13 - CONTACT INFORMATION</h3>
                <p>
                    If you have any comments, questions, or requests, or if you
                    need to contact for any other reasons, you may contact us at{" "}
                    <u>aaronhsushidc@gmail.com</u>.
                </p>
                <p>[End of Terms and Conditions]</p>
            </div>
        </div>
    );
}

function PopupPP(props) {
    return (
        <div className="simple-modal">
            <div className="overlay" onClick={props.onClose}></div>
            <div className="modal-content">
                <button className="btn-close" onClick={props.onClose}>
                    <img src={iconClose} />
                </button>
                <h2>Privacy Policy</h2>
                <h3>SECTION 1 – WHAT DO WE DO WITH YOUR INFORMATION?</h3>
                <p>
                    When you place an order or request services, as part of the
                    buying and selling process, we collect the personal
                    information you give us such as your name, phone number and
                    email address.
                </p>
                <p>
                    When you browse our website, we also automatically receive
                    your computer’s internet protocol (IP) address in order to
                    provide us with information that helps us learn about your
                    browser and operating system.
                </p>

                <h3>SECTION 2 – CONSENT</h3>
                <h4>How do you get my consent?</h4>
                <p>
                    When you provide us with personal information to place an
                    order, request services or request a refund, we imply that
                    you consent to our collecting it and using it for that
                    specific reason only.
                </p>

                <h4>How do I withdraw my consent?</h4>
                <p>
                    If after you opt-in, you change your mind, you may withdraw
                    your consent for us to contact you, for the continued
                    collection, use or disclosure of your information, at
                    anytime, by contacting us at aaronhsushidc@gmail.com.
                </p>

                <h3>SECTION 4 – SECURITY</h3>
                <p>
                    To protect your personal information, we take reasonable
                    precautions and follow industry best practices to make sure
                    it is not inappropriately lost, misused, accessed,
                    disclosed, altered or destroyed.
                </p>

                <h3>SECTION 5 – AGE OF CONSENT</h3>
                <p>
                    By using this site, you represent that you are at least the
                    age of majority in your state or province of residence, or
                    that you are the age of majority in your state or province
                    of residence and you have given us your consent to allow any
                    of your minor dependents to use this site.
                </p>

                <h3>SECTION 6 – CHANGES TO THIS PRIVACY POLICY</h3>
                <p>
                    We reserve the right to modify this privacy policy at any
                    time, so please review it frequently. Changes and
                    clarifications will take effect immediately upon their
                    posting on the website. If we make material changes to this
                    policy, we will notify you here that it has been updated, so
                    that you are aware of what information we collect, how we
                    use it, and under what circumstances, if any, we use and/or
                    disclose it.
                </p>

                <h3>QUESTIONS AND CONTACT INFORMATION</h3>
                <p>
                    If you would like to: access, correct, amend or delete any
                    personal information we have about you or want more
                    information contact us at aaronhsushidc@gmail.com.
                </p>
            </div>
        </div>
    );
}
