// EXERCISE 1
// The function below takes in an object, and based on the object returns either
// 'hey amy', or 'hey arnold'.
// On line 23, I want the to console log 'hey amy', but when run in node it only
// console-logs 'hey arnold'.
// Why is the function currently returning 'hey arnold', and what can we do to
// produce the desired output?
// Note: the function should always take an object as an argument, and should
// simply return a string.


// Your explanation:
// In JS, if objects are compared to one another they compare the instances
// of the objects, not the contents of the objects.  Therefore, line 18 will never
// return true because no two different objects can ever be equal.  To solve this,
// we simply need to compare the 'name' property of each object to one another.  If the
// strings are equal, we will get the desired output.


function greet (person) {
  if (person.name == 'amy' ) {
    return 'hey amy';
  } else {
    return 'hey arnold';
  }
}

console.log(greet({ name: 'amy' }));


// EXERCISE 2
// The function below runs a loop based on the value of i.
// I want this function to set 4 Timeouts, and after 0 seconds
// console log "0, 1, 2, 3." Instead, the loop currently returns "4, 4, 4, 4."
// Why is the function returning 4s instead of counting up, and what
// can we do to produce the desired output?
// Note: the function should still loop, should always create 4
// setTimeouts (ie: maintain its' asynchronicity), and always console-log based
// on the value of i.

// Your explanation:
// This problem deals with JS asynchronicity and variable scoping.  Because setTimeout is
// an async operation, none of the console.log callbacks will be invoked until after
// all synchronous code has finished executing.  That means the loop will finish
// with the value of i being 4, and all the Timeouts set, before the first timeout
// executes.  Because var is globally scoped to its' lexical environment, the console.log
// of variable i that occurs when the setTimeout callbacks are dequeued will all log the
// same global i variable value.  In this case: 4.  There are two possible solutions to this
// problem: the first (and simpler) is to change the var keyword to let in the loop
// declaration.  This will block scope the value of i for each iteration of the loop
// allowing the consol.log to close over that specific value and not reference a
// globally changing value.  The second solution is to use an immediately invoked function
// expression (IIFE).  This will re-scope the value of i for each invocation of the
// function and rather than closing over the global i variable, allow the console.log to
// close over a local i variable from the function's arguments.

// Solution 1:
for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0);
}

// Solution 2:
for (var i = 0; i < 4; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 0);
  })(i);
}

// EXERCISE 3
// The code below sets an object with the properties of name and sayName to the
// variable dog.  It then assigns the sayName property of dog to the variable sayName
// and finally invokes sayName.  I want sayName() to return 'doggo', but currently it
// throws an error.
// Why is sayName() throwing an error, and what can we do to get the desired output?
// Note: dog should stay a POJO, do not turn it into a class.  sayName should
// stay a function so that it can be invoked on line 62

// Your explanation:
// The solution to this problem deals with context binding.  The sayName property
// of dog is a function, and that function is being stored in the variable sayName
// which is then invoked function-style. The context of a function-style invocation
// will always be undefined (and in node invoking this will throw an error). The
// solution is to use .bind() to bind the context of 'this' to dog when we assign
// the sayName variable.

let dog = {
  name: 'doggo',
  sayName () {
    console.log(this.name);
  }
};

let sayName = dog.sayName.bind(dog);

sayName();


// EXERCISE 4
// The code below establishes a Dog constructor function, defines the .bark
// method, then instantiates a new Dog.  On line 83, I want fido.bark() to return
// 'fido says woof', but instead I get an error.  Why is this error thrown, and
// how can we change the code to get the desired output?

// Your explanation:
// This solution has to do with method definitions on the the class of an object,
// vs the prototype of the object.  Because the .bark method is defined on the class
// constructor function instead of the object's prototype, instances of the class
// do not have access to the .bark method.  There are 3 potential solutions: only 2
// are acceptable answers.  The first is to bind the context of 'this' when we invoke
// .bark, but this only solves the immediate problem. It does not give access to .bark
// for other instances of the Dog class.  The second solution is to define .bark on
// Dog.prototype.  This is the prefered solution.  The third solution is to refactor
// the Dog class defintion to ES6 syntax and define .bark as a method within the class.
// this soultion is acceptable but not preferred.

// Solution 1: (Bad solution!)
function Dog (name) {
  this.name = name;
}

Dog.bark = function () {
  console.log(this.name + ' says woof');
};

let fido = new Dog('fido');

fido.bark.bind(fido);

// Solution 2: (Preferred solution!)
function Dog (name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + ' says woof');
};

let fido = new Dog('fido');

fido.bark();

// Solution 3: (Acceptable solution!)

class Dog {
  constructor(name){
    this.name = name;
  }
  
  bark () {
    console.log(this.name + ' says woof');
  }
}

let fido = new Dog('fido');

fido.bark();
