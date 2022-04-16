import moment from "moment";
import { countBy, find } from "lodash";

export const getMinDateTime = () => {
    let date = moment();
    date.hour(18);
    date.minute(0);
    date.second(0);
    date.day(3 + 7); // Select 1 Wednesday from now

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
    // Highlight weekend days (Thurs, Fri, Sat, Sun)
    return (
        date.day() == 4 || date.day() == 5 || date.day() == 6 || date.day() == 0
    );
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
    "2022-03-03",
    "2022-03-04",
    "2022-03-05",
    "2022-03-06",
    "2022-03-11",
    "2022-03-12",
    "2022-03-13",
    "2022-03-18",
    "2022-03-19",
    "2022-03-20",
    "2022-03-25",
    "2022-03-27",
    "2022-03-31",
    "2022-04-01",
    "2022-04-02",
    "2022-04-03",
    "2022-04-07",
    "2022-04-08",
    "2022-04-09",
    "2022-04-10",
    "2022-04-14",
    "2022-04-15",
    "2022-04-16",
    "2022-04-17",
    "2022-04-21",
    "2022-04-22",
    "2022-04-23",
    "2022-04-24",
    "2022-04-28",
    "2022-04-29",
    "2022-04-30",
    "2022-05-01",
    "2022-05-05",
    "2022-05-06",
    "2022-05-07",
    "2022-05-12",
    "2022-05-13",
    "2022-05-14",
    "2022-05-15",
    "2022-05-20",
    "2022-05-21",
    "2022-05-28",
    "2022-06-03",
    "2022-06-04",
    "2022-06-05",
    "2022-06-28",
    "2022-06-29",
    "2022-06-30",
    "2022-07-28",
    "2022-07-29",
    "2022-07-30",
    "2022-07-31",
];
