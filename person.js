var Person = {};

Person.age = function(options){
  var date = new Date();
  return date.getFullYear() - options.yearOfBirth;
}

