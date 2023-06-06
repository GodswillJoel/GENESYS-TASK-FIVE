// QUESTION 1
// Create a function that will be able to convert figures
//  from Fahrenheit to Celsius.

let fahr;

function toCelsius(fahr) {
  return (5 / 9) * (fahr - 32);
}
console.log(toCelsius(50));

// -----------------

// -----------------

// -----------------

// -----------------

// -----------------

// -----------------

// QUESTION2
// Create a function that will calculate the
// average of numbers in an array.

const arr = [1, 2, 3, 4, 5];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average);

// -----------------

// -----------------

// -----------------

// -----------------

// -----------------

// -----------------

// QUESTION 3
// Create a function that checks if a number, n is divisible
// by two numbers x and y.
// All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
  return n % x == 0 && n % y == 0 ? true : false;
}
console.log(isDivisible(6, 3, 6)); //true
console.log(isDivisible(14, 3, 2)); //false

// -----------------

// -----------------

// -----------------

// -----------------

// -----------------

// -----------------

// QUESTION 4;
// Create a function that will output
// the first 100 prime numbers.

let count = 0;
function primeNum() {
  let i, j;
  for (j = 2; j <= 100; j++) {
    for (i = 1; i <= j; i++) {
      if (j % i == 0) count++;
    }

    if (count == 2) console.log(j);
    count = 0;
  }
}

primeNum();

// -----------------

// -----------------

// -----------------

// -----------------

// -----------------

// -----------------

// QUESTION 5
// Create a function that will return
// a boolean specifying
// if a number is a prime number

function test_prime(num) {
  let test_prime = "";
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      test_prime = false;
    } else {
      test_prime = true;
    }
  }
  return test_prime;
}

console.log(test_prime(1));

// -----------------

// -----------------

// -----------------

// -----------------

// -----------------

// -----------------

// QUESTION 6
// Create a function that recieves an arrray
// of numbers of diverse numbers and
// returns an array  containing only positive numbers

var t = [-1, -2, -3, 5, 6, 1];
let positiveArr = [];
function posNeg() {
  t.forEach((item) => {
    if (item > 0) {
      positiveArr.push(item);
    }
  });

  console.log(positiveArr); // output [5, 6, 1]
}
posNeg();
// -----------------

// -----------------

// -----------------

// -----------------

// -----------------

// -----------------

// QUESTION 7
// Write a program that prints the numbers from 1 to 100.
// But for multiples of 3 prints "Fizz" instead of the number and
// for the multiples of 5 prints "Buzz".
// For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

function fizzBuzz(num) {
  console.log(num);
  for (var i = 0; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}

// console.log(fizzBuzz(100));

// -----------------

// -----------------

// -----------------

// -----------------

// -----------------

// -----------------

// QUESTION 8;
// The marketing team is spending way too much time typing in hashtags.
//  Let’s create a hashtag generator for them, our hashtag generator will
//  meet the following criteria;

// It must start with a hash symbol, #.

// Ignore all spaces in the input.

// All words must have their first letter capitalized.

// If the final result is going to be longer than 140 characters, it should return false.

// If the input or result is an empty string, it should return false.

function makeHashtag(str) {
  // start with a #hash symbol.

  let wordArray = str.split(" ").filter((char) => char !== "");
  let result = "#";

  //  If the input ==="" return false.

  if (wordArray.length === 0) {
    return false;
  }
  // first letter capitalized.
  // Ignore all spaces in the input.
  result =
    result +
    wordArray
      .map((word) => {
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        return capitalizedWord;
      })
      .join("");

  // If the final result > 140 characters, return false.

  if (result.length > 140) {
    return false;
  } else {
    return result;
  }
}
