// Assignment Code
var generateBtn = document.querySelector("#generate");

/**
 * ! Primary control flow function to write a valid password to the viewport
 * @returns
 */
function writePassword() {
  // Invoke primary function to generate password
  var password = generatePassword();

  // Instantiate password text box on page
  var passwordText = document.querySelector("#password");

  // Write password to page
  if (password.length > 0) {
    passwordText.value = password;
    console.log("Password written to form");
  } else {
    console.log("Password was not provided");
  }
}

/**
 * ! Generate password
 * @returns password
 */
function generatePassword() {
  // Get a valid password configuration
  var validPasswordConfig = collectPasswordConfig();
  if (validPasswordConfig.validConfig == false) {
    return "";
  }

  // Get the available characters
  var availableCharacters = passwordStrength(validPasswordConfig);

  // Construct a password based upon configuration
  var password = buildPassword(
    validPasswordConfig.passwordLength,
    availableCharacters
  );

  console.log("A new password has been created");
  return password;
}

/**
 * ! Collect password configuration
 * @returns passwordConfig
 */
function collectPasswordConfig() {
  // Initialize object to hold password configuration
  var passwordConfig = {
    passwordLength: 0,
    lowerCase: false,
    upperCase: false,
    numeric: false,
    specialChars: false,
    validConfig: false,
  };

  // Prompt user for password length
  var pwdLength = parseInt(window.prompt("Please enter a password length"));

  // Validate that the end-user input is a number
  if (Number.isNaN(pwdLength)) {
    console.log("A valid number was not entered");
    window.alert("Please enter a valid number");
    return passwordConfig;
  }
  // Validate that the number is at least 8 characters and no more than 128 characters
  else if (pwdLength < 8 && pwdLength > 128) {
    console.log("Password length is not between 8 and 128 characters");
    window.alert("Please enter a valid number between 8 and 128");
    return passwordConfig;
    // Password length is valid.
  } else {
    console.log("Valid password length " + pwdLength + " was entered");
    passwordConfig.passwordLength = pwdLength;
  }

  // Prompt user for additional password configurations
  passwordConfig.lowerCase = window.confirm(
    "Do you want lower case characters?"
  );
  passwordConfig.upperCase = window.confirm(
    "Do you want UPPER case characters?"
  );
  passwordConfig.numeric = window.confirm(
    "Do you want numbers?"
  );
  passwordConfig.specialChars = window.confirm(
    "Do you want lower case characters?"
  );

  // Validate that at least one option is selected
  if (
    !passwordConfig.lowerCase &&
    !passwordConfig.upperCase &&
    !passwordConfig.numeric &&
    !passwordConfig.specialChars
  ) {
    console.log("Password configuration is NOT valid");
    window.alert("At least one option is required");
  } else {
    // Return validated configuration
    console.log("Password configuration is valid");
    passwordConfig.validConfig = true;
  }
  return passwordConfig;
}

/**
 * ! Determine password strength
 * @param {*} validPasswordConfig
 * @returns possiblePwdCharacters
 */
function passwordStrength(validPasswordConfig) {
  // Four different variables to hold different characters to generate a password
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxwz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var possiblePwdCharacters = "";

  // Add lower case letters if switched on
  if (validPasswordConfig.lowerCase) {
    possiblePwdCharacters = possiblePwdCharacters.concat(lowercaseLetters);
  }

  // Add upper case letters if switched on
  if (validPasswordConfig.upperCase) {
    possiblePwdCharacters = possiblePwdCharacters.concat(uppercaseLetters);
  }

  // Add numeric integers if switched on
  if (validPasswordConfig.numeric) {
    possiblePwdCharacters = possiblePwdCharacters.concat(numeric);
  }

  // Add special characters if switched on
  if (validPasswordConfig.specialChars) {
    possiblePwdCharacters = possiblePwdCharacters.concat(specialCharacters);
  }

  console.log(
    "Password can contain the following possible characters: " +
      possiblePwdCharacters
  );

  return possiblePwdCharacters;
}

/**
 * ! Generate password based upon end-user configuration
 * @param {*} passwordLength
 * @param {*} availableCharacters
 * @returns constructedPwd
 */
function buildPassword(passwordLength, availableCharacters) {
  var constructedPwd = "";
  var constructedPwd = "";

  for (let index = 0; index < passwordLength; index++) {
    var char = Math.floor(Math.random() * availableCharacters.length + 1);
    constructedPwd += availableCharacters.charAt(char);
  }

  return constructedPwd;
}

// Event listener to invoke a series of end user questions to configure a password
generateBtn.addEventListener("click", writePassword);
