const tasks = [
    {id: 1, title: 'go to work', completed: false},
    {id: 2, title: 'daily meeting', completed: false},
    {id: 3, title: 'check emails', completed: false},
    {id: 4, title: 'breakfast smoothie', completed: false}
]

const addTask = (title) => {
    const newId = tasks.reduce((maxID, task) => Math.max(maxID, task.id), 0) + 1;
    tasks.push({ id: newId, title, complete: false });
}

const toggleTask = (id) => {
    const task = task.find(task => task.id === id);
    if(task) {
        task.completed = !task.completed
    };
}

const removeTask = (id) => {
    const index = tasks.findIndex(task => task.id === id);
        tasks.splice(index, 1);
}

const getAllTasks = () => tasks;

const getCompletedTasks = () => tasks.filter(task => task.completed);

const getIncompletedTasks = () => tasks.filter(task => !task.completed);

// using our functions
addTask('walk the dog');
console.log(tasks)