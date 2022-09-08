import moment from "moment";
import { countBy, find } from "lodash";

export const getMinDateTime = () => {
    let date = moment();
    date.hour(18);
    date.minute(0);
    date.second(0);
    date.day(1); // can only book tomorrow
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
    return momentDate.isAfter("2022-11-01");
};

// YYYY-MM-DD
const BOOKED_DATES = [
    "2022-07-01",
    "2022-07-02",
    "2022-07-03",
    "2022-07-08",
    "2022-07-09",
    "2022-07-14",
    "2022-07-15",
    "2022-07-16",
    "2022-07-17",
    "2022-07-21",
    "2022-07-22",
    "2022-07-23",
    "2022-07-24",
    "2022-07-28",
    "2022-07-29",
    "2022-07-30",
    "2022-07-31",
    "2022-08-04",
    "2022-08-05",
    "2022-08-06",
    "2022-08-07",
    "2022-08-11",
    "2022-08-12",
    "2022-08-13",
    "2022-08-14",
    "2022-08-18",
    "2022-08-19",
    "2022-08-20",
    "2022-08-21",
    "2022-08-25",
    "2022-08-26",
    "2022-08-27",
    "2022-08-28",
    "2022-09-01",
    "2022-09-02",
    "2022-09-03",
    "2022-09-04",
    "2022-09-08",
    "2022-09-09",
    "2022-09-10",
    "2022-09-15",
    "2022-09-16",
    "2022-09-17",
    "2022-09-18",
    "2022-09-23",
    "2022-09-30",
    "2022-10-08",
    "2022-10-09",
    "2022-10-13",
    "2022-10-29"
];
