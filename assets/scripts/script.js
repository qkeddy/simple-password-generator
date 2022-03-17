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
  passwordText.value = password;
  console.log("Password written to form");
}

/**
 * ! Generate password
 * @returns password
 */
function generatePassword() {
  // Get a valid password configuration
  var validPasswordConfig = collectPasswordConfig();

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
  };

  // Prompt user for password length
  passwordConfig.passwordLength = 10; // TODO - Update with prompt

  // Validate that the length is at least 8 characters and no more than 128 characters
  // TODO - Insert validation code
  console.log("Password length is between 8 and 128 characters");

  // Prompt user for additional password configurations
  passwordConfig.lowerCase = false; // TODO - Update with prompt
  passwordConfig.upperCase = true; // TODO - Update with prompt
  passwordConfig.numeric = true; // TODO - Update with prompt
  passwordConfig.specialChars = false; // TODO - Update with prompt

  // Validate that at least one option is selected
  // TODO - Insert password validation code
  console.log("Password configuration has at least one option selected");

  // Return validated configuration
  console.log("Password configuration is valid");
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
  var specialCharacters = "!#$%&'()*+,-./:;< => ? @[]^ _`{|}~";
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
