"use strict";

const dom = {
    ul:        document.getElementById('todo-items'),
    input:     document.getElementById("todo-input"),
    output:    document.getElementById("todo-output"),
    addButton: document.getElementById("add-btn"),
    feedback:  document.querySelector('.feedback'),
};

// setTimeOut for alerts
function setTimeOutForAlerts(alertMessage, alertType, seconds) {
    dom.feedback.innerText = alertMessage;
    dom.feedback.classList.add('showItem', 'alert-' + alertType);
    setTimeout(
        function() {
            dom.feedback.classList.remove('showItem', 'alert-' + alertType);
        }, seconds);
}

// Getting number of childNode inside a parentNode
function getChildNodeNumbers(parent, child) {
    const allTasks = parent.getElementsByTagName(child).length;
    return allTasks;
}

// Creating new task list item
function createNewTask(task) {
    const text = document.createTextNode(task);
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
    // ------------------------------------------ Event Listeners for Remove, Edit and Complete todo -------
    // Remove Event Listener
    divRemove.addEventListener("click", (e) => {      
        const item = e.target;

        if (item.classList[1] === "fa-trash-alt") {
            li.classList.add("fade");
            li.parentNode.removeChild(li);

            dom.output.innerText = (getChildNodeNumbers(dom.ul, "li"));
            
            setTimeOutForAlerts('To do item was deleted successfully.', 'success', 3000);
        }
    });

    // Edit Event Listener
    divEdit.addEventListener("click", () => {
        const editValue = prompt("Edit the selected item", span.innerText);
        span.innerText = editValue;
        setTimeOutForAlerts("To do item was edited successfully.", "success", 3000);
    });

    // Complete Event Listener
    divComplete.addEventListener("click", (e) => {
        const item = e.target;

        if (item.classList[1] === "fa-check-square") {
            span.classList.toggle("completed");
        }
    });
	
    return li;
}

// Add the new list item
const addTodo = function() {
    const li = createNewTask(dom.input.value);

    if (dom.input.value === '') {
        setTimeOutForAlerts('Please enter valid value.', 'danger', 3000);
    }
    else {
        // Append li element as a child to ul tag
        dom.ul.appendChild(li);

        // Count li elements inside ul
        dom.output.innerText = getChildNodeNumbers(dom.ul, "li");
        
        // Make input field empty
        dom.input.value = '';

        setTimeOutForAlerts("To do item was added successfully.", "success", 3000);
    }
};

// ------------------------------------------ Event Listener for Add todo ----------------------------------
// Add todo if button is clicked
dom.addButton.addEventListener('click', () => {
    addTodo();
});

// Add todo if Enter is pressed
dom.input.addEventListener('keyup', function(e) {
	if(e.keyCode === 13) {
		addTodo();
	}
});