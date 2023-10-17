//Which number is bigger?
const num1 = 5;
const num2 = 10;

if (num1 > num2) {
  console.log(`The greater number of ${num1} and ${num2} is ${num1}.`);
  console.log(`The smaller number of ${num1} and ${num2} is ${num2}.`);
} else if (num2 > num1) {
  console.log(`The greater number of ${num1} and ${num2} is ${num2}.`);
  console.log(`The smaller number of ${num1} and ${num2} is ${num1}.`);
} else {
  console.log(`${num1} and ${num2} are equal.`);
}