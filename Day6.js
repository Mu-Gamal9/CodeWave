const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const num3 = parseFloat(prompt("Enter the third number:"));


const numbers = [num1, num2, num3];


const sum = numbers[0] + numbers[1] + numbers[2];
const product = numbers[0] * numbers[1] * numbers[2];
const division = numbers[0] / numbers[1] / numbers[2];


const output = `Adding -- Multiplying -- and dividing 3 values

sum of the 3 values ${numbers[0]}+${numbers[1]}+${numbers[2]} = ${sum}

multiplication of the 3 values ${numbers[0]}*${numbers[1]}*${numbers[2]} = ${product}

division of the 3 valuesof the 3 values ${numbers[0]}/${numbers[1]}/${numbers[2]} = ${division}`;


alert(output);
