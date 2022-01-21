import moment from "moment";
import { countBy, find } from "lodash";

export const getMinDateTime = () => {
    let date = moment();
    date.hour(18);
    date.minute(0);
    date.second(0);
    date.day(5 + 7 + 7); // Select 2 Fridays from now

    // Find next available date
    while (!isDateAvailable(date)) {
        date.add(1, "d");
    }
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
export const isDateOutsideRange = (date, minDate) => {
    // Day must be at or after minimum date
    return date.isBefore(minDate, "day");
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

const isDateAvailable = (date) => {
    return isDateHighlighted(date) && !isDateBlocked(date) && !isDateBusy(date);
};

// YYYY-MM-DD
const BOOKED_DATES = [
    "2022-01-01",
    "2022-01-02",
    "2022-01-07",
    "2022-01-08",
    "2022-01-09",
    "2022-01-14",
    "2022-01-15",
    "2022-01-16",
    "2022-01-21",
    "2022-01-22",
    "2022-01-23",
    "2022-01-28",
    "2022-01-29",
    "2022-01-30",
    "2022-02-04",
    "2022-02-05",
    "2022-02-06",
    "2022-02-11",
    "2022-02-12",
    "2022-02-13",
    "2022-02-18",
    "2022-02-19",
    "2022-02-20",
    "2022-02-25",
    "2022-02-26",
    "2022-02-27",
    "2022-03-04",
    "2022-03-05",
    "2022-03-11",
    "2022-03-12",
    "2022-03-13",
    "2022-03-18",
    "2022-03-19",
    "2022-03-20",
    "2022-03-25",
    "2022-03-26",
];
