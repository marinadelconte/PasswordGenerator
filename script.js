let generateBtn = document.querySelector("#generate");

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', "[", '\\', "]", '^', "_", '`', '{', '|', '}', '~'];

let builtArray = [];
let password = "";

function generatePassword() {

  let passwordLength = prompt("How long do you want the password?")
  let passwordLengthNumbers = parseInt(passwordLength)
  if (passwordLengthNumbers >= 8 && passwordLengthNumbers <= 128) {


    if (confirm("Do you want to include lowercase letters?")) {
      console.log("before updating build array", builtArray)
      builtArray = [...builtArray, ...lowerAlphabet];
      console.log("after updating build array", builtArray)
    }

    if (confirm("Do you want to include uppercase letters?")) {
      builtArray = [...builtArray, ...upperAlphabet];
    }

    if (confirm("Do you want to include numbers?")) {
      builtArray = [...builtArray, ...numbers];
    }

    if (confirm("Do you want to include special characters?")) {
      builtArray = [...builtArray, ...specialCharacters];
    }
    for (let i = 0; i < passwordLength; i++) {
      password += builtArray[Math.floor(Math.random()*builtArray.length)]
    }
    console.log(password, password.length);
    return password;
  } else {
    alert("Please select a password length between 8 and 128 characters");
  }

}
function writePassword() {
  console.log("Button Pressed")
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
