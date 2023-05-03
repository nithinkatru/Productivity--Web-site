// Selecting the goal form and goal list from the HTML
var goalForm = document.querySelector('#goal-form');
var goalList = document.querySelector('#goal-ul');

// Adding an event listener to the goal form for when it is submitted
goalForm.addEventListener('submit', function(event) {
event.preventDefault(); // Preventing the default form submission behavior

// Selecting the input fields for the goal's title, description, and deadline
var titleInput = document.querySelector('#goal-title');
var descriptionInput = document.querySelector('#goal-description');
var deadlineInput = document.querySelector('#goal-deadline');

// Creating a goal object with the input values and an empty milestones array
var goal = {
title: titleInput.value,
description: descriptionInput.value,
deadline: deadlineInput.value,
milestones: []
};

// Calling the addGoal function with the goal object as an argument
addGoal(goal);

// Clearing the input fields after the goal has been added
titleInput.value = '';
descriptionInput.value = '';
deadlineInput.value = '';
});

// Defining the addGoal function, which creates a goal item and adds it to the goal list
function addGoal(goal) {
// Creating a list item element for the goal item and adding a class
var goalItem = document.createElement('li');
goalItem.classList.add('goal-item');

// Creating a header element for the goal's title and adding it to the goal item
var titleHeader = document.createElement('h4');
titleHeader.textContent = goal.title;
goalItem.appendChild(titleHeader);

// Creating a paragraph element for the goal's description and adding it to the goal item
var descriptionParagraph = document.createElement('p');
descriptionParagraph.textContent = goal.description
goalItem.appendChild(descriptionParagraph);

// Creating a paragraph element for the goal's deadline and adding it to the goal item
var deadlineParagraph = document.createElement('p');
deadlineParagraph.textContent = 'Deadline: ' + goal.deadline;
goalItem.appendChild(deadlineParagraph);

// Creating a header element for the goal's milestones and adding it to the goal item
var milestonesHeader = document.createElement('h5');
milestonesHeader.textContent = 'Milestones';
goalItem.appendChild(milestonesHeader);

// Creating a form element for adding milestones to the goal
var milestoneForm = document.createElement('form');
milestoneForm.addEventListener('submit', function(event) {
event.preventDefault(); // Preventing the default form submission behavior

  var milestoneTitleInput = milestoneForm.querySelector('.milestone-title');
  var milestoneDescriptionInput = milestoneForm.querySelector('.milestone-description');

  var milestone = {
    title: milestoneTitleInput.value,
    description: milestoneDescriptionInput.value,
    completed: false
  };

  goal.milestones.push(milestone);

  milestoneTitleInput.value = '';
  milestoneDescriptionInput.value = '';

  updateGoalItem(goalItem, goal);
});

var milestoneTitleLabel = document.createElement('label');
milestoneTitleLabel.textContent = 'Title';
milestoneForm.appendChild(milestoneTitleLabel);

var milestoneTitleInput = document.createElement('input');
milestoneTitleInput.classList.add('milestone-title');
milestoneTitleInput.type = 'text';
milestoneForm.appendChild(milestoneTitleInput);

var milestoneDescriptionLabel = document.createElement('label');
milestoneDescriptionLabel.textContent = 'Description';
milestoneForm.appendChild(milestoneDescriptionLabel);

var milestoneDescriptionInput = document.createElement('textarea');
milestoneDescriptionInput.classList.add('milestone-description');
milestoneForm.appendChild(milestoneDescriptionInput);

// Create a button to add the milestone to the goal
var addMilestoneButton = document.createElement('button');
addMilestoneButton.textContent = 'Add Milestone';
milestoneForm.appendChild(addMilestoneButton);

// Add the milestone form to the goal item display
goalItem.appendChild(milestoneForm);

// Create a progress bar to show the completion status of the goal's milestones
var progressBarContainer = document.createElement('div');
progressBarContainer.classList.add('progress');

// Calculate the percentage of completed milestones
var completedMilestones = goal.milestones.filter(function(milestone) {
  return milestone.completed;
});
var progressPercentage = 0;
if (completedMilestones.length > 0) {
  progressPercentage = Math.round(completedMilestones.length / goal.milestones.length * 100);
}
var progressBar = document.createElement('div');
progressBar.classList.add('progress-bar');
progressBar.style.width = progressPercentage + '%';
progressBarContainer.appendChild(progressBar);

goalItem.appendChild(progressBarContainer);

updateGoalItem(goalItem, goal);

goalList.appendChild(goalItem);
}

// Function to update the goal item display with the current milestone list and progress bar
function updateGoalItem(goalItem, goal) {
  // Remove the current milestone list from the goal item display
  var milestonesList = goalItem.querySelector('.milestones-list');
  if (milestonesList) {
    goalItem.removeChild(milestonesList);
  }

  // Create a new milestone list element and add each milestone as a list item
  milestonesList = document.createElement('ul');
  milestonesList.classList.add('milestones-list');
  goal.milestones.forEach(function(milestone) {
    var milestoneItem = document.createElement('li');
    milestoneItem.textContent = milestone.title;
    milestonesList.appendChild(milestoneItem);
  });

  // Insert the new milestone list and progress bar before the progress bar in the goal item display
  goalItem.insertBefore(milestonesList, goalItem.querySelector('.progress'));
}