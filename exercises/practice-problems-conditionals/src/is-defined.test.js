/* global expect, isDefined */

describe('isDefined(input)', function () {

  beforeEach(function () {
    expect(isDefined).to.be.a('function');
  });

  it('returns boolean true if input is numeric 1', function () {
    expect(isDefined(1)).to.equal(true);
  });

  it('returns boolean true if input is string "dog"', function () {
    expect(isDefined('dog')).to.equal(true);
  });

  it('returns boolean true if input is boolean true', function () {
    expect(isDefined(true)).to.equal(true);
  });

  it('returns boolean true if input is numeric 0', function () {
    expect(isDefined(0)).to.equal(true);
  });

  it('returns boolean true if input is boolean false', function () {
    expect(isDefined(false)).to.equal(true);
  });

  it('returns boolean true if input is null', function () {
    expect(isDefined(null)).to.equal(true);
  });

  it('returns boolean false if input is undefined', function () {
    expect(isDefined(undefined)).to.equal(false);
  });

});
