// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Invoke primary function to generate password
  var password = generatePassword();

  // Instantiate password text box on page
  var passwordText = document.querySelector("#password");

  // Write password to page
  passwordText.value = password;
  console.log("Password written to form");
}

// Generate password logic will go here
function generatePassword() {
  var validPasswordConfig = collectPasswordConfig();

  // Generate a password that matches configuration
  // TODO - Insert logic to generate password that matches the selected criteria

  var password = "myPasswordTest"; // TODO - Inserted to test plumbing (remove)
  console.log("A new password has been created");
  return password;
}

// Collect password configuration
function collectPasswordConfig() {
  // Initialize object to hold password configuration
  var passwordConfig = {
    passwordLength: 0,
    lowerCase: false,
    upperCase: false,
    numeric: false,
    specialChars: false,
  };

  // Prompt user for password length
  passwordConfig.passwordLength = 99; // TODO - Update with prompt

  // Validate that the length is at least 8 characters and no more than 128 characters
  // TODO - Insert validation code
  console.log("Password length is between 8 and 128 characters");

  // Prompt user for additional password configurations
  passwordConfig.lowerCase = true; // TODO - Update with prompt
  passwordConfig.upperCase = true; // TODO - Update with prompt
  passwordConfig.numeric = true; // TODO - Update with prompt
  passwordConfig.specialChars = true; // TODO - Update with prompt

  // Validate that at least one option is selected
  // TODO - Insert password validation code
  console.log("Password configuration has at least one option selected");

  // Return validated configuration
  console.log("Password configuration is valid");
  return passwordConfig;
}

// Add event listener to invoke a series of end user questions to configure a password
generateBtn.addEventListener("click", writePassword);
