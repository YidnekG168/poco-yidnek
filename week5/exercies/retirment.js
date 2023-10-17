//Retirement calculator
  const currentAge = parseInt(prompt("Enter your current age:"));
  const retirementAge = parseInt(prompt("Enter the age at which you want to retire:"));
  
  // Calculate years left until retirement
  const yearsLeft = retirementAge - currentAge;
  
  // Get the current year and retirement year
  const currentYear = new Date().getFullYear();
  const retirementYear = currentYear + yearsLeft;
  
  // Display the output
  if (yearsLeft > 0) {
    console.log(`You have ${yearsLeft} years left until retirement.`);
    console.log(`You can retire in the year ${retirementYear}.`);
  } else if (yearsLeft === 0) {
    console.log("Congratulations! You can retire this year.");
  } else {
    console.log("You have already passed your retirement age.");
  }