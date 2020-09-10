/* global expect, canDrinkAndDriveLegally */

describe('canDrinkAndDriveLegally(age)', function () {

  beforeEach(function () {
    expect(canDrinkAndDriveLegally).to.be.a('function');
  });

  it('returns boolean false regardless of age (drive safely!)', function () {
    expect(canDrinkAndDriveLegally(46)).to.equal(false);
  });

});
