function Person(){

  this.age = function(){
    var date = new Date();
    return date.getFullYear() - this.yearOfBirth;
  };

}

