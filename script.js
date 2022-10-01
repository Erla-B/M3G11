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

// Event Listener - Error messages. This tells the function below what to display in error messages and when to open popup
form.addEventListener("submit", (e)=>{
    e.preventDefault();   

    const usernameOk = engine(username, 0, "User name cannot be blank")
    const emailOk = engine(email, 1, "Email cannot be blank")
    const passwordOk = engine(password, 2, "Password cannot be blank")
    const birthdayOk = engine(birthday, 3, "Date of birth cannot be blank")
    if (!usernameOk && !emailOk && !passwordOk && !birthdayOk) openPopup();
});


// Popup declarations
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
        return true;
    }
    else {
        errorMsg[serial].innerHTML = "";
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
        console.log(id);
        return false;
    }
}



