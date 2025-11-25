console.log("Hawaiyu");

//OBJECT METHODS

//TODO: CREATING METHODS
//Create an object called person with a name, age, and favourite colour. Add a method called sayHello that logs a greeting to the console. Log the object to the console.

const person1 = {
  name: "Nene",
  age: 30,
  faveColour: "Red",
  sayHello: function () {
    console.log("Hola!");
  },
};

person1.sayHello(); // Hola!

//TODO: PASSING ARGUMENTS
//Methods can accept arguments, just like functions. They’re useful for adding behaviour to objects.

const person2 = {
  name: "Nene",
  age: 30,
  faveColour: "Red",
  sayHello: function (name) {
    console.log("Hello " + name + "!");
  },
};

person2.sayHello("Anita");

//TODO: RETURNING VALUES
//Methods can return values, just like functions. They’re useful for adding behaviour to objects.

const person3 = {
  name: "Nene",
  age: 30,
  faveColour: "Red",
  getAge: function () {
    return this.age;
  },
};

const age = person3.getAge();
console.log(age); // 30

//TODO: MINI CHALLENGE

//CHALLENGE 1
const car = {
  make: "Vauxhall",
  model: "Signum",
  colour: "Black",
  advert: function () {
    return `Here is my ${car.make} ${car.model} for sale in ${car.colour}.`;
  },
};

console.log(car.advert());

// CHALLENGE 2

const book = {
  title: "She Can Code",
  author: "Nene Nnoruka",
  pageQty: 144,
  advert: function () {
    return `Here is "${book.title}", ${book.author}'s first book. At only ${book.pageQty} pages, it is a quick, easy and smooth read. Get yours now!`;
  },
};

console.log(book.advert());
