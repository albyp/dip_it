const token = localStorage.getItem('token'); // Retrieve JWT from storage

// Fetch and display tasks
const loadTasks = async () => {
    try {
        const response = await fetch('/tasks', {
            headers: { 'Authorisation': token },
        });

        const tasks = await response.json();

        const taskList = document.getElementById('taskList');
        taskList.innerHTML = ''; // Clear existing tasks

        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.classList.add('list-group-item');
            taskItem.textContent = `${task.title}: ${task.description}`;
            taskList.appendChild(taskItem);
        });
    } catch (err) {
        console.error('Error fetching tasks:', err);
        alert('Could not load tasks. Please try again.');
    }
};

// Add new task
document.getElementById('taskForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;

    try {
        const response = await fetch('/tasks', {
            method: 'POST',
            headers: {
                'Authorisation': token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description }),
        });

        const result = await response.json();

        if (response.ok) {
            alert('Task added successfully!');
            loadTasks(); // Reload tasks
        } else {
            alert(result.error);
        }
    } catch (err) {
        console.error('Error adding task:', err);
        alert('Could not add task. Please try again.');
    }
});

// Load tasks on page load
loadTasks();