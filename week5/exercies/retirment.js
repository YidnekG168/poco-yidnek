//Retirement calculator
const currentAge = parseInt(prompt("Enter your current age:"));
const retirementAge = parseInt(
  prompt("Enter the age at which you want to retire:")
);

const yearsLeft = retirementAge - currentAge;

const currentYear = new Date().getFullYear();
const retirementYear = currentYear + yearsLeft;

if (yearsLeft > 0) {
  console.log(`You have ${yearsLeft} years left until retirement.`);
  console.log(`You can retire in the year ${retirementYear}.`);
} else if (yearsLeft === 0) {
  console.log("You can retire this year.");
} else {
  console.log("You have already passed your retirement age.");
}
