const form = document.querySelector("form")
allInput = form.querySelectorAll(".first input");

// Get the full name input field
var fullNameInput = document.querySelector('input[type="text"][placeholder="Enter Your Name"]');

// Add an event listener to the input field
fullNameInput.addEventListener('input', function() {
  // Get the current value of the input field
  var fullName = fullNameInput.value;

  // Check if the full name meets the validation criteria
  var isValid = /^[A-Za-z\s]{5,12}$/.test(fullName) && !/\d/.test(fullName);

  // Display an error message if the validation fails
  if (!isValid) {
    fullNameInput.setCustomValidity('Please enter a valid full name without numbers (5-12 characters)');
  } else {
    fullNameInput.setCustomValidity('');
  }
});







