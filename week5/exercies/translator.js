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

console.log(helloWorld("en"));
console.log(helloWorld("es"));
console.log(helloWorld("de"));
console.log(helloWorld("fr"));
