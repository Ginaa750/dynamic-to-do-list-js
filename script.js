document.addEventListener('DOMContentLoaded', function () {

    // Step 1: Select the elements
    const addButton = document.getElementById('add-task-btn');  // The "Add Task" button
    const taskInput = document.getElementById('task-input');    // The input field
    const taskList = document.getElementById('task-list');      // The list where tasks will appear

    // Step 2: Define the function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        if (taskText === '') {
            alert('Please enter a task.'); // Alert if the input is empty
            return;
        }

        // Step 3: Create a new list item (li)
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Step 4: Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Step 5: Add event to remove the task when clicked
        removeButton.onclick = function () {
            taskList.removeChild(listItem); // Remove the li from the list
        };

        // Step 6: Add the button to the task, and the task to the list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Step 7: Clear the input field
        taskInput.value = '';
    }

    // Step 8: Add event listener for clicking the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Step 9: Add event listener to allow "Enter" key to add tasks
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(); // Trigger addTask when Enter is pressed
        }
    });

});