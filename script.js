document.addEventListener('DOMContentLoaded', function () {

    // Step 1: Select the elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 2: Load tasks from localStorage when the page loads
    loadTasks();

    // Step 3: Define the function to add a task
    function addTask(taskText, save = true) {
        const trimmedText = taskText.trim();
        if (trimmedText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create list item
        const listItem = document.createElement('li');
        listItem.textContent = trimmedText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Remove task on click
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
            removeTaskFromStorage(trimmedText);
        };

        // Add button to list item and item to list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Save to localStorage if not loading from storage
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(trimmedText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Clear input
        taskInput.value = '';
    }

    // Step 4: Load tasks from localStorage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(task => addTask(task, false)); // Don't save again when loading
    }

    // Step 5: Remove a task from localStorage
    function removeTaskFromStorage(taskToRemove) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskToRemove);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Step 6: Add listeners
    addButton.addEventListener('click', () => {
        addTask(taskInput.value);
    });

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

});
