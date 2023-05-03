// Selecting the form, input field and list element
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const listEl = document.querySelector("#tasks");

// Adding a submit event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Preventing the default form submission behavior

  // Getting the task input from the user
  const task = input.value;

  // Creating a new task element and adding the "task" class to it
  const taskEl = document.createElement('div');
  taskEl.classList.add('task');

  // Creating a new task content element and adding the "content" class to it
  const taskContentEl = document.createElement('div');
  taskContentEl.classList.add('content');

  // Appending the task content element to the task element
  taskEl.appendChild(taskContentEl);

  // Creating a new task input element, adding the "text" class to it, setting its type to "text",
  // and setting its value to the user's task input. Also setting it to be readonly by default.
  const taskInputEl = document.createElement('input');
  taskInputEl.classList.add('text');
  taskInputEl.type = 'text';
  taskInputEl.value = task;
  taskInputEl.setAttribute('readonly', 'readonly');

  // Appending the task input element to the task content element
  taskContentEl.appendChild(taskInputEl);

  // Creating a new task actions element and adding the "actions" class to it
  const taskActionsEl = document.createElement('div');
  taskActionsEl.classList.add('actions');

  // Creating a new task edit button element, adding the "edit" class to it, and setting its text content to "Edit"
  const taskEditEl = document.createElement('button');
  taskEditEl.classList.add('edit');
  taskEditEl.innerText = 'Edit';

  // Creating a new task delete button element, adding the "delete" class to it, and setting its text content to "Delete"
  const taskDeleteEl = document.createElement('button');
  taskDeleteEl.classList.add('delete');
  taskDeleteEl.innerText = 'Delete';

  // Appending the task edit and delete buttons to the task actions element
  taskActionsEl.appendChild(taskEditEl);
  taskActionsEl.appendChild(taskDeleteEl);

  // Appending the task actions element to the task element
  taskEl.appendChild(taskActionsEl);

  // Appending the task element to the list element
  listEl.appendChild(taskEl);

  // Clearing the input field after the task is added
  input.value = '';

  // Adding a click event listener to the task edit button
  taskEditEl.addEventListener('click', (event) => {
    // If the task edit button text is "Edit"
    if (taskEditEl.innerText.toLowerCase() == "edit") {
      // Change the text to "Save", remove the readonly attribute from the task input,
      // and set focus on the task input
      taskEditEl.innerText = "Save";
      taskInputEl.removeAttribute("readonly");
      taskInputEl.focus();
    } else {
      // Otherwise, change the text back to "Edit" and set the task input to readonly
      taskEditEl.innerText = "Edit";
      taskInputEl.setAttribute("readonly", "readonly");
    }
  });

  // Adding a click event listener to the task delete button
  taskDeleteEl.addEventListener('click', (event) => {
    // Remove the task element from the list element
    listEl.removeChild(taskEl);
  });
});
