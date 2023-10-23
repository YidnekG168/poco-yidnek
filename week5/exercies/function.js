/* //one way of declaring function
function nameOfTheFucntion(parameter){
//do something
return true;
} */
//eg
sayHello("Yidnek")
function sayGoodMorning(name){
    console.log(`Good morning ${name}`);

}
//fucntion expression
/* const sayHello = function(name){
    console.log(`Hello ${name}`);
}
sayHello("Sema"); */  
//or we can use arrow function used as anomuns function
const sayHello = name => {
    console.log(`Hello ${name}`);
}
sayHello("Sema")
/* parameter => {
    console.log(param);
}
() => {
    console.log("Hello");
} 
(a,b) => {
consol.log(a + b)
}
const sum = (a,b) => a+b;
const sumFunction = function(a,b){
    return a+b;
}*/



const book1 = {
    title:"Harry potter & the prisoner of Azkaban",
    author: "J.K. Rowling",
    series: "Harry potter 3",
    published: 2002,
    //getBookinfo is a method we can say with dott notation is all methods
    //this is one of the function expression
    /* getBookInfo: function (){
        console.log(`${this.title} was written by ${this.author} and published in ${this.published}`)
    } */
    //it's like arrow funcntion
   /*  getBookInfo(){
        console.log(`${this.title} was written by ${this.author} and published in ${this.published}`)
    },
    getSeries(){
        console.log(`"${this.title}" is of the series ${this.series});
    } */
}
book1.getBookInfo();


const library = ["Harry Potter & the prisoner of Azkaban", "Lord of the Rings"];
library.forEach(function(book)){
    console.log(book);
}