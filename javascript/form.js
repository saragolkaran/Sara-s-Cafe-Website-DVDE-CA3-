const RESERVE = document.querySelector("button[type='submit']");
const time = document.querySelector('input[type="radio"]');
RESERVE.addEventListener('click', (event) => { validationForm(event); });

const NAME = document.querySelector("#Name");
const EMAIL = document.querySelector("#email");
const TIME = document.querySelector("#time");


//Validate the whole form
function validationForm(e) {
    e.preventDefault();
    if (allLetter(NAME)) {
        console.log("Name is validated.")
        if (checkEmail(EMAIL)) {
            console.log("Email is validated.")
            if (checktime(TIME)) {
                console.log("Time is validated.")
                openThankyou('thankyou.html');
                return true;
            }
        }
    }
    return false;
}

//show pink color when invalid input is entered
function errorFocus(field) {
    field.style.backgroundColor = 'pink';
}

function bg_default(field) {
    field.style.backgroundColor = '';
}

//Validate name
function allLetter(name) {
    var letters = /^[A-Za-z]+$/;
    if (name.value == "") {
        alert('Please state down your name');
        name.focus();
        errorFocus(name);
        return false;
    } else {
        if (name.value.match(letters)) {
            bg_default(name)
            return true;
        }
        else {
            alert('Name must have alphabet characters only');
            name.focus();
            errorFocus(name);
            return false;
        }
    }
}

//validate email
function checkEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value == "") {
        alert('Email cannot be blank.');
        email.focus();
        errorFocus(email);
        return false;
    } else {
        if (email.value.match(mailformat)) {
            bg_default(email);
            return true;
        }
        else {
            alert("Please enter a valid email address.");
            email.focus();
            errorFocus(email);
            return false;
        }
    }
}

//function to validate time
function checktime(time) {
    var valid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(time.value);
    if (valid) {
        bg_default(time);
        return true;
    } else {
        alert("Please enter a valid time with HH:MM format.");
        time.focus();
        errorFocus(time);
        return false;
    }
}

//function to open a thank you page
function openThankyou(filename) {
    var current = location.pathname;
    var lastIndex = current.lastIndexOf('/');
    var newHTML = current.substring(0, lastIndex) + "/" + filename;
    location.pathname = newHTML;
}
