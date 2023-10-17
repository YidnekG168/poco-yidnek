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
function display() {
  let author = prompt("Please enter the author's name:");

  let quote = prompt("Please enter the quote:");

  if (author !== null && quote !== null) {
    console.log(author + ' says, "' + quote + '"');
  } else {
    console.log("Both author and quote are required for the display.");
  }
}

display();





