import moment from "moment";
import { countBy, find } from "lodash";

export const getMinDateTime = () => {
    let date = moment();
    date.hour(18);
    date.minute(0);
    date.second(0);
    date.add(1, "d"); // cannot book today, must book at least tomorrow
    // date.day(3 + 7); // Select 1 Wednesday from now

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
    return (
        !isDateHighlighted(date) || isDateRestaurant(date) || isDateBusy(date)
    );
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
    return (
        isDateHighlighted(date) &&
        !isDateBlocked(date) &&
        !isDateBusy(date) &&
        !isDateRestaurant(date)
    );
};

const isDateRestaurant = (date) => {
    const momentDate = moment(date);
    return momentDate.isAfter("2023-01-30");
};

// YYYY-MM-DD
const BOOKED_DATES = [
    "2022-11-03",
    "2022-11-04",
    "2022-11-05",
    "2022-11-06",
    "2022-11-10",
    "2022-11-13",
    "2022-11-17",
    "2022-11-18",
    "2022-11-24",
    "2022-11-25",
    "2022-11-26",
    "2022-11-27",
    "2022-12-01",
    "2022-12-02",
    "2022-12-03",
    "2022-12-04",
    "2022-12-08",
    "2022-12-09",
    "2022-12-10",
    "2022-12-11",
    "2022-12-15",
    "2022-12-16",
    "2022-12-17",
    "2022-12-18",
    "2022-12-22",
    "2022-12-29",
    "2022-12-30",
    "2022-12-31",

    "2023-01-01",
    "2023-01-05",
    "2023-01-06",
    "2023-01-07",
    "2023-01-08",
    
    "2023-01-12",
    "2023-01-13",
    "2023-01-14",
    "2023-01-15",

    "2023-01-19",
    "2023-01-20",
    "2023-01-21",
    "2023-01-22",

    "2023-01-27",
    "2023-01-28",
    "2023-01-29",
    "2023-01-30",
];
