/* global expect, getSalutation */

describe('getSalutation(hourOfDay)', function () {

  beforeEach(function () {
    expect(getSalutation).to.be.a('function');
  });

  it('returns string "good morning!" if hourOfDay falls between 0 and 11', function () {
    expect(getSalutation(8)).to.equal('good morning!');
  });

  it('returns string "good afternoon!" if hourOfDay falls between 12 and 16', function () {
    expect(getSalutation(13)).to.equal('good afternoon!');
  });

  it('returns string "good evening!" if hourOfDay falls between 17 and 20', function () {
    expect(getSalutation(19)).to.equal('good evening!');
  });

  it('returns string "good night!" if hourOfDay falls between 20 and 23', function () {
    expect(getSalutation(22)).to.equal('good night!');
  });

});
