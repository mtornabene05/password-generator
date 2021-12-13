var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*?"

var generateBtn = document.querySelector("#generate");
  optionPrompt();

function optionPrompt() {
  window.alert("Please follow the prompts to let us know what kind of password you are looking for.");

  lengthConfirm();
  uppercaseConfirm();
  lowercaseConfirm();
  numbersConfirm();
  specialCharactersConfirm();
}
  
function lengthConfirm () {
  var length = window.prompt("How many characters should the password be?");

  if (length >= 8 )
}

function uppercaseConfirm () {
 var uppercaseConfirm = window.confirm("Would you like the password to include uppercase letters?");

  if (uppercaseConfirm) {
    window.alert("The password will include uppercase letters.");
    // options = options + lowercase;

  } else {
    window.alert("No uppercase letters will be included in the password.");
    };
};

function lowercaseConfirm () {
  var lowercaseConfirm = window.confirm("Would you like the password to include lowercase letters?");
    
    if (lowercaseConfirm) {
      window.alert("The password will include lowercase letters.");
      // options = options + uppercase
    } else {
      window.alert("No lowercase letters will be included in the password.")
    };
};

function numbersConfirm () {
  var numbersConfirm = window.confirm("Would you like the password to include numbers?");

    if (numbersConfirm) {
      window.alert("The password will include numbers.");
      // options = options + numbers
    } else {
      window.alert("No numbers will be included in the password.")
    };
};

function specialCharactersConfirm () {
  var specialCharactersConfirm = window.confirm("Would you like the password to include special characters?");

    if (specialCharactersConfirm) {
      window.alert("The password will include special characters.");
      // options = options + specialCharacters
    } else {
      window.alert("No special characters will be included in the password.")
    };
};

// WHEN prompted for the length of the password


// THEN I choose a length of at least 8 characters and no more than 128 characters


// WHEN asked for character types to include in the password


// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters


// WHEN I answer each prompt


// THEN my input should be validated and at least one character type should be selected


// WHEN all prompts are answered


// THEN a password is generated that matches the selected criteria


// WHEN the password is generated


// THEN the password is either displayed in an alert or written to the page

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", optionPrompt);
