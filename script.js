// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompts the user for the password length.
  let length = prompt(
    'How many characters would you like your password to be? (Min 10 and Max 64)'
  );
  while (length < 10 || length > 64) {
    alert(
      'Please try again. your Password must be between 10 and 64 characters'
    );
    length = prompt(
      'How many characters would you like your password to be? (Min 10 and Max 64)'
    );
  }

  // Prompts the user to choose numbers, lowercase, uppercase, special characters.
  let upperChar = confirm('Click OK to include uppercase characters.');
  let lowerChar = confirm('Click OK to include lowercase characters.');
  let numberChar = confirm('Click OK to include Numbers.');
  let specialChar = confirm('Click OK to include special characters.');

  // ! while loop to request user to select one character type.
  while (!upperChar && !lowerChar && !numberChar && !specialChar) {
    alert('Please select one character type.');
    specialChar = confirm('Click OK to include special characters.');
    numberChar = confirm('Click OK to include Number.');
    lowerChar = confirm('Click OK to include lowercase characters.');
    upperChar = confirm('Click OK to include uppercase characters.');
  }

  // !Return all the user options as key value pairs
  // create object
  return {
    length: length,
    specialChar: specialChar,
    numberChar: numberChar,
    lowerChar: lowerChar,
    upperChar: upperChar,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with the user input
function generatePassword() {
  // Creates an empty array for the user password
  let result = [];

  // Calls the getPasswordOptions() function to get the user's chosen options
  let choices = getPasswordOptions();

  // groups all characters based on the user's input in a empty array
  let charArray = [];

  // puts all the passwords characters in a single string
  if (choices.upperChar) {
    charArray = charArray.concat(upperCasedCharacters);
  }
  if (choices.lowerChar) {
    charArray = charArray.concat(lowerCasedCharacters);
  }
  if (choices.specialChar) {
    charArray = charArray.concat(specialCharacters);
  }
  if (choices.numberChar) {
    charArray = charArray.concat(numericCharacters);
  }

  // creates an array with the random characters to create a random password
  for (let i = 0; i < choices.length; i++) {
    result.push(getRandom(charArray));
  }
  // turns the array into a string
  let chosenPassword = result.join('');

  return chosenPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
