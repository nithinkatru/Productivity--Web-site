// Task object constructor
function Task(name, desc, dueDate, priority) {
    this.name = name;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
  }
  
  // Task list object
  var taskList = {
    tasks: [],
  
    addTask: function(task) {
      this.tasks.push(task);
    },
  
    deleteTask: function(index) {
      this.tasks.splice(index, 1);
    }
  };
  
  // DOM manipulation
  var taskTableBody = document.querySelector('#view-tasks tbody');
  var taskForm = document.querySelector('#add-task form');
  
  // Add task event listener
  taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
  
    var name = taskForm.querySelector('#task-name').value;
    var desc = taskForm.querySelector('#task-desc').value;
    var dueDate = taskForm.querySelector('#due-date').value;
    var priority = taskForm.querySelector('#priority').value;
  
    var task = new Task(name, desc, dueDate, priority);
  
    taskList.addTask(task);
    renderTaskTable();
    taskForm.reset();
  });
  
  // Render task table
  function renderTaskTable() {
    taskTableBody.innerHTML = '';
  
    for (var i = 0; i < taskList.tasks.length; i++) {
      var task = taskList.tasks[i];
  
      var tr = document.createElement('tr');
      tr.classList.add('task-row');
      tr.dataset.index = i;
  
      var nameTd = document.createElement('td');
      nameTd.textContent = task.name;
      tr.appendChild(nameTd);
  
      var descTd = document.createElement('td');
      descTd.textContent = task.desc;
      tr.appendChild(descTd);
      // creating element called td
      var dueDateTd = document.createElement('td');
      dueDateTd.textContent = task.dueDate;
      tr.appendChild(dueDateTd);
  
      var priorityTd = document.createElement('td');
      priorityTd.textContent = task.priority;
      tr.appendChild(priorityTd);
      // var for the deleteid and creating element called td
      var deleteTd = document.createElement('td');
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-button');
      deleteTd.appendChild(deleteButton);
      tr.appendChild(deleteTd);
  
      taskTableBody.appendChild(tr);
    }
  }
  
  // Delete task event listener
  taskTableBody.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-button')) {
      var index = e.target.parentNode.parentNode.dataset.index;
  
      taskList.deleteTask(index);
      renderTaskTable();
    }
  });
  
  // Initial render of task table
  renderTaskTable();
  