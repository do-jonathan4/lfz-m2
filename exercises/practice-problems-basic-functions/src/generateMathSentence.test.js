/* global expect, generateMathSentence */

describe('generateMathSentence(num1, num2)', function () {

  beforeEach(function () {
    expect(generateMathSentence).to.be.a('function');
  });

  it('returns "The sum of 10 and 50 is 60." when given 10 and 50 as arguments', function () {
    var output = generateMathSentence(10, 50);
    expect(output).to.deep.equal('The sum of 10 and 50 is 60.');
  });

  it('returns "The sum of 13 and 24 is 37." when given 13 and 24 as arguments', function () {
    var output = generateMathSentence(13, 24);
    expect(output).to.deep.equal('The sum of 13 and 24 is 37.');
  });

  it('returns "The sum of 72 and 19 is 91." when given 72 and 19 as arguments', function () {
    var output = generateMathSentence(72, 19);
    expect(output).to.deep.equal('The sum of 72 and 19 is 91.');
  });

});
