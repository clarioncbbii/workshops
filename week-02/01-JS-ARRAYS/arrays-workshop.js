console.log("Hawaiyu!");

//Create an array called blogPosts with a list of blog post titles.
const blogPosts = [
  "My first blog post",
  "My second blog post",
  "My third blog post",
];

//Log the array to the console.
console.log(blogPosts);

//You can access items in an array using the index of the item in the array. The index starts at 0, so the first item in the array is at index 0, the second item is at index 1, and so on.
console.log(blogPosts[0]);
console.log(blogPosts[1]);
console.log(blogPosts[2]);

//ADDING ITEMS
// You can add items to an array by assigning a value to a new index, although this isn’t done a lot.

blogPosts[3] = "My fourth blog post";
console.log(blogPosts[3]);

//NOTE - mixing data value types
//Arrays in JavaScript can contain different data types (including other arrays) - in practicality, this isn’t done that often.
const randomList = ["important reminder", 42, ["another array"], true];
console.log(randomList);

//MINI CHALLENGE
myFavouriteFoods = ["jollof", "egusi", "puffpuff"];
myFavouriteColours = ["red", "purple", "gold", "black"];
myFavouriteNumbers = [7, 12, 144];

console.log(myFavouriteFoods);
console.log(myFavouriteColours);
console.log(myFavouriteNumbers);

console.log(myFavouriteFoods[1]);
console.log(myFavouriteColours[3]);
console.log(myFavouriteNumbers[0]);
