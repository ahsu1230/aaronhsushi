import moment from "moment";
import { countBy, find } from "lodash";

export const getMinDateTime = () => {
    let date = moment();
    date.hour(18);
    date.minute(0);
    date.second(0);
    date.day(5 + 7 + 7); // Select 2 Fridays from now
    return date;
};

export const TimeOptions = [
    { value: 18, label: "6:00pm" },
    { value: 19, label: "7:00pm" },
    { value: 20, label: "8:00pm" },
];

// Given a day, is it available for reservation?
export const isDateHighlighted = (date) => {
    // Highlight weekend days (Fri, Sat, Sun)
    return date.day() == 5 || date.day() == 6 || date.day() == 0;
};

// Given a date, should it even be viewable/selectable?
export const isDateOutsideRange = (date) => {
    // Day must be at or after minimum date
    return date.isBefore(getMinDateTime(), "day");
};

// Given a date, is it blocked or unavailable?
export const isDateBlocked = (date) => {
    // Day is blocked if not Saturday or Sunday
    return !isDateHighlighted(date) || isDateBusy(date);
};

const isDateBusy = (date) => {
    let busyDate = find(BOOKED_DATES, (bookedDate) => {
        const momentDate = moment(date);
        const momentBookedDate = moment(bookedDate);
        return momentBookedDate.isSame(momentDate, "day");
    });
    return !!busyDate;
};

// YYYY-MM-DD
const BOOKED_DATES = [
    "2021-11-6",
    "2021-11-7",
    "2021-11-13",
    "2021-11-14",
    "2021-11-20",
    "2021-11-21",
    "2021-12-3",
    "2021-12-4",
    "2021-12-5",
    "2021-12-10",
    "2021-12-11",
    "2021-12-12",
    "2021-12-17",
    "2021-12-18",
    "2021-12-19",
    "2021-12-24",
    "2021-12-25",
    "2021-12-26",
    "2021-12-31",
    "2022-01-01",
    "2022-01-02",
    "2022-01-07",
    "2022-01-08",
    "2022-01-09",
    "2022-01-14",
    "2022-01-22",
    "2022-02-05",
];
