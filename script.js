
// console.log("loaded");

// let name = "Rishabh";
// let age = 22;
// let isStudent = true;
// let skills = ["HTML", "CSS"];
// let profile = {
//   city: "Delhi",
//   course: "JavaScript"
// };

// console.log("Name:", name);
// console.log("Age:", age);
// console.log("Is Student:", isStudent);
// console.log("Skills:", skills);
// console.log("Profile:", profile);

// 1. greet function
function greet(name) {
  return "Hello " + name;
}

// 2. add function
function add(a, b) {
  return a + b;
}

// 3. toFahrenheit function
function toFahrenheit(c) {
  return (c * 9/5) + 32;
}


// Function calls 
console.log(greet("Rishabh"));
console.log("sum:",add(5, 10));
console.log("Fahrenheit:",toFahrenheit(25));



let age = prompt("Enter your age");

if (age === "" || isNaN(age)) {
  alert("Invalid age");
} else {
  age = Number(age);

  if (age < 18) {
    alert("Minor");
  } else if (age >= 18 && age <= 60) {
    alert("Adult");
  } else {
    alert("Senior");
  }
}
