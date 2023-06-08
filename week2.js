// PROBLEM 1: PROMISES

// The eventual success or failure of an async operation with it's resulting value
// 3 states: pending, fulfilled, and rejected
// Pros: Integrated error handling and more oragnized control of async logic
// Cons: Only one object can be returned and we can't return multiple arguments

// EX 1
const myPromise = new Promise((resolve, reject) => {
  let a = 100 + 100;
  if (a == 200) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

myPromise
  .then((message) => {
    console.log(`This is a: ${message}.`); // Console logs a message if resolved
  })
  .catch((message) => {
    console.log(`This is a: ${message}.`); // Console logs a message if rejected
  });

  // EX 2

  // Function that returns a Promise to check if a number is even
function isEven(number) {
  return new Promise((resolve, reject) => {
    if (typeof number === 'number') {
      if (number % 2 === 0) {
        resolve(true); // Resolve the Promise with true if the number is even
      } else {
        resolve(false); // Resolve the Promise with false if the number is odd
      }
    } else {
      reject(new Error('Invalid number')); // Reject the Promise with an error for invalid input
    }
  });
}

// Using the Promise
const number = 7;

isEven(number)
  .then(result => {
    console.log(`${number} is even: ${result}`);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });


// ================================================

// PROBLEM 2: CALLBACK HELL

// Multiple callbacks are nested in one another
// Makes the code difficult to read and understand
// Solutions: Promises and async/await

asyncOperation1(function (error, result1) {
  // operation 1 is ran with error and result1
  if (error) {
    // if an error is found, the next operation runs
  } else {
    asyncOperation2(function (error, result2) {
      // operation 2 is ran with error and result2
      if (error) {
        // if an error is found, the next operation runs
      } else {
        asyncOperation3(function (error, result3) {
          // operation 3 is ran with error and result3
          if (error) {
          } else {
          } // processes result 3
        });
      }
    });
  }
});

// ================================================

// PROBLEM 3: THIS KEYWORD

// refers to properties in an object (works very much the same in vanilla JS)
// the binding of the this keyword is determined by the enclosing scope in arrow functions
// the binding of the this keyword is determined by the object that called the function

const person = { // object created
    name: "Kellis Somerville", 
    thisInAnArrow: () => { // arrow function with this keyword
        console.log(`Hello, my name is ${this.name}.`);
},
    thisInARegular () { // regular function with this keyword
        console.log(`Hello, my name is ${this.name}.`);
    }
};

person.thisInAnArrow(); // prints "Hello, my name is Kellis Somerville"
person.thisInARegular(); // prints "Hello, my name is"

// ================================================

// PROBLEM 4: FILTER METHOD

const numbers = [48, 20, 18, 7, 12, 9, 8, 10, 12, 96, 3, 36, 51]; // array of numbers
const filteredNumbers = numbers.filter(
  (numbers) => numbers % 3 == 0 && numbers % 6 == 0 && numbers % 9 !== 0
); // filter used to create a new array with numbers divisible by 3 and 6, but not 9
console.log(filteredNumbers); // console logs the new array with numbers that match the filter

// ================================================

// PROBLEM 5: ASYNC/AWAIT

// Allows you to write async code in a sync-like way
// Gets rid of the use for handling callbacks
// Pros: Reading and simplicity
// Cons: Handling multiple promises and limited browser support

// Function that returns a Promise with a delay
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// Asynchronous function using async/await
async function processData() {
  console.log("Processing started..");
  
  try {
    await delay(2000); // Wait for 2000 milliseconds
    
    console.log("Data processing completed!");
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

// Calling the async function
processData();