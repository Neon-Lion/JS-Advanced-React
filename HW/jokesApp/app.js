"use strict";

const dom = {
    'content': document.querySelector('.content'),
    'button':  document.querySelector('.getJoke')
};

const jokes = {
    'url': "https://api.icndb.com/jokes/random",
}

// Get the joke by parsing the JSON string
function getJoke(joke) {
    const jokeResult = JSON.parse(joke);
    dom.content.innerHTML = jokeResult.value.joke;
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
    AJAXcall(jokes.url, getJoke);
});