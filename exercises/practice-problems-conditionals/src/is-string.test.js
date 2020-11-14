/* global expect, isString */

describe('isString(input)', function () {

  beforeEach(function () {
    expect(isString).to.be.a('function');
  });

  it('returns boolean true if input is a string', function () {
    expect(isString('cat')).to.equal(true);
  });

  it('returns boolean false if input is null', function () {
    expect(isString(null)).to.equal(false);
  });

  it('returns boolean false if input is undefined', function () {
    expect(isString(undefined)).to.equal(false);
  });

  it('returns boolean false if input is a number', function () {
    expect(isString(6)).to.equal(false);
  });

  it('returns boolean false if input is a boolean', function () {
    expect(isString(true)).to.equal(false);
  });
});
