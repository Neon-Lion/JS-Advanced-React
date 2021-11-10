"use strict";
// --------------------------- Sort array of objects by key ---------------------------
// Given is an array of todos objects:
const todos = [
	{
		title:'Todo1',
		completed: true,
		priority:'low'
	},
	{
		title:'Todo2',
		completed: false,
		priority:'low'
	},
	{
		title:'Todo3',
		completed: true,
		priority:'high'
	},
	{
		title:'Todo4',
		completed: true,
		priority:'medium'
	},
	{
		title:'Todo5',
		completed: false,
		priority:'high'
	},
	{
		title:'Todo6',
		completed: true,
		priority:'low'
	},
]

// Function which will return a new array in which the elements of 
// todos array will be sorted by key (property) in ascending order.
function sortArrayByKey(arr, byKey) {
    let sortedData;

    if(byKey == 'title') {
        sortedData = arr.sort(function(a, b) {
            let x = a.title.toLowerCase();
            let y = b.title.toLowerCase();

            //compare the word which comes first
            if(x > y) return  1; 
            if(x < y) return -1;

            return 0;
        });
    }
    
    if(byKey == 'priority') {
        sortedData = arr.sort(function(a, b) {
            let x = a.priority.toLowerCase();
            let y = b.priority.toLowerCase();
         
            //compare the word which comes first
            if(x > y) return  1; 
            if(x < y) return -1;

            return 0;
        });
    }

    return sortedData;
}

// Version 1
console.log( sortArrayByKey(todos, 'priority') );

// Version 2
// const sortedTodosByPriority = sortArrayByKey(todos, 'priority');
// console.log( sortedTodosByPriority );

// EXPECTED OUTPUT:
/* 
    [
        title: 'Todo3', completed: true, priority: 'high' },
        title: 'Todo5', completed: false, priority: 'high' },
        title: 'Todo1', completed: true, priority: 'low' },
        title: 'Todo2', completed: false, priority: 'low' },
        title: 'Todo6', completed: true, priority: 'low' },
        title: 'Todo4', completed: true, priority: 'medium' }
    ]
*/