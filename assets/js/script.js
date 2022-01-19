var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

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

function random (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomCharacter = array[randomIndex];
  return randomCharacter;
}

function generatePassword () {
  var userChoices = optionPrompt()

  //password//
  var results = []
  //all user choices//
  var allOptions = []
  //at least one character of each user choice//
  var oneOfEach = []

  if (userChoices.uppercaseConfirm) {
    allOptions = allOptions.concat(uppercase);
    oneOfEach.push(random(uppercase))
  };

  if (userChoices.lowercaseConfirm) {
    allOptions = allOptions.concat(lowercase);
    oneOfEach.push(random(lowercase))
  };

  if (userChoices.numbersConfirm) {
    allOptions = allOptions.concat(numbers);
    oneOfEach.push(random(numbers))
  };

  if (userChoices.specialCharactersConfirm) {
    allOptions = allOptions.concat(specialCharacters);
    oneOfEach.push(random(specialCharacters))
  };

  for (var i = 0; i < userChoices.length; i++) {
    var pickedCharacter = random(allOptions);
    results.push(pickedCharacter);
  };

  for (var i = 0; i < oneOfEach.length; i++) {
    results[i] = oneOfEach[i]
  };

  return results.join("");
    
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);
