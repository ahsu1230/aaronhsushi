import moment from "moment";

export const getMinDateTime = () => {
    let date = moment();
    date.hour(18);
    date.minute(0);
    date.second(0);
    date.day(6 + 7 + 7); // Select 2 Saturdays from now
    return date;
};

export const TimeOptions = [
    { value: 18, label: "6:00pm" },
    { value: 19, label: "7:00pm" },
    { value: 20, label: "8:00pm" },
];
