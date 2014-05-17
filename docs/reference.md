# JavaScript Quick Reference

This is a quick reference for the JavaScript language.

```javascript
// Printing a result to the console
console.log('Printing a result');

// Creating a function
function speak(){
  return 'Hello, students!';
}

console.log(speak());

// Creating a function with an argument
function speakMessage(message){
  return 'Message: ' + message;
}
console.log(speakMessage('Welcome to the Coding Dojo'));

// Creating a function with two arguments
function add(a, b){
  return a + b;
}

console.log('The result is: ' + add(3,2));

// creating an object
var Person = {};

// Assigning a static property
Person.name = 'Joe';

console.log(Person.name);

// Assigning a function to a property
Person.speak = function(){
  return 'Hello';
}

console.log(Person.speak());

// Assigning a function with a single argument to a property
Person.greet = function(name){
  return "Hello " + name + " !";
}

console.log(Person.greet('Joana'));

// Assigning a function with an object as argument to a property
Person.age = function(options){
  var date = new Date(); // Date is a built-in JavaScript object
  var year = date.getFullYear();
  return year - options.yearOfBirth;
}

console.log(Person.age({ yearOfBirth: 2000 }));
```
