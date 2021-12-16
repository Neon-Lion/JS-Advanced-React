"use strict";

const dom = {
    cookie: document.cookie,
    body: document.body,
    backgroundColor: document.querySelector("#backgroundColor"),
    setBackgroundColor: document.querySelector("#setBackgroundColor")
};

// Set Cookie
function setCookie(cName,cValue,expDays) {
    let expires = "";

    if (expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        expires = "; Expires=" + date.toUTCString();
    }

    document.cookie = cName + "=" + (cValue || "")  + expires + "; Path=/";
};

// Get Cookie
function getCookie(cName) {
    let name = cName + "=";
    let split = document.cookie.split(';');

    for(let i = 0; i < split.length; i++) {
        let char = split[i];

        while (char.charAt(0) == ' ') {
            char = char.substring(1, char.length);
        }

        if (char.indexOf(name) == 0) {
            return char.substring(name.length, char.length);
        }
    }

    return null;
};

// Check if Cookie exists and set it in case it doesn't exists
function checkCookie(cookie) {
    let background = dom.backgroundColor;
    let selectedColor = background.options[background.selectedIndex].value;

    // Checking whether backgroundColor is null or not
    if (selectedColor != "") {
        // Set background color Cookie
        setCookie(cookie, `${selectedColor}`, 30);

        // Set background color CSS using the setted cookie
        let backgroundColor = getCookie(cookie);
        dom.body.style.backgroundColor = backgroundColor;
    }
    // If backgroundColor is null
    else {
        // If backgroundColor is not null then alert
        alert("Background color is " + backgroundColor);
    }
};

dom.setBackgroundColor.addEventListener('click', () => {
    checkCookie("backgroundColor");
});