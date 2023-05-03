const nameInput = document.getElementById('name-input');
const nameSubmit = document.getElementById('name-submit');
const nameOutput = document.getElementById('name-output');
const welcomeSection = document.querySelector('.welcome-section');
const homeSection = document.querySelector('.home-section');
const nav = document.querySelector('nav');

// Add event listener to the form submit button
nameSubmit.addEventListener('click', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the user's name from the input field
  const name = nameInput.value;

  // Update the greeting message with the user's name
  nameOutput.innerText = name;

  // Hide the welcome section and show the home section
  welcomeSection.style.display = 'none';
  homeSection.style.display = 'block';

  // Show the navigation bar
  nav.style.display = 'block';
});
