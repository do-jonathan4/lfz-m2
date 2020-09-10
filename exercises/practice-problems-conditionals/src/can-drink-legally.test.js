/* global expect, canDrinkLegally */

describe('canDrinkLegally(age)', function () {

  beforeEach(function () {
    expect(canDrinkLegally).to.be.a('function');
  });

  it('returns boolean true if age is >= 21', function () {
    expect(canDrinkLegally(46)).to.equal(true);
  });

  it('returns boolean false if age is < 21', function () {
    expect(canDrinkLegally(8)).to.equal(false);
  });

});
