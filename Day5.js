// 1
function isPalindrome(str, considerCase) {
  const processedStr = considerCase ? str : str.toLowerCase();
  const reversedStr = processedStr.split('').reverse().join('');
  return processedStr === reversedStr;
}

const inputString = prompt("Enter a string to check if it's a palindrome:");
const considerCase = confirm("Do you want to consider the case of the entered string?");

if (isPalindrome(inputString, considerCase)) {
  alert(`${inputString} is a palindrome.`);
} else {
  alert(`${inputString} is not a palindrome.`);
}

// 2
function countECharacters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'e' || str[i] === 'E') {
      count++;
    }
  }
  return count;
}

const inputStringE = prompt("Enter a string to count the number of 'e' characters:");
const eCount = countECharacters(inputStringE);
alert(`The string "${inputStringE}" has ${eCount} 'e' characters.`);

// 3
function getUserInfo() {
  const name = prompt("Please enter your name:");
  if (!name) {
    alert("Name cannot be empty. Please try again.");
    return null;
  }
  return name;
}

const userName = getUserInfo();
if (userName) {
  alert(`Welcome, ${userName}!`);
}

// 4
function calculateCircleArea() {
  const radiusString = prompt("Enter the radius of a circle:");
  const radius = parseFloat(radiusString);

  if (isNaN(radius)) {
    alert("Invalid input. Please enter a number for the radius.");
    return;
  }

  const area = Math.PI * radius * radius;
  alert(`The area of the circle with radius ${radius} is: ${area}`);
}

calculateCircleArea();

// 5
function calculateSquareRoot() {
  const numberString = prompt("Enter a number to calculate its square root:");
  const number = parseFloat(numberString);

  if (isNaN(number)) {
    alert("Invalid input. Please enter a number.");
    return;
  }

  if (number < 0) {
    alert("Cannot calculate the square root of a negative number.");
    return;
  }

  const squareRoot = Math.sqrt(number);
  alert(`The square root of ${number} is: ${squareRoot}`);
}

calculateSquareRoot();