suite('Fruit', function(){
  test('should store name', function(){
    var fruit = new Fruit();
    fruit.name = 'Banana'
    assert.equal('Banana', fruit.name);
  });

  test('should calculate calories', function(){
    var fruit = new Fruit();
    fruit.carbs = 30;
    assert.equal(90, fruit.calories())
  });
});
