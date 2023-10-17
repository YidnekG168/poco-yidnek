function count() {
    let inputString = prompt("Enter a string:");
  
    if (inputString !== null) {
      let countString = inputString.length;
      
      console.log("Input String: " + inputString);
      console.log("Character Count: " + countString);
    } else {
      console.log("No input provided.");
    }
  }
  
  count();

  
  
  
  
  