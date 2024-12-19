// Task 1: Calculate sum of n values entered by the user
function task1() {
  let sum = 0;
  let value;

  do {
    value = prompt("Enter a number (0 to stop or if the sum exceeds 100):");
    if (!isNaN(value) && value.trim() !== "") {
      value = parseFloat(value);
      if (value !== 0) {
        sum += value;
      }
    } else {
      alert("Please enter a valid numeric value.");
    }
  } while (value !== 0 && sum <= 100);

  alert("The total sum of the entered values is: " + sum);
}

// Task 2: Greet the user and display a message in their chosen color
function task2() {
  alert("Welcome to my site");
  const name = prompt("Please enter your name:");
  const color = prompt("Choose a color (red, green, or blue):").toLowerCase();

  if (["red", "green", "blue"].includes(color)) {
    document.body.innerHTML = `<p style="color:${color};">Welcome, ${name}</p>`;
  } else {
    document.body.innerHTML = `<p>Welcome, ${name}</p>`;
  }
}

// Task 3: Display user message using HTML heading tags
function task3() {
  const message = prompt("Enter a message:");
  let output = "";

  for (let i = 1; i <= 6; i++) {
    output += `<h${i}>${message}</h${i}>`;
  }

  document.body.innerHTML += output;
}

// Run the tasks
task1();
task2();
task3();
