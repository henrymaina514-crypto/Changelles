// Count from 1 to 30 and shout Chai / Mandazi based on multiples
let chaiMandaziCount = 0;

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Chai & Mandazi");
    chaiMandaziCount++;
  } else if (i % 3 === 0) {
    console.log("Chai");
  } else if (i % 5 === 0) {
    console.log("Mandazi");
  } else {
    console.log(i);
  }
}

// Bonus
console.log("Chai & Mandazi was shouted " + chaiMandaziCount + " times");
// Calculate how many months to save KES 5000
let goal = 5000;
let month = 1;
let saving = 100;
let total = 0;

while (total < goal) {
  total += saving;

  let line = Month ${month}: saved KES ${saving}, total KES ${total};
  if (saving >= 500) {
    line += " - Big month!";
  }
  console.log(line);

  // Safety net (bonus)
  if (month >= 24) {
    console.log("Stopped at month 24 for safety");
    break;
  }

  month++;
  saving += 50;
}

console.log(Goal reached in month ${month - 1} with KES ${total}!);
/ Grade the valid marks and summarise the class
let marks = [78, 45, -5, 92, 60, 101, 55, 38];

// Bonus: add 50 and 80
marks.push(50, 80);

let validCount = 0;
let passCount = 0;
let failCount = 0;
let totalMarks = 0;
let highest = -1;
let highestStudent = 0;
let lowest = 101;
let lowestStudent = 0;

for (let i = 0; i < marks.length; i++) {
  let mark = marks[i];

  // Skip invalid marks
  if (mark < 0 || mark > 100) {
    console.log(Student ${i + 1}: Invalid mark, skipped);
    continue;
  }

  // Valid mark – determine grade
  let grade;
  if (mark >= 80) {
    grade = "A";
  } else if (mark >= 70) {
    grade = "B";
  } else if (mark >= 60) {
    grade = "C";
  } else if (mark >= 50) {
    grade = "D";
  } else {
    grade = "E";
  }

  let result = mark >= 50 ? "Pass" : "Fail";
  console.log(Student ${i + 1}: ${mark} - Grade \( {grade} ( \){result}));

  // Counters
  validCount++;
  totalMarks += mark;

  if (mark >= 50) {
    passCount++;
  } else {
    failCount++;
  }

  // Track highest
  if (mark > highest) {
    highest = mark;
    highestStudent = i + 1;
  }

  // Track lowest (bonus)
  if (mark < lowest) {
    lowest = mark;
    lowestStudent = i + 1;
  }
}

console.log("---------------");
console.log(Valid marks: ${validCount});
console.log(Passed: ${passCount});
console.log(Failed: ${failCount});
console.log(Average: ${(totalMarks / validCount).toFixed(1)});
console.log(Highest: ${highest} (Student ${highestStudent}));
console.log(Lowest: ${lowest} (Student ${lowestStudent}));
