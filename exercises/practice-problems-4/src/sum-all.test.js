/* global expect, sumAll */

describe('sumAll(array)', function () {

  beforeEach(function () {
    expect(sumAll).to.be.a('function');
  });

  it('takes [1, 2, 3] and returns 6', function () {
    var argument = [1, 2, 3];
    var output = sumAll(argument);
    expect(output).to.equal(6);
  });

  it('takes [1200, 1, 0] and returns 1201', function () {
    var argument = [1200, 1, 0];
    var output = sumAll(argument);
    expect(output).to.equal(1201);
  });

  it('takes [999, 102, 234, 23, 90909, 25] and returns 92292', function () {
    var argument = [999, 102, 234, 23, 90909, 25];
    var output = sumAll(argument);
    expect(output).to.equal(92292);
  });

});
