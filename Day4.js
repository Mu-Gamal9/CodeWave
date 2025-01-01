// 1
function exactlyTwoParameters(param1, param2) {
  if (arguments.length !== 2) {
    throw new Error("This function must be called with exactly 2 parameters.");
  }
  return "Success: Exactly two parameters were provided.";
}

// Example 
try {
  console.log(exactlyTwoParameters(1, 2));

} catch (error) {
  console.error(error.message);
}

// 2
function addNumericalValues() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== 'number') {
      throw new Error("All parameters must be numerical values.");
    }
    sum += arguments[i];
  }
  return sum;
}

// Example 
try {
  console.log(addNumericalValues(1, 2, 3, 4, 5));

} catch (error) {
  console.error(error.message);
}

// 3
function reverseParameters() {
  return Array.from(arguments).reverse();
}

// Example
console.log(reverseParameters(1, 'hello', true, 42));

// 4
function isPrime(number) {
  if (typeof number !== 'number' || !Number.isInteger(number) || number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Example
console.log(isPrime(2));   // true
console.log(isPrime(10));  // false
console.log(isPrime(17));  // true
console.log(isPrime(1));   // false
console.log(isPrime(-5));  // false
console.log(isPrime(2.5)); // false
