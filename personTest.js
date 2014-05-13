// Test Suite
suite('Person', function(){

  test('has a name', function(){
    Person.name = 'Joe';
    assert.equal('Joe', Person.name);
  });

  test('calculates age from year of birth', function(){
    var options = {
      yearOfBirth: 2000
    }
    assert.equal(14, Person.age(options));
  });
});
