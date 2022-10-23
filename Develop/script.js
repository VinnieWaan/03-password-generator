// Assignment Code
var generateBtn = document.querySelector("#generate");

// 1. Created generatedPassword function 
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



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
