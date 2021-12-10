import mixpanel from "mixpanel-browser";

mixpanel.init("7d8729435743710ec6034a9130ba9bee");

const track = (event, data) => {
    if (process.env.NODE_ENV === "production") {
        mixpanel.track(event, data);
    } else {
        console.log("analytics track " + event + ": " + JSON.stringify(data));
    }
};

const Analytics = {
    track: track,
};

export default Analytics;
