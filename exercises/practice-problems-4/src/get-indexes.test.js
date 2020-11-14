/* global expect, getIndexes */

describe('getIndexes(array)', function () {

  beforeEach(function () {
    expect(getIndexes).to.be.a('function');
  });

  it('Takes ["meow", "woof", "squeak", "shazoo"] as an argument, and returns the indexes of the array in a new array', function () {
    var argument = ['meow', 'woof', 'squeak', 'shazoo'];
    var output = getIndexes(argument);
    expect(output).to.deep.equal([0, 1, 2, 3]);
  });

  it('Takes ["hello", "world"] as an argument, and returns the indexes of the array in a new array', function () {
    var argument = ['hello', 'world'];
    var output = getIndexes(argument);
    expect(output).to.deep.equal([0, 1]);
  });

  it('Takes an empty array as argument, and return the indexes of the array in a new array', function () {
    var argument = [];
    var output = getIndexes(argument);
    expect(output).to.deep.equal([]);
  });

  it('Takes [1, 2, 3] as an argument, and returns the indexes of the array in a new array', function () {
    var argument = [1, 2, 3];
    var output = getIndexes(argument);
    expect(output).to.deep.equal([0, 1, 2]);
  });
});
