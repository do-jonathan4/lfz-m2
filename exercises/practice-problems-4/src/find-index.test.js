/* global expect, sinon findIndex */

describe('findIndex(array, value)', function () {

  beforeEach(function () {
    expect(findIndex).to.be.a('function');
  });

  it('takes [1, 5, 3] and 5, and returns 1', function () {
    var argument1 = noCheating([1, 5, 3]);
    var argument2 = 5;
    var output = findIndex(argument1, argument2);
    expect(output).to.equal(1);
  });

  it('takes [9, 8, 3] and 3 and returns 2', function () {
    var argument1 = noCheating([9, 8, 3]);
    var argument2 = 3;
    var output = findIndex(argument1, argument2);
    expect(output).to.equal(2);
  });
  it('takes [1, 2, 3] and 4 and returns -1', function () {
    var argument1 = noCheating([1, 2, 3]);
    var argument2 = 4;
    var output = findIndex(argument1, argument2);
    expect(output).to.equal(-1);
  });
});

function noCheating(array) {
  sinon.stub(array, 'indexOf').throws(
    'No Cheating!',
    'Do not use Array.prototype.indexOf in your implementation!'
  );
  return array;
}
