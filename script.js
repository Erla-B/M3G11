// Arrow functions to make the code neater
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

// Targeting id & classes
let username = id("username"),
    email = id("email"),
    password = id("password"),
    birthday = id("birthday"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

// Event Listener - Error messages
form.addEventListener("submit", (e)=>{
    e.preventDefault();   

    engine(username, 0, "User name cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
    engine(birthday, 3, "Date of birth cannot be blank");
});


// Popup
let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}


// This is a function to show the error messages
let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }
    else {
        errorMsg[serial].innerHTML = "";
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}


// This is for the popup window

/* popUpButton = document.getElementById("submit")

popUpButton.addEventListener("click", popUpNow);

function popUpNow(e) {
    e.preventDefault();

    document.querySelector(".popup").style.visibility = "visible";
}

const closePopup = document.getElementById("close")

closePopup.addEventListener("click", closePopup);

function closePopup(e) {
    e.preventDefault();

    document.querySelector(".popup").style.visibility = "hidden";
} */

