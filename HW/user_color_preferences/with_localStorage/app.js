"use strict";

const dom = {
    body: document.body,
    backgroundColor: document.querySelector("#backgroundColor"),
    setBackgroundColor: document.querySelector("#setBackgroundColor")
};

// Save background color in localStorage
function saveLocalBackgroundColor() {
    let background = dom.backgroundColor;
    let selectedColor = background.options[background.selectedIndex].value;
    let storage = window.localStorage;

    if(selectedColor == "") {
        alert("Choose background color");
    }
    else {        
        // Set background color CSS
        dom.body.style.backgroundColor = selectedColor;

        // Save the color to the localStorage
        storage.setItem("backgroundColor", JSON.stringify(selectedColor));
    }
}

// Set background color
dom.setBackgroundColor.addEventListener('click', saveLocalBackgroundColor);