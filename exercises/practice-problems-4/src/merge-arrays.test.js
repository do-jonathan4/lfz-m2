/* global expect, sinon mergeArrays */

describe('mergeArrays(array1, array2)', function () {

  beforeEach(function () {
    expect(mergeArrays).to.be.a('function');
  });

  it('takes [1, 2, 3], [4, 5, 6] and returns [1, 2, 3, 4, 5, 6]', function () {
    var argument1 = noCheating([1, 2, 3]);
    var argument2 = noCheating([4, 5, 6]);
    var output = mergeArrays(argument1, argument2);
    expect(output).to.deep.equal([1, 2, 3, 4, 5, 6]);
  });

  it('takes ["hello"], ["world"] and returns ["hello", "world"]', function () {
    var argument1 = noCheating(['hello']);
    var argument2 = noCheating(['world']);
    var output = mergeArrays(argument1, argument2);
    expect(output).to.deep.equal(['hello', 'world']);
  });

  it('takes [], ["meow"] and returns ["meow"]', function () {
    var argument1 = noCheating([]);
    var argument2 = noCheating(['meow']);
    var output = mergeArrays(argument1, argument2);
    expect(output).to.deep.equal(['meow']);
  });

});

function noCheating(array) {
  sinon.stub(array, 'concat').throws(
    'No Cheating!',
    'Do not use Array.prototype.concat in your implementation!'
  );
  return array;
}
