const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexName = /^[A-Z]([-']?[A-Za-z]+)*( [A-Za-z]([-']?[A-Za-z]+)*)+$/;
const regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

export const InvalidMessages = {
    fullName: "Please enter your first and last name",
    email: "Please enter a valid email",
    phone: "Please enter a valid phone number",
    numGuests: "Due to limited space, I can only host 2-6 people at a time.",
    additionalInfo: "Please provide more details.",
    hasAgreedToS:
        "You must agree to the Terms of Services to submit a reservation request.",
    location:
        "You must enter an address or a nearby city (e.g. Rockville, MD).",
    parkingInstructions:
        "You must enter parking instructions for the chef (e.g. free street parking, driveway, garage, etc.).",
};

export const validateName = (name) => {
    return !!name && regexName.test(name);
};

export const validateEmail = (email) => {
    return !!email && regexEmail.test(email.toLowerCase());
};

export const validatePhone = (phone) => {
    // return regexPhone.test(phone);
    return !!phone && (phone.match(/\d/g) || "").length === 10; // ez. Just looks for 10 digits.
};

export const validateNumGuests = (num) => {
    return num >= 2 && num <= 6;
};

export const validateAdditionalInfo = (info) => {
    return info.length >= 10;
};

export const validateToS = (val) => {
    return !!val;
};

export const validateLocation = (loc) => {
    const location = loc.toUpperCase();
    return (
        location.indexOf("MD") >= 0 ||
        location.indexOf("VA") >= 0 ||
        location.indexOf("DC") >= 0
    );
};

export const validateParkingInstructions = (instruct) => {
    return instruct && instruct.length >= 5;
};

export const Validators = {
    fullName: validateName,
    email: validateEmail,
    phone: validatePhone,
    numGuests: validateNumGuests,
    additionalInfo: validateAdditionalInfo,
    hasAgreedToS: validateToS,
    location: validateLocation,
    parkingInstructions: validateParkingInstructions,
};
