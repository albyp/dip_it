const token = localStorage.getItem('token'); // Retrieve the JWT from storage

// Fetch and display tasks
const loadTasks = async () => {
    try {
        const response = await fetch('/tasks', {
            method: 'GET',
            headers: {
                'Authorisation': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description }),
        });

        const tasks = await response.json();

        if (response.ok) {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = ''; // Clear existing tasks
            
            tasks.forEach(task => {
                // Checkbox
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = task.completed;
                checkbox.classList.add('me-2');
                checkbox.addEventListener('change', async () => {
                    await updateTaskCompletion(task._id, checkbox.checked);
                });
    
                // Task title and description
                const taskInfo = document.createElement('div');
                taskInfo.innerHTML = `<strong>${tasl.title}</strong><br>${task.description}`;
    
                taskItem.appendChild(checkbox);
                taskItem.appendChild(taskInfo);
                taskItem.appendChild(taskItem);
            });
        } else {
            alert('Failed to load tasks.');
        }
    } catch (err) {
        console.error('Error fetching tasks:', err);
        alert('Could not load tasks. Please try again.');
    }
};

// Update task completion status
const updateTaskCompletion = async (taskId, completed) => {
    try {
        const response = await fetch(`/tasks/${taskId}`, {
            method: 'PATCH',
            headers: {
                'Authorisation': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed }),
        });

        if (!response.ok) {
            alert('Failed to update task status.');
        }
    } catch (err) {
        console.error('Error updating task:', err);
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