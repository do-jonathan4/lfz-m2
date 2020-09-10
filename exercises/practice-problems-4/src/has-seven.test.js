/* global expect, hasSeven */

describe('hasSeven(arr)', function () {

  beforeEach(function () {
    expect(hasSeven).to.be.a('function');
  });

  it('takes an argument of [1, 2, 3, 4, 5, 6, 7] and returns true', function () {
    var argument = [1, 2, 3, 4, 5, 6, 7];
    var output = hasSeven(argument);
    expect(output).to.equal(true);
  });
  it('takes an argument of [77, 200, 700, \'7\'] and returns false', function () {
    var argument = [77, 200, 700, '7'];
    var output = hasSeven(argument);
    expect(output).to.equal(false);
  });
  it('takes an argument of [] and returns false', function () {
    var argument = [];
    var output = hasSeven(argument);
    expect(output).to.equal(false);
  });
});
