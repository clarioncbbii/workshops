//OBJECTS
//storing multiple items with a label

//STRUCTURE
//declare with a variable name
//each key-value pair is a property in our object
//keys are unique
//these properties only exist within the object (=BLOCK SCOPE)
//the values can be different data types
//this object has three properties

const objectName = {
  key: "value",
  key: "value",
  key: "value",
};

//TODO: EXAMPLE
//This is a nested object - object inside another object

const city = {
  cityName: "Leicester",
  population: 1000000,
  transportOption: "train station",
  nicePlaceToLive: true,
  cityColours: ["red", "white", "blue"],
  companies: [
    {
      companyName: "Tech Educators",
      staffNumber: 3000,
      fields: ["Education", "Tech"],
    },
    { companyName: "Mama's Kitchen", staffNumber: 10, fields: ["Hospitality"] },
  ],
};

//(!) CONSISTENCY IN NAMING CONVENTION AND DATA STRUCTURE IS VERY IMPORTANT

//ACCESS THE DATA INSIDE
//To access the value of a property -> dot notation

//TODO: Access the property cityName in the city object
city.cityName;
console.log(city.cityName); //Leicester

//TODO: Access the property staffNumber in the first item of the companies property
city.companies[0].staffNumber;
console.log(city.companies[0].staffNumber); //3000

//(!) EUREKA
// Works just like the DOM; which is a document OBJECT model!

//TODO: Add a property county to the city object
//We can also add a new property using DOT notation

city.county = "Leicestershire";
console.log(city); //it now shows the county

//TODO: Update an existing value inside an object
city.county = "East Midlands fakeCounty";
console.log(city);

//An array is a complex data type so it is not always easily printed for you
//In this case, it will simply be shown as [array]

//------------------------------------------------//

//OBJECT METHODS
//-> A function inside an object

//EXAMPLE
//In the console object, there is a property called log with a value of a function
//We have used some methods already before today:

console.log(); // method = log
document.createElement("h1"); // method = createElement

const staff1 = {
  staffName: "Nene",
  staffRole: "Assistant",
  staffGreeting: "Buenas tardes!",
};

//to make the greeting more interactive, we can make it a function

const staff2 = {
  staffName: "Nene",
  staffRole: "Assistant",
  staffGreeting: function () {
    console.log("Hawaiyu!");
  },
};

//only exists in block scope
//I use the key to call the method since the value is an anonymous function
staff2.staffGreeting();

//another way to do it, where we use a parameter
const staff3 = {
  staffName: "Nene",
  staffRole: "Assistant",
  staffGreeting: function (greeting) {
    console.log(greeting);
  },
  getstaffName: function () {
    return staff3.staffName;
  },
};

staff3.staffGreeting("Hiya!");

console.log(staff3.getstaffName());

//here  the return keyword takes an element from block scope to global scope

//(!) IMPORTANT:
//the return is the end of the execution of the function
//any code after that will not be read (colour is faded)
