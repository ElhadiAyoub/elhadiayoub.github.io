//Error message management
const loginMessageBox = document.getElementById("login-message-box");
const loginMessage = document.getElementById("login-message");
const loginMessageClose = document.getElementById("login-message-close");

loginMessageClose.addEventListener("click", function() {
    loginMessageBox.style.display = "none";
});

/* if (loginMessage.innerHTML.trim() == "") {
    loginMessageBox.style.display = "none";
} */

if (loginMessage.innerHTML.trim() == "") {
    loginMessageBox.style.display = "none";
} else {
    loginMessageBox.style.display = "block";
}

//Login tab management
var selectedTabIndex = document.getElementById("active-tab");

const loginBox = document.getElementById("login-box");
const registerBox = document.getElementById("register-box");
const recoverBox = document.getElementById("recover-box");

const loginLink = document.getElementsByClassName("login-link");
const registerLink = document.getElementsByClassName("register-link");
const recoverLink = document.getElementsByClassName("recover-link");

function hideAll() {
    loginBox.style.display = "none";
    registerBox.style.display = "none";
    recoverBox.style.display = "none";
}
hideAll();

if (selectedTabIndex.innerHTML == 1) {
    showRegisterBox();
} else if (selectedTabIndex.innerHTML == 2) {
    showRecoverBox();
} else {
    showLoginBox();
}

function showLoginBox() {
    loginBox.style.display = "block";

}
for (let i = 0; i < loginLink.length; i++) {
    loginLink[i].addEventListener("click", function() {
        hideAll();
        showLoginBox();
        loginMessageBox.style.display = "none";
    });
}

function showRegisterBox() {
    registerBox.style.display = "block";
}
for (let i = 0; i < registerLink.length; i++) {
    registerLink[i].addEventListener("click", function() {
        hideAll();
        showRegisterBox();
        loginMessageBox.style.display = "none";
    });
}

function showRecoverBox() {
    recoverBox.style.display = "block";
}
for (let i = 0; i < recoverLink.length; i++) {
    recoverLink[i].addEventListener("click", function() {
        hideAll();
        showRecoverBox();
        loginMessageBox.style.display = "none";
    });
}

//Loader management
var loader = document.getElementById("loader-box");
var loginButtons = document.getElementsByClassName("login-button");

for (let i = 0; i < loginButtons.length; i++) {
    loginButtons[i].addEventListener("click", function() {
        loader.style.display = "block";
    });
}