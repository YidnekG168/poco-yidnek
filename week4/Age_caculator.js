/* const birthYear = 1990;
const futureYear = 2030;

const age1 = futureYear - birthYear;
const age2 = age1 - 1;
// we have to check spaces, string not a no., is it NaN futureyear
const message = `I will be either ${age1} or ${age2} in ${futureYear}`;

console.log(message); */
// number() and + coneverts to a number


/* let birthYear = number(prompt("Enter your b.year"));

if(isNaN(birthYear) || birthYear === 0) {
    alert("This is not a number, please try again");
    birthYear = number(prompt("Enter your desired no."));
}
else {
    let futureYear = +prompt ("please enter the desired year:")

    if(isNaN(futureYear) || futureYear === 0) {
    alert("This is not a number, please try again");
    futureYear = +prompt("Enter your desired no.");
}

    
}
let futureYear = +prompt("Enter your desired no.");

if(isNaN(futureYear) || futureYear === 0) {
    alert("This is not a number, please try again");
    futureYear = +prompt("Enter your desired no.");
}

console.log(birthYear);
console.log(futureYear); */

/* Powercoders exercise
    go through the number from 1 to 100 and check for each number if 
        - dividable by 5 > Power
        - dividable by 7 > Coders
        - dividable by 5 and 7 > Powercoders
        - rest > number
 */
/* let number = 20;

if(number % 5 === 0 && number % 7 === 0){
    console.log("Powercoders");
}
else if ( number % 7 === 0){
    console.log("Coders");
}
else if( number % 5 === 0){
    console.log("Power");
}
else{
    console.log(number);
} */

//while loop
/* let number = 1;
 
console.log("Begining of the loop")
while (number <= 100){

    if(number % 5 === 0 && number % 7 === 0){
        console.log("Powercoders");
    }
    //continue is skipping one step but it will continue the loop
    //break will break after the printing the loop
    else if ( number % 7 === 0){
        console.log("Coders");
    }
    else if( number % 5 === 0){
        console.log("Power");
    }
    else{
        console.log(number);
    }  
    number++;
}

console.log("end of loop");*/

//do while
//in do while always atleast will print onece,

/* let birthYear;
do {
    birthYear = number(prompt("Enter your b.year"));

}while(isNaN(birthYear) || birthYear === 0) 


let futureYear;
do {
    
futureYear = +prompt("Enter your desired no.");
}
while(isNaN(futureYear) || futureYear === 0) 

console.log(birthYear);
console.log(futureYear); */


// for loop
//you know from start how often it will go in while or in do while you will not know from start how often will go
/*  for(let i = 0; i<=100; i++){
if(number % 5 === 0 && number % 7 === 0){
    console.log("Powercoders");
}
else if ( number % 7 === 0){
    console.log("Coders");
}
else if( number % 5 === 0){
    console.log("Power");
}
else{
    console.log(number);
} 
}
 */
//for each used for array or for off

//switch
/* let direction = prompt("enter where");

switch(direction){
    case "left":
        console.log("I go left");
    break;
    
    case "right":
        console.log("I go right");

    break;
    case "straight":
        console.log("I go straight");

    default:
        console.log("I go ahead");

}  */

// for each
/*  playlist.array.forEach(element => {
    
 }); */

/*  if(direction === "left"){
    console.log("I go left");
 } else {
    console.log("I go right");
 }

 (direction ==="left") ? console.log("I go left"); */


 //age caculator
 /* if(futureYear >= birthYear){
    let age = futureYear - birthYear;
    console.log(`I will be either ${age-1} or ${age} in ${futureYear}`);


 }else if(futureYear === birthYear) {
    alert("You were born in " + futureYear);
 } else{
    alert(`You are not born yet ${futureYear}`);
 }
  */

 //Exercises

 /* Write a for loop that will iterate from 0 to 20.
For each iteration, it will check if the current number is even or odd. */

 /* for(let i = 0; i <= 20; i++){
    if (i % 2 === 0){
        console.log(`the result ${i} is even`);
    }
    else {
        console.log(`the result ${i} is odd`)
    }
}  */

/* Prompt for a number between 0 and 20.
Check if the given number is even or odd. */

/*for(let i =0; i<=20; i++){
    i = +prompt("Enter the number between 0 and 20's");
    if(i% 2 === 0){
        console.log(`the result ${i} is even`);
    }
    else if(isNaN(i) || i < 0 || i >20) {
        console.log(`the result is invalid`);
    }
    else{
        console.log(`result ${i} odd`)
    }
} */

 /*let i =0;
while(i <20) {
    i = +prompt("Enter the number between 0 and 20's");
    if (i % 2 === 0){
        console.log(`the result ${i} is even`);
    }
    else if(isNaN(i)|| i  < 0 || i > 20){
        console.log(`the result ${i} is invalid`);
    }
    else{
        console.log(`the result ${i} is odd`)
        }
    i++;
}*/


/* Prompt for a number between 0 and 10.
Multiply the given number by 9.
Log the result (e.g. "2 * 9 = 18"). */
/* let number = prompt("Enter ur number");

if(number*9){
    let result =number * 9;
    console.log(`The result is ${result}`);
}
 */
/* Write a for loop that will iterate from 0 to 10.
For each iteration of the for loop, it will multiply the number by 9.
Log the result (e.g. "2 * 9 = 18").
Work on your project
© 2023 Powercoders | open pdf
 */

/* for(let i = 0; i<=10; i++){
    if(i*9){
        let result = i * 9;
        console.log(`The result is ${result}`);
    }
} */

/* For each single day of the week log the translated output
e.g. if it is Monday, log "Montag" and so on
Choose any language you like
Try different ways: is it possible with if or switch */

/* let day = prompt("Which day do you prefer");
switch(day){
    case "Monday":
        console.log("Monatg");
    break;
    
    case "Tuesday":
        console.log("Dienstag");

    break;
    case "Wednsday":
        console.log("Mitwoch");
    break;
    case "Thursday":
        console.log("Donerstag");
    break;
    case "Friday":
        console.log("Freitag");
    break;
    default:
        console.log("Sonntag");
}  */

//Functions
//used for reusability
//for readebility

let birthYear;
birthYear = getUserInput("Please enter ur year of birth:");

let targetYear;
targetYear = getUserInput("Please enter ur target year:");

if(targetYear >=birthYear){
    let age = targetYear - birthYear;
    alert(`I will be either ${age-1} or ${age} in ${targetYear}` )
}
else{
    alert("I was not born");
}
function getUserInput(promptMsg){
    let userInput = +prompt(promptMsg); 
    while(isUserInputValid(userInput)){
        alert("the iput is not correct");
        userInput= +prompt(promptMsg);
    }
}
function isUserInputValid(userInput){
    if(userInput<1 || isNaN(userInput)){
        return false;
    }
    return true;
}