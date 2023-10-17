


const birthYear = 1996;
const products = [];
const product = {};

/* const h1element = document.getElementsByTagName("h1");
console.log(h1element[0]); */

const elm = document.querySelectorAll(/* "p:nth-of-type(odd)" */ "h1");
Element.forEach(function(p ,i){
    if(i == 0){
       p.innerHTML = "<span>Test</span";  
    }
        else if(i ==1){
           p.textContent = "<span>test</span>" ;
           const span =  document.createElement("span")
            span.textContent= "test";
            p.appendChild(span);
}
    else {
        p.innerText = "<span>test</span>";
    }

});

const h1 = document.querySelector("h1");
h1.textContent = "Title -click me";
h1.addEventListener("click", function)
console.log(elm);
/* let anotherYear = prompt("Give me a Year"); */

const numbersList = [6, 9, 1, 15, 20];
/* numbersList.push(5);
console.log(numbersList);
numbersList.pop(1);
console.log(numbersList)
numbersList.splice(1,0,56);
console.log(numbersList);
numbersList.toString();
console.log(numbersList); */
let newArey = numbersList.concat([8,9,5]);
console.log(newArey);
console.log(addValues(numbersList));

function addValues(numbers){
    let sum = 0;
   /*  for(let i = 0; numbers.leneth; i++){

        console.log(numbers[i]);
    */

        numbers
        .forEach(function(number){
            sum += number;
        });
        return sum;
    }  
    

    
   //for in loop for object
   //for off loop 
    

    /* numbers.forEach(function(number) {
        
        //annoymos function 
    }); 
}*/


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


//The world translator
function helloWorld(languageCode) {
    switch (languageCode) {
      case "es":
        return "¡Hola, Mundo!";
      case "de":
        return "Hallo, Welt!";
      default:
        return "Hello, World";
    }
  }
  
  console.log(helloWorld("en")); // English - "Hello, World"
  console.log(helloWorld("es")); // Spanish - "¡Hola, Mundo!"
  console.log(helloWorld("de")); // German - "Hallo, Welt!"
  console.log(helloWorld("fr")); // Default (English) - "Hello, World"

//Retirement calculator
  // Prompt for current age and retirement age
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
/* In this program:

We use the prompt function to get the user's current age and the age at which they want to retire.

We calculate the number of years left until retirement by subtracting the current age from the retirement age.

We use the Date object to get the current year and calculate the retirement year.

We display the output based on the number of years left. If yearsLeft is greater than 0, it shows the years left until retirement and the retirement year. If yearsLeft is 0, it indicates that the user can retire this year. If yearsLeft is negative, it means the user has already passed their retirement age.
 */

//Retirement calculator

Section 1: Inputs

Input 1: Current Age (integer)
Input 2: Retirement Age (integer)
Section 2: Outputs
Output 1: Years Left Until Retirement (integer)
Output 2: Retirement Year (integer)
Section 3: Processes
Prompt for and input the current age.
Prompt for and input the retirement age.
Check if both inputs are valid (numeric).
Check if the retirement age is realistic (in the future and after the current age).
Calculate the years left until retirement (retirement age - current age).
Get the current year from the computer.
Calculate the retirement year (current year + years left until retirement).
Display the results: Years Left Until Retirement and Retirement Year.
Constraints and Edge Cases
Both the current age and retirement age must be valid positive integers.
The retirement age must be in the future and greater than the current age.
The program should handle input errors gracefully and provide meaningful feedback to the user.
Text File 2: Pseudocode
plaintext
Copy code
Function calculateRetirement():
    Prompt for current age
    Input currentAge as an integer

    Prompt for retirement age
    Input retirementAge as an integer

    If currentAge and retirementAge are valid integers:
        If retirementAge is in the future and greater than currentAge:
            Calculate yearsLeft as retirementAge - currentAge
            Get the current year from the computer
            Calculate retirementYear as currentYear + yearsLeft
            Display "You have [yearsLeft] years left until you can retire."
            Display "It's currently the year [currentYear], so you can retire in the year [retirementYear]."
        Else:
            Display "Please enter a retirement age that is in the future and after your current age."
    Else:
        Display "Please enter valid numeric ages for the calculation."
/* JavaScript Program
To write the program in JavaScript, you can refer to the JavaScript program I provided in my earlier responses. Additionally, to get the current year from your computer, you can use the Date object as shown in the code.
 */








