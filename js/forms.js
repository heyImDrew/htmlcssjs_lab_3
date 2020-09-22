function Validate() {
    let name = document.contact.name.value;
    let date = document.contact.date.value;
    let email = document.contact.email.value;
    let ch = document.getElementById("music").checked;
    let success = true;
    if (ValidateName(name) == false) {
        ValidateError("name");
        success = false;
    }
    if (ValidateEmail(email)==false) {
        ValidateError("email");
    }
    if (!date) {
        ValidateError("date")
        success = false;
    }
    if (success == true) {
        ValidateSuccess(name, date, email, ch); 
    }
}

function ValidateName(name) {
    if (!name) {
        return false;
    }
    else if (name.match("[0-9]")) {
        return false;
    }
    else {
        return true;
    }
}

function ValidateEmail(email) {
    if (!email) {
        return false;
    }
    else if (email.match("[a-zA-Z0-9]+@+[a-zA-Z\.]")) {
        return true;
    }
    else {
        return false;
    }
}

function ValidateError(error) {
    if (error == "name") {
        alert("You forgot to tell us name!");
    }
    if (error == "date") {
        alert("You forgot to tell us date!");
    }
    if (error == "email") {
        alert("Wrong email address!");
    }
}

function ValidateSuccess(name, date, email, ch) {
    var tmp = {};
    tmp.name = name;
    tmp.date = date;
    tmp.email = email;
    tmp.music = "Wanted";
    if (ch == false) {
        tmp.music = "Not wanted";
    }
    sessionStorage.setItem(getStorageLength(), JSON.stringify(tmp));
    window.open("second.html");
}

function getStorageLength() {
    return Object.keys(sessionStorage).length;
}