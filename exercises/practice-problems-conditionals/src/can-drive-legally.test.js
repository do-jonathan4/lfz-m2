/* global expect, canDriveLegally */

describe('canDriveLegally(age)', function () {

  beforeEach(function () {
    expect(canDriveLegally).to.be.a('function');
  });

  it('returns boolean true if age is >= 16', function () {
    expect(canDriveLegally(46)).to.equal(true);
  });

  it('returns boolean false if age is < 16', function () {
    expect(canDriveLegally(8)).to.equal(false);
  });

});
