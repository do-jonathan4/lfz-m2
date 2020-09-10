/* global expect, multiplyNumbers */

describe('multiplyNumbers(num1, num2)', function () {

  beforeEach(function () {
    expect(multiplyNumbers).to.be.a('function');
  });

  it('returns 25 when given 5 and 5 as arguments', function () {
    var output = multiplyNumbers(5, 5);
    expect(output).to.equal(25);
  });

  it('returns 15 when given 3 and 5 as arguments', function () {
    var output = multiplyNumbers(3, 5);
    expect(output).to.equal(15);
  });

  it('returns 25 when given 7 and 5 as arguments', function () {
    var output = multiplyNumbers(7, 5);
    expect(output).to.equal(35);
  });

});
