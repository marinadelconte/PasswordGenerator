let generateBtn = document.querySelector("#generate");

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = [0,1,2,3,4,5,6,7,8,9];
let specialCharacters = [];

let builtArray = [];
let password = "";

generatePassword();

function generatePassword() {
if (confirm("Do you want to include lowercase letters?"))
{
  builtArray = [...builtArray, ...lowerAlphabet];
} 

if (confirm("Do you want to include uppercase letters?"))
{
  builtArray = [...builtArray, ...lowerAlphabet, ...upperAlphabet];
} 

if (confirm("Do you want to include numbers?"))
{
  builtArray = [...builtArray, ...lowerAlphabet, ...upperAlphabet];
} 

if (confirm("Do you want to include special characters?"))
{
  builtArray = [...builtArray, ...lowerAlphabet, ...upperAlphabet];
} 

let passwordLength = prompt("How long do you want the password?")
for (let i = 0; i < passwordLength; i++) {
  password += "x";
}
}
  


return password;



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
