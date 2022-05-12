const Person = require("./person");  // Common js yöntemi
// import Person = "./person";  ES6, module yöntemi.

const person1 = new Person("Baho", 22);

person1.greeting();