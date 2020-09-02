/* global expect, sinon, includes */

describe('includes(array, value)', function() {

  beforeEach(function() {
    expect(includes).to.be.a('function');
  });

  it('finds "baz" in ["foo", "bar", "baz", "qux"]', function() {
    var array = noCheating(['foo', 'bar', 'baz', 'qux']);
    var output = includes(array, 'baz');
    expect(output).to.equal(true);
  });

  it('does not find "corge" in ["foo", "bar", "baz", "qux"]', function() {
    var array = noCheating(['foo', 'bar', 'baz', 'qux']);
    var output = includes(array, 'corge');
    expect(output).to.equal(false);
  });

  it('finds 2 in [1, 2, 3, 4, 5]', function() {
    var array = noCheating([1, 2, 3, 4, 5]);
    var output = includes(array, 2);
    expect(output).to.equal(true);
  });

  it('does not find 7 in [1, 2, 3, 4, 5]', function() {
    var array = noCheating([1, 2, 3, 4, 5]);
    var output = includes(array, 7);
    expect(output).to.equal(false);
  });

  it('finds false in [false, true, false, true]', function() {
    var array = noCheating([false, true, false, true]);
    var output = includes(array, false);
    expect(output).to.equal(true);
  });

  it('does not find null in [false, true, false, true]', function() {
    var array = noCheating([false, true, false, true]);
    var output = includes(array, null);
    expect(output).to.equal(false);
  });

  it('does not find anything in [] (empty array)', function() {
    var array = noCheating([]);
    expect(includes(array, true)).to.equal(false);
    expect(includes(array, 'foo')).to.equal(false);
    expect(includes(array, 7)).to.equal(false);
  });

});

function noCheating(array) {
  sinon.stub(array, 'includes').throws(
    'No Cheating!',
    'Do not use Array.prototype.includes in your implementation!'
  );
  return array;
}
