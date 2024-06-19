document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const allTasksBtn = document.getElementById('all-tasks-btn');
    const activeTasksBtn = document.getElementById('active-tasks-btn');
    const completedTasksBtn = document.getElementById('completed-tasks-btn');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        const dueDate = dueDateInput.value;
        if (taskText !== '') {
            addTask(taskText, dueDate);
            taskInput.value = '';
            dueDateInput.value = '';
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        } else if (e.target.classList.contains('complete-btn')) {
            e.target.parentElement.classList.toggle('completed');
        }
    });

    allTasksBtn.addEventListener('click', () => filterTasks('all'));
    activeTasksBtn.addEventListener('click', () => filterTasks('active'));
    completedTasksBtn.addEventListener('click', () => filterTasks('completed'));

    function addTask(taskText, dueDate) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="task-date">${dueDate}</span>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
    }

    function filterTasks(filter) {
        const tasks = taskList.children;
        for (let task of tasks) {
            switch (filter) {
                case 'all':
                    task.style.display = '';
                    break;
                case 'active':
                    if (task.classList.contains('completed')) {
                        task.style.display = 'none';
                    } else {
                        task.style.display = '';
                    }
                    break;
                case 'completed':
                    if (!task.classList.contains('completed')) {
                        task.style.display = 'none';
                    } else {
                        task.style.display = '';
                    }
                    break;
            }
        }
    }
});
