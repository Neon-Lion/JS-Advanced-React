"use strict";

const dom = {
    'images':  document.images,
    'button':  document.querySelector('button'),
    'content': document.querySelector('.content')
};

// Change innerHTML of the content div
function renderText(data) {
    dom.content.innerHTML = data;
}

for(let i = 0; i < dom.images.length; i++)
{
    dom.images[i].addEventListener('click', () => {
        let dataURL = `http://127.0.0.1:5500/HW/songsLyricsAjaxLoad/songsTexts/${dom.images[i].name}.txt`;
        
        fetch(dataURL)
            .then( response => {
                if(response.status === 200) {
                    return response.text();
                }
                else {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
            })
            .then( data => renderText(data))
    });
}