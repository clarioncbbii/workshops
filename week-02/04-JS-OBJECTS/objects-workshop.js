console.log("Hawaiyu!");

//OBJECTS

//TODO: CREATE OBJECTS
const person = {
  name: "Nene",
  age: 30,
  faveFood: "jollof",
};

console.log(person);
console.table(person);

//ACCESSING PROPERTIES
console.log(person.name); //Nene
console.log(person.age); //30
console.log(person.faveFood); //jollof

//TODO: ADDING PROPERTIES
person.faveColour = "Red";
console.log(person.faveColour); // Red

//TODO: CREATING COMPLEX OBJECTS
//this is a nested object
const blogPost1 = {
  title: "My first crack at it!",
  author: {
    name: "Nene",
    age: 30,
    faveFood: "jollof",
  },
  tags: ["coding", "bootcamp", "html", "css", "javascript"],
  content: ["This is my first blog post about learning to code. Vamonos!"],
};

console.log(blogPost1);
console.table(blogPost1);

//EXTRA - Using an object as a value for a key value pair - see author -
const blogPost2 = {
  title: "My first crack at it!",
  author: person.name,
  tags: ["coding", "bootcamp", "html", "css", "javascript"],
  content: ["This is my first blog post about learning to code. Vamonos!"],
};

console.log(blogPost2);

//TODO: Accessing properties in complex objects

console.log(blogPost1.author.name); //Nene
console.log(blogPost2.tags[2]); //html
console.log(blogPost1.tags.length); //5

//TODO: MINI CHALLENGE

//CHALLENGE 1

const car = {
  make: "Vauxhall",
  model: "Signum",
  colour: "Black",
};

console.table(car);

console.log(`Here is my ${car.make} ${car.model} for sale in ${car.colour}.`);

//CHALLENGE 2

const book = {
  title: "She Can Code",
  author: "Nene Nnoruka",
  pageQty: 144,
};

console.table(book);

console.log(
  `Here is "${book.title}", ${book.author}'s first book. At only ${book.pageQty} pages, it is a quick, easy and smooth read. Get yours now!`
);
