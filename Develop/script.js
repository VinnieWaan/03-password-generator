// Assignment Code
var generateBtn = document.querySelector("#generate");

// 1. Created generatePassword function 
function generatePassword () {
  
  //If the "OK" is clicked, it will return a true value. As long as it is truthy, the code continues.
  while (true){

    //Prompt allows "OK", "Cancel", and a text box. The answer inputed in the text box console logs a string. 
    let numOfChar = window.prompt("How many characters would you like your password to contain?");
    
    // If user clicks cancel it will exit the prompt.
    if (numOfChar === null) {
      return;
    }
    
    //So, parseInt converts the string into a number.  
    var passwordLength = parseInt(numOfChar);

    //User cannot input alphabet letters and the number has to be between 8 and 128.
    if (isNaN(passwordLength)){
      // Alert allows "OK" for user to acknowledge the message.
      window.alert("That's not a number!");
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password must be between 8 and 128 characters!");
    } else {
      // Break allows the code to continue running when the criteria is met.
      break;
    }
}

// 2. .confirm allows "OK" and "Cancel". Created a variable for the questions. 
let numericChar = window.confirm("Click OK to confirm including numeric characters.");
let specChar = window.confirm("Click OK to confirm including special characters.");
let lowercase = window.confirm("Click OK to confirm including lowercase characters.");
let uppercase = window.confirm("Click OK to confirm including uppercase characters.");

// 3. Created a variable for the value options.
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

}

// 4. poolOfChars stores the character type(s) the user selects.
var poolOfChars = [];

//If user clicks "OK", .push appends number type to poolOfChars.
if (numericChar){
  poolOfChars.push(number);
}

//If user clicks "OK", .push appends specialChar type to poolOfChars.
if (specChar){
  poolOfChars.push(specialChar);
}

//If user clicks "OK", .push appends alphaLower type to poolOfChars.
if (lowercase){
poolOfChars.push(alphaLower);
}

//If user clicks "OK", .push appends alphaUpper type to poolOfChars.
if (uppercase){
  poolOfChars.push(alphaUpper);
}

//If user clicks "Cancel" to all the option type, it will default to alphaLower.
if (poolOfChars.length === 0) {
  window.alert("Select at least one character type!");
  return;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
