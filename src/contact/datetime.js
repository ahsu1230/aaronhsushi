import moment from "moment";
import { countBy, find } from "lodash";

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

// Given a day, is it available for reservation?
export const isDateHighlighted = (date) => {
    // Highlight weekend days
    return date.day() == 6 || date.day() == 0;
};

// Given a date, should it even be viewable/selectable?
export const isDateOutsideRange = (date) => {
    // Day must be at or after minimum date
    return date.isBefore(getMinDateTime(), "day");
};

// Given a date, is it blocked or unavailable?
export const isDateBlocked = (date) => {
    // Day is blocked if not Saturday or Sunday
    return (date.day() != 6 && date.day() != 0) || isDateBusy(date);
};

const isDateBusy = (date) => {
    let busyDate = find(BOOKED_DATES, (bookedDate) => {
        const momentDate = moment(date);
        const momentBookedDate = moment(bookedDate);
        // console.log(momentBookedDate.format("l") + " " + momentBookedDate.isSame(momentDate, 'day'));
        return momentBookedDate.isSame(momentDate, "day");
    });
    return !!busyDate;
};

// YYYY-MM-DD
const BOOKED_DATES = [
    "2021-10-16",
    "2021-10-17",
    "2021-10-23",
    "2021-10-24",
    "2021-11-13",
    "2021-11-14",
    "2021-11-20",
];
