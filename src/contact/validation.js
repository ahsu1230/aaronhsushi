const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexName = /^[A-Z]([-']?[A-Za-z]+)*( [A-Za-z]([-']?[A-Za-z]+)*)+$/;
const regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

export const InvalidMessages = {
    fullName: "Please enter your first and last name",
    email: "Please enter a valid email",
    phone: "Please enter a valid phone number",
    numGuests: "Due to limited space, I can only host 1-4 people at a time.",
};

export const validateName = (name) => {
    return !!name && regexName.test(name);
};

export const validateEmail = (email) => {
    return !!email && regexEmail.test(email.toLowerCase());
};

export const validatePhone = (phone) => {
    // return regexPhone.test(phone);
    return !!phone && phone.match(/\d/g).length === 10; // ez. Just looks for 10 digits.
};

export const validateNumGuests = (num) => {
    return num > 0 && num <= 4;
};

export const validateDate = (date) => {};

export const validateTime = (time) => {};

export const Validators = {
    fullName: validateName,
    email: validateEmail,
    phone: validatePhone,
    numGuests: validateNumGuests,
};
