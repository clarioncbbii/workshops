//TODO: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

//* Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// returns --> "(123) 456-7890"

// The returned format must be correct in order to complete the challenge.
// Don't forget the space after the closing brackets!
// If you finish, try to find an alternative solution!

//* Solution:
//using the random numbers in the integers array, I want to return a phone number (US-style)
//numbers can be duplicated, but there must be braces, a space and the dash

const int = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(int) {
  //return (`(###) ###-####`)
  return `(${int[1]}${int[0]}${int[3]}) ${int[4]}${int[5]}${int[6]}-${int[7]}${int[8]}${int[9]}${int[0]}`;
}

console.log(createPhoneNumber(int));

// try the above using rarray.join and array.prototype.toString() method
//--> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
