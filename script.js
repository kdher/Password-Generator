// The Password generator will provide a password with 8 - 128  characters based on criteria the user specifies.

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", "@", "*", "+", "-", "#", "/", "<", ">", "?","~","$"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function generatePassword() {

      console.log("Hey ! You clicked the botton");

      // Prompt to confirm how many characters the user would like in their password
      var plength = prompt("How many characters would you like your password to contain?");

      // Loop if answer is outside the parameters 
      while (plength < 8 || plength > 128) {
      plength = prompt("Length must be 8-128 characters. How many characters would you like your password to contain?");
      }

      var csymbols = confirm("Click OK to confirm including special characters.");
      var cnumbers = confirm("Click OK to confirm including numeric characters.");
      var clowercase = confirm("Click OK to confirm including lowercase characters.");
      var cuppercase = confirm("Click OK to confirm including uppercase characters.");

       while (!(cuppercase || clowercase || cnumbers || csymbols)) {
             alert("You must select at least one character type!");
              csymbols = confirm("Click OK to confirm including special characters.");
              cnumbers = confirm("Click OK to confirm including numeric characters.");
              clowercase = confirm("Click OK to confirm including lowercase characters.");
              cuppercase = confirm("Click OK to confirm including uppercase characters.");
                 }

// Assign an action to the password parameters NEED TO FIX THIS
   var passwordCharacters = [];
      
  if (csymbols) {
        passwordCharacters = passwordCharacters.concat(specialChar)
        }
  if (cnumbers) {
        passwordCharacters = passwordCharacters.concat(number)
        }
  if (clowercase) {
        passwordCharacters = passwordCharacters.concat(alphaLower)
        }
  if (cuppercase) {
        passwordCharacters = passwordCharacters.concat(alphaUpper)
        }

  console.log(passwordCharacters);

  // Empty string to be filled based on for loop selecting random characters from the array
  var randomPassword = "";
  
    for (var i = 0; i < plength; i++) {
          randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
          console.log(randomPassword);
       }
      return randomPassword;


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener ("click", writePassword);
