// Assignment code here
//special chars array
const specialChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
//numeric chars array
const numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//lower case chars array
const lowerCasedChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//upper case chars array
const upperCasedChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function generatePassword() {
var pwdLenght = prompt ("how long you password should be") 
console.log (pwdLenght)

if (isNaN (pwdLenght)){
  alert  ("pwdLength must be a number")
  
}
if (pwdLenght < 8 ) {
  alert ("pwdLenght at list 8")
  return
}
if (pwdLenght > 128) {
  alert ("pwdLenght at list 128")
  return
}
var uppers = confirm ("uppers")
var lowers = confirm ("lowers")
var numerics = confirm ("numerics")
var specials = confirm ("specials")
console.log(pwdLenght, uppers, lowers, specials, numerics);
var allchars =[]
var finalpassword = []
if (uppers){
  allchars = allchars.concat(upperCasedChars)
}
if (lowers){
  allchars = allchars.concat(lowerCasedChars)
}
if (numerics){
  allchars = allchars.concat(numericChars)
}
if (specials){
  allchars = allchars.concat(specialChars)
}
for (let i = 0; i <= pwdLenght; i++) {

 finalpassword.push(pickRandom(allchars)) 
}
return finalpassword.join("")
}
function pickRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
