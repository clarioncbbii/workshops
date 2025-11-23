console.log("Hello World!");

//SELECT ELEMENT
//Select the body element using the document.querySelector method.
//Log the element to the console.

//NOTE: We use const b/c we want this to be an unchanging variable
//(!) ALWAYS USE CONST UNLESS NEEDED!

const body = document.querySelector("body");
console.log(body);

const h1 = document.querySelector("h1");
console.log(h1);

//MODIFY ELEMENT e.g. change the text content of an element using textContent selector
h1.textContent = "Hawayu Gozaimasu!";

//Now for an image
const image = document.querySelector("img");
console.log(image);

image.src =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.bandainamcoent.eu%2Fhigh%2Fjujutsu-kaisen%2Fjujutsu-kaisen-cursed-clash%2F00-page-setup%2Fjjk-news-announcement.jpg&f=1&nofb=1&ipt=fa80703c125dcf61297e977101dd1b2c8180752540da48060d62240fd7065f97";

//ADDING ELEMENTS
//we must first create the element we want and then add it to the body by appending it
const h2 = document.createElement("h2");
console.log(h2);

h2.textContent = "Yuji 'Catch these hands' Itadori!";
document.body.appendChild(h2); //appendChild = selector to add a new element to a parent element

//REMOVING ELEMENTS
h2.remove();

//TODO: MINI CHALLENGE - CREATE A LIST WITH DOM MANIPULATION
const list = document.querySelector("ul");
console.log(list);
document.body.appendChild(list);

//To target the body property we need to access it through the document; not directly
//iIf we select the body element directly, you can append an element directly to it

//RULE: If the element exists in HMTL you need to select it to interact with it in JS

//Select by -> const 'variableName' = document.querySelector("xxx")
//XXX represents the HTML tag, class or ID
//We have to tell it what we are trying to select (just like in CSS so, id starts with #, class starts with ., and selector has to be the exact selector name)

const listItem1 = document.querySelector(".listItem1");
console.log(listItem1);
document.body.appendChild(listItem1);

const listItem2 = document.querySelector(".listItem2");
console.log(listItem2);
document.body.appendChild(listItem2);

const listItem3 = document.querySelector(".listItem3");
console.log(listItem3);
document.body.appendChild(listItem3);

const listItem4 = document.querySelector(".listItem4");
console.log(listItem4);
document.body.appendChild(listItem4);

const listItem5 = document.querySelector(".listItem5");
console.log(listItem5);
document.body.appendChild(listItem5);
