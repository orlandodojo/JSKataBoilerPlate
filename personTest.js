// Test Setup
mocha.setup('tdd');
assert = chai.assert;

// Test Suite

suite('Person', function(){
  test('should have a name', function(){
    var person = new Person();

    person.name = 'Joe';
    assert.equal('Joe', person.name);
  });

  test('should calculate age', function(){
    var person = new Person();

    person.yearOfBirth = 2000;
    assert.equal(14, person.age());
  });
});
