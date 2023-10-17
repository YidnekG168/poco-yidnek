function calculateTip(billAmount, tipPercentage) {
    return (billAmount * tipPercentage) / 100;
}

const billAmount = parseFloat(prompt("Enter the bill amount:"));
const tipPercentage = parseFloat(prompt("Enter the tip percentage you want to leave:"));

const tipAmount = calculateTip(billAmount, tipPercentage);

const totalAmount = billAmount + tipAmount;

console.log(`Bill Amount: ${billAmount.toFixed(2)}`);//toFIxed(2) it rounds after two digits e.g 4.559 > 4.56 but whent it's .toFIxed() with null parenthesis it only rounds as normal e.g 
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Tip Amount: $${tipAmount.toFixed(2)}`);
console.log(`Total Amount: $${totalAmount.toFixed(2)}`);

