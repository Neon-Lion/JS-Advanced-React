"use strict";

const dom = {
    'content': document.querySelector('.content'),
    'button':  document.querySelector('.getJoke')
};

const jokes = {
    'url': "https://api.icndb.com/jokes/random",
};

const state = {
    "joke": ""
};

// Set the HTML contained within the div with class "content"
function render() {
    dom.content.innerHTML = state.joke;
}

// Get the joke by parsing the JSON string
function changeState(json) {
    const result = JSON.parse(json);
    state.joke = result.value.joke;
    render();
}

function AJAXcall(dataURL, callback) {
    // Create a XMLHttpRequest object
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
        new ActiveXObject("Microsoft.XMLHTTP");

    // Initializes the request
    xhr.open("GET", dataURL);

    // EventHandler, that will be fired each time when the xhr state changes
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    };

    // Sends the request
    xhr.send();
};

// Add Event Listener for the button
dom.button.addEventListener('click', () => {
    AJAXcall(jokes.url, changeState);
});