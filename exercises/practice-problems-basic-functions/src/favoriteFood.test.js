/* global expect, favoriteFood */

describe('favoriteFood(food)', function () {

  beforeEach(function () {
    expect(favoriteFood).to.be.a('function');
  });

  it('returns "pizza is my absolute favorite food." when given "pizza" as an argument', function () {
    var output = favoriteFood('pizza');
    expect(output).to.equal('pizza is my absolute favorite food.');
  });

  it('returns "sushi is my absolute favorite food." when given "sushi" as an argument', function () {
    var output = favoriteFood('sushi');
    expect(output).to.equal('sushi is my absolute favorite food.');
  });

  it('returns "bbq is my absolute favorite food." when given "bbq" as an argument', function () {
    var output = favoriteFood('bbq');
    expect(output).to.equal('bbq is my absolute favorite food.');
  });

});
