/* global expect, isTruthy */

describe('isTruthy(input)', function () {

  beforeEach(function () {
    expect(isTruthy).to.be.a('function');
  });

  it('returns boolean true if input is numeric 1', function () {
    expect(isTruthy(1)).to.equal(true);
  });

  it('returns boolean true if input is string "dog"', function () {
    expect(isTruthy('dog')).to.equal(true);
  });

  it('returns boolean true if input is boolean true', function () {
    expect(isTruthy(true)).to.equal(true);
  });

  it('returns boolean false if input is numeric 0', function () {
    expect(isTruthy(0)).to.equal(false);
  });

  it('returns boolean false if input is boolean false', function () {
    expect(isTruthy(false)).to.equal(false);
  });

  it('returns boolean false if input is undefined', function () {
    expect(isTruthy(undefined)).to.equal(false);
  });

  it('returns boolean false if input is an empty string', function () {
    expect(isTruthy('')).to.equal(false);
  });

  it('returns boolean false if input is null', function () {
    expect(isTruthy(null)).to.equal(false);
  });

});
