// 1. Perform all arithmetic operations
function arithmeticOperations(a, b) {
  console.log("Input:", a, b);
  console.log("Sum =", a + b);
  console.log("Sub =", a - b);
  console.log("Mult =", a * b);
  console.log("Div =", a / b);
  console.log("Mod =", a % b);
}

arithmeticOperations(20, 10);

// 2. Calculate the area of a rectangle
function rectangleArea(length, width) {
  console.log("Input L =", length, "W =", width);
  console.log("Output Area =", length * width);
}

rectangleArea(5, 10);

// 3. Calculate diameter, circumference, and area of a circle
function circleProperties(radius) {
  const pi = 3.14;
  const diameter = 2 * radius;
  const circumference = 2 * pi * radius;
  const area = pi * radius * radius;
  
  console.log("Input", radius);
  console.log("Output Diameter =", diameter, ", Circumference =", circumference.toFixed(2), ", Area =", area);
}

circleProperties(10);
