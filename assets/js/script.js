var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*?"

var generateBtn = document.querySelector("#generate");



function optionPrompt() {
  window.alert("Please follow the prompts to let us know what kind of password you are looking for.");

    var length = window.prompt("How many characters should the password be?");
        if (length <8 || length > 128 ) {
        window.alert("Please enter a valid length between 8 and 128.");
        return;
      };

    var uppercaseConfirm = window.confirm("Would you like the password to include uppercase letters?");
      if (uppercaseConfirm) {
        window.alert("The password will include uppercase letters.");
        // options = options + lowercase;
      } else {
        window.alert("No uppercase letters will be included in the password.");
        };
          
    var lowercaseConfirm = window.confirm("Would you like the password to include lowercase letters?");
            if (lowercaseConfirm) {
        window.alert("The password will include lowercase letters.");
          // options = options + uppercase
      } else {
        window.alert("No lowercase letters will be included in the password.")
      };
    
    var numbersConfirm = window.confirm("Would you like the password to include numbers?");
      if (numbersConfirm) {
        window.alert("The password will include numbers.");
        // options = options + numbers
      } else {
        window.alert("No numbers will be included in the password.")
    };

    var specialCharactersConfirm = window.confirm("Would you like the password to include special characters?");
      if (specialCharactersConfirm) {
        window.alert("The password will include special characters.");
        // options = options + specialCharacters
      } else {
        window.alert("No special characters will be included in the password.")
    };

  if (uppercaseConfirm === false && lowercaseConfirm === false && numbersConfirm === false && specialCharactersConfirm === false) {
    window.alert("Selections are invalid. Please try this again.");
    return;
  };

  var selections = {
    length : length,
    uppercaseConfirm : uppercaseConfirm,
    lowercaseConfirm : lowercaseConfirm,
    numbersConfirm : numbersConfirm,
    specialCharactersConfirm : specialCharactersConfirm
  }

  return selections
}

function generatePassword () {
  var userChoices = optionPrompt()

  console.log(userChoices)
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
