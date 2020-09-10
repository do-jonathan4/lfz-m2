/* global expect, isPositiveNumber */

describe('isPositiveNumber(input)', function () {

  beforeEach(function () {
    expect(isPositiveNumber).to.be.a('function');
  });

  it('returns boolean true if input is number greater than zero" ', function () {
    expect(isPositiveNumber(6)).to.equal(true);
  });

  it('returns boolean false if input is number less than zero" ', function () {
    expect(isPositiveNumber(-6)).to.equal(false);
  });

  it('returns boolean false if input is zero" ', function () {
    expect(isPositiveNumber(0)).to.equal(false);
  });

  it('returns boolean true if input is numeric string greater than zero" ', function () {
    expect(isPositiveNumber('6')).to.equal(true);
  });

  it('returns boolean false if input is numeric string less than or equal to zero" ', function () {
    expect(isPositiveNumber('-6')).to.equal(false);
  });

});
