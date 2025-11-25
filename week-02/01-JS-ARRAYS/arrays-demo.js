//ARRAYS
//We use arrays to store multiple values at a time

//STRUCTURE
// 'let' or 'const' arrayName = ["value1",value2","value3"]
//The values do not have to be the same data type; but just because you can doesn't mean you should

//EXAMPLES:
let myFavouriteNaijaFoods = ["jollof", "plantain", "chocolate"];
let myFavouriteThings = ["sleep", true, 144, "Nnamdi"];

//There is no limit to the number of values (=items) you can have in an array.

//-------------

//ARRAY PROPERTIES:

//INDEX
//-> is a number that indicates the position of a specific item in an array, starting with '0'
//The syntax for this is as follows: arrayName [index value]

// e.g. in myFavouriteNaijaFoods, plantain = index 1
console.log(myFavouriteNaijaFoods[1]);

//e.g. in myFavouriteTHings, 144 = index 2
console.log(myFavouriteThings[2]);

//LENGTH
// -> a number that tells us the total number of utems in an array, starting with '1'
console.log(myFavouriteNaijaFoods.length); // length = 3
console.log(myFavouriteThings.length); // lenght = 4

//NOTE:
// Node.JS lets your console read JS without a browser (no HTML file needed)
// open terminal in the location you are with node apps.js to see JS w/o a browser

// (!) INDEX and LENGTH are both NUMBERS
