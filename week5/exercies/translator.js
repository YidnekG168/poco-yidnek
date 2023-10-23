//The world translator
/* function helloWorld(languageCode) {
  switch (languageCode) {
    case "es":
      return "¡Hola, Mundo!";
    case "de":
      return "Hallo, Welt!";
    default:
      return "Hello, World";
  }
}

console.log(helloWorld("en"));
console.log(helloWorld("es"));
console.log(helloWorld("de"));
console.log(helloWorld("fr"));
 */

let num1 =parseInt(prompt("Enter num1:"));
let num2 = parseInt(prompt("Enter num2:"));
if(isNaN(num1) || isNaN(num2)){
    console.log("Input the valid number")
}
function findGCD(a, b) {


    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example usage:
/* const num1 = 36;
const num2 = 48; */
const gcd = findGCD(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is ${gcd}`);
/* This code defines a function findGCD that takes two positive integers, a and b, and calculates their GCD using the Euclidean algorithm.

Here's a step-by-step explanation of how the algorithm works:

Initialize a while loop, which continues as long as b is not equal to 0.

Inside the loop, calculate the remainder of a divided by b and store it in a temporary variable, temp.

Update b with the value of temp.

Repeat the loop until b becomes 0. At this point, the value of a will be the GCD of the two numbers.

Return the GCD as the result.

In the example provided, it calculates the GCD of 36 and 48, which is 12. You can replace num1 and num2 with the two positive integers you want to find the GCD for. */





