"use strict";

// setTimeOut for alerts
function setTimeOutForAlerts(alertMessage, alertType, seconds) {
    const feedback = document.querySelector('.feedback');

    feedback.innerText = alertMessage;
    feedback.classList.add('showItem', 'alert-' + alertType);
    setTimeout(
        function() {
            feedback.classList.remove('showItem', 'alert-' + alertType);
        }, seconds);
}

// Getting number of childNode inside a parentNode
function getChildNodeNumbers(parent, child) {
    const allTasks = parent.getElementsByTagName(child).length;
    return allTasks;
}

// Creating new task list item
function createNewTask(task) {
    const ul     = document.getElementById('todo-items');
    const output = document.getElementById("todo-output");
    const text   = document.createTextNode(task);
   // ------------------------------------------ Create elements ------------------------------------------
    const li   = document.createElement("li"); 
    const span = document.createElement("span");

    const divComplete = document.createElement("div");
    const divEdit     = document.createElement("div");
    const divRemove   = document.createElement("div");

    const iconComplete = document.createElement("i");
    const iconEdit     = document.createElement("i");
    const iconRemove   = document.createElement("i");
    // ------------------------------------------ Add classNames -------------------------------------------
    divComplete.className = "action-icon complete";
    divEdit.className     = "action-icon edit";
    divRemove.className   = "action-icon remove";

    iconComplete.className = "far fa-check-square";
    iconEdit.className     = "fas fa-pencil-alt";
    iconRemove.className   = "far fa-trash-alt";
    // ------------------------------------------ AppendChilds ---------------------------------------------
    span.appendChild(text);
    divComplete.appendChild(iconComplete);
    divEdit.appendChild(iconEdit);
    divRemove.appendChild(iconRemove);

    li.appendChild(span);
    li.appendChild(divComplete);
    li.appendChild(divEdit);
    li.appendChild(divRemove);
    // ------------------------------------------ Event Listeners ------------------------------------------
    divRemove.addEventListener("click", (e) => {      
        const item = e.target;

        if (item.classList[1] === "fa-trash-alt") {
            li.classList.add("fade");
            li.parentNode.removeChild(li);

            output.innerText = (getChildNodeNumbers(ul, "li"));
            
            setTimeOutForAlerts('To do item was deleted successfully.', 'success', 3000);
        }
    });

    divEdit.addEventListener("click", () => {
        const editValue = prompt("Edit the selected item", span.innerText);
        span.innerText = editValue;
        setTimeOutForAlerts("To do item was edited successfully.", "success", 3000);
    });

    divComplete.addEventListener("click", (e) => {
        const item = e.target;

        if (item.classList[1] === "fa-check-square") {
            span.classList.toggle("completed");
        }
    });
	
    return li;
}

// Add the new list item
function addTodo() {
    const ul       = document.getElementById('todo-items');
    let inputValue = document.getElementById("todo-input").value;
    const output   = document.getElementById("todo-output");

    const li = createNewTask(inputValue);

    if (inputValue === '') {
        setTimeOutForAlerts('Please enter valid value.', 'danger', 3000);
    }
    else {
        // Append li element as a child to ul tag
        ul.appendChild(li);

        // Count li elements inside ul
        output.innerText = getChildNodeNumbers(ul, "li");
        
        // Make input field empty
        document.getElementById("todo-input").value = '';
    }
}