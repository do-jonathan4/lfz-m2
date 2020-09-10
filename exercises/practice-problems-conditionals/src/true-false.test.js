/* global expect, trueOrFalse */

describe('trueOrFalse(input)', function () {

  beforeEach(function () {
    expect(trueOrFalse).to.be.a('function');
  });

  it('returns string "true" if input is boolean true', function () {
    expect(trueOrFalse(true)).to.equal('true');
  });

  it('returns string "false" if input is boolean false', function () {
    expect(trueOrFalse(false)).to.equal('false');
  });

  it('returns string "unknown" if input is numeric 1', function () {
    expect(trueOrFalse(1)).to.equal('unknown');
  });

  it('returns string "unknown" if input is numeric 0', function () {
    expect(trueOrFalse(0)).to.equal('unknown');
  });

  it('returns string "unknown" if input is string "cat"', function () {
    expect(trueOrFalse('cat')).to.equal('unknown');
  });

  it('returns string "unknown" if input is numeric 345', function () {
    expect(trueOrFalse(345)).to.equal('unknown');
  });

  it('returns string "unknown" if input is null', function () {
    expect(trueOrFalse(null)).to.equal('unknown');
  });

  it('returns string "unknown" if input is undefined', function () {
    expect(trueOrFalse(undefined)).to.equal('unknown');
  });

});
