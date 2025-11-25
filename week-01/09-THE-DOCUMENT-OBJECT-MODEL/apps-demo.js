console.log("Hello world!");

console.log(document);
console.dir(document); // -> shows the directory of every element in the document; JS objects and their properties
//console.table(document);
//console.error ("There is an error")

console.log(console);
//everything in JS is an object!
//console is also an object & every action we perform is a method

//TODO: I want to replicate my HTML element using the DOM in JS
//CREATE AN ELEMENT -> need an action/method = createElement ("tagName")

document.createElement("div");
console.log(document.createElement("div"));

//to interact with this div, we can store it in a variable & use the variable name going forward
// We are naming our new HTML elements here using variable names
// so: const 'variableName' =(value is) the element we are referring to
const mainContainer = document.createElement("div");

//The DOM is useful because you want to build out the code structure once and then when new data comes in, it is automatically conformed to said structure. Another use case is that you may know what to create structurally but may now have the data to populate it (e.g. in the case of a user logging into a site). This is where JS excels.

//we will need to tell JS where the new object - div in this case - should go - it is currently not part of my HTML

//TODO: In my document, I want to create an element; specify what type of element and the use the correct HTML tag, #id or .class
//I will also need to store this in a variable.
//In this case heroImage is a variable name for the most important image or top image on the page.
document.createElement("img");
const heroImage = document.createElement("img");

//(!) We can now do this in one single step next time, with our h2 for example:
const imgTitle = document.createElement("h2");

//In real life we would not duplicate very HTML element in JS, but rather we'd create the body in HTML and fill in the rest using JS. The above is for demo purposes only to show that anything written in HTML can be done in JS using the DOM tools.

//If we console log the heroImage at this stage, the object will show in JS but it will be empty. We have to add the content.
console.log(heroImage);

//We are going to use properties to add content to our new HTML element
//For text-based elements e.g. headings, paragraphs, etc.; the easiest property to target -. textContent
//For images -> src, alt (just like in HTML, also exist in the DOM)
//Note: variable's value is being updated, not re-declared.

heroImage.src =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2023%2F07%2Fgojo-from-jjk-anime-against-a-2-way-split-of-gojo-from-the-manga.jpg&f=1&nofb=1&ipt=35ab58eb137a04c1ba5962b3e723876adafd88753402752ba5b53680c5da62b5";
heroImage.alt = "JJK Gojo";

//If we now re-log the heroImage, we will see it has a source and alternative text now.
console.log(heroImage);

//Now let's focus on the imgTitle ; which is text-based
imgTitle.textContent = "LIST OF SHIBUYA ARC PARTICIPANTS:";
console.log(imgTitle);

//IN SUMMARY: This is how you update the properties of elements that you have created already.

//TODO: We need to add the elements to our website -> APPEND THEM!
//Think of your structure in HTML: we have a div, an image and a h2 - they are not allat the same level.
//The image and the h2 sit inside the div; and the div is part of the body - we must replicate this.
//To do this, we need to append the image and the h2 to the div and then append the div to the body.
//we do this with: appendChild -> use this method to add our JS created elements to the DOM
//Note: Though there are different ways of appending; THIS IS THE MOST STRAIGHTFORWARD ONE!

//We first need to target the container - the image and the h2 need to go into the div
//In my mainContainer (the div), I want to append heroImage (image) and the imgTitle (h2)
mainContainer.appendChild(heroImage);
mainContainer.appendChild(imgTitle);
//The image and the title are now both added to the div

//We must now add the div to the body.
//In the document, more specifically in the body, I want to append the mainContainer (div)
document.body.appendChild(mainContainer);

//The new elements we created and appended in JS are now visible in JS - and should be indentical!
//The HTML and the DOM are the same thing in two different languaged.

//TODO - EXTRA: What if I want to style our new HTML elements?
//We can use a property and give it a value
heroImage.className = "hero-image";
//this class name can now be targeted in CSS to apply styling of choice - see CSS file -
//the attribute class will now be visible in the console also

//(!)REMEMBER: Until you append your element, you have to rely on the console to see any changes take effect!

//TODO - EXTRA: What if I want to append a new element, to an existing HTML element?
//We can select the existing element to be able to interact with it in JS
//Two tools for this - pick your preference:
//(1) getElementById() -> your existing element needs an id or you cannot use this method
//(2) querySelector() -> your existing element can be selected using the tag, .class or #id

//TODO: (!) RULE OF THUMB: build the main blocks of your website on HTML and build any dynamic elements in JS.
//e.g. I wish to add dynamic content to a footer - create the footer in HTML (static) and append dynamic elements in JS.

//First we select our footer using getElementById and store it in a variable.
//This footer is now identical to the footer in my HTML - I can now append elements to it

const myFooter = document.getElementById("my-footerID");
myFooter.appendChild(imgTitle);

//The part after '=' symbol will look slightly different for querySelector.
document.querySelector("#my-footerID");
//or
document.querySelector(".my-footerCLASS");

//Because querySelector has multiple options; we must specify what element we are using to select the HTML element (.class/#class/tag name)

//Both methods do the same thing - go by your preference.
//(!)Manny recommend getElementById (give elements unique IDs)

//TODO - EXTRA: I want to remove elements from the DOM
//use -> elementName.remove()
//this element will not be on the DOM anymore
heroImage.remove();

//REVIEW BELOW;
//imgTitle.remove();
//console.log(imgTitle);
