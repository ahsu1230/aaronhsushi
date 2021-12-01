"use strict";

import mixpanel from "mixpanel-browser";

export const generateEmailMessage = (data) => {
    return [
        "<html>",
        "<body>",
        "<h1>New Omakase Request</h>",
        "<h2>Full Name: " + data.fullName + "</h2>",
        "<h2>Email: " + data.email + "</h2>",
        "<h2>Phone Number: " + data.phone + "</h2>",
        "<h2>DateTime: " +
            data.datetime.format("dddd, MMM Do YYYY, h:mm a") +
            "</h2>",
        "<h2>Number of Guests: " + data.numGuests + "</h2>",
        "<br/>",
        "<br/>",
        "<h2>Omakase Additions:</h2>",
        "<h4>" + data.omakaseAdditions.join(",") + "</h4>",
        "<br/>",
        "<p>Dietary Restrictions: " + data.dietRestrictions + "</p>",
        "<p>Additional Accommodation: " + data.additionalRequests + "</p>",
        "<p>Additional Information: " + data.additionalInfo + "</p>",
        "<h3>Estimated Cost Per Guest: $" +
            data.estimatedCostPerGuest +
            "</h3>",
        "<h4>Agreed to ToS and PP: " + data.hasAgreedToS + "</h4>",
        "</body>",
        "</html>",
    ].join("\n");
};

export const sendEmail = (message, onSuccess, onFail) => {
    if (process.env.NODE_ENV === "development") {
        sendTestEmail(true, onSuccess, onFail);
    } else {
        sendProdEmail(message, onSuccess, onFail);
    }
};

const sendProdEmail = (message, onSuccess, onFail) => {
    console.log("Sending prod email...");
    const templateId = "omakase_request";
    var templateParams = {
        emailMessage: message,
    };

    window.emailjs
        .send("mailgun", templateId, templateParams)
        .then((res) => {
            console.log("Email successfully sent!");
            if (onSuccess) {
                onSuccess();
            }
            mixpanel.track("submit_request_success");
        })
        .catch((err) => {
            console.error("Failed to send email. Error: ", err);
            if (onFail) {
                onFail();
            }
            mixpanel.track("submit_request_fail");
        });
};

const sendTestEmail = (success, onSuccess, onFail) => {
    console.log("Sending test email...");
    if (success && onSuccess) {
        console.log("Successfully sent.");
        onSuccess();
    } else if (onFail) {
        console.log("Failed to send.");
        onFail();
    }
};
