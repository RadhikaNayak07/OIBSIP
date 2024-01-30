let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const task = {
      text: taskText,
      completed: false,
      date: new Date().toLocaleString()
    };

    tasks.push(task);
    displayTasks();
    taskInput.value = '';
  }
}

function displayTasks() {
  const pendingList = document.getElementById('pendingList');
  const completedList = document.getElementById('completedList');

  pendingList.innerHTML = '';
  completedList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">${task.text} (${task.date})</span>
      <button onclick="completeTask(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;

    if (task.completed) {
      completedList.appendChild(listItem);
    } else {
      pendingList.appendChild(listItem);
    }
  });
}

function completeTask(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

displayTasks(); 