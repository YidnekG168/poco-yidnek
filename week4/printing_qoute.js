/* const userQuote = prompt("Enter a quote:");

const userAuthor = prompt("Enter the author:");

if (userQuote !== null && userAuthor !== null) {
  console.log(`${userAuthor} says, "${userQuote}"`);
} else {
    console.log("Please enter both a quote and an author.");
} */

/* or we can use this one */


let userQuote = prompt("Enter a quote:");
let userAuthor = prompt("Enter the author:");


let message = `${userAuthor} says, "${userQuote}"`;


/* console.log(message);
 */
if( userQuote !== "") {
    console.log(message)
}