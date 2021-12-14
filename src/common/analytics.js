import mixpanel from "mixpanel-browser";

mixpanel.init("7d8729435743710ec6034a9130ba9bee");

// Mapping of event names to timeout variables
var eventTimeouts = {};
var eventTimeoutFinished = {};

const track = (event, data) => {
    if (process.env.NODE_ENV === "production") {
        mixpanel.track(event, data);
    } else {
        console.log("analytics track " + event + ": " + JSON.stringify(data));
    }
};

const trackDebounce = (event, data, wait) => {
    const waitMs = wait || 3000;
    if (!!eventTimeouts[event]) {
        if (eventTimeoutFinished[event]) {
            clearTimeout(eventTimeouts[event]);
            delete eventTimeouts[event];
            delete eventTimeoutFinished[event];
        }
    } else {
        eventTimeouts[event] = setTimeout(function () {
            track(event, data);
            eventTimeoutFinished[event] = true;
        }, waitMs);
        eventTimeoutFinished[event] = false;
    }
};

const Analytics = {
    track: track,
    trackDebounce: trackDebounce,
};

export default Analytics;
