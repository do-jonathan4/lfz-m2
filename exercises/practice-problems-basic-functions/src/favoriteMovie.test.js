/* global expect, favoriteMovie */

describe('favoriteMovie(movie)', function () {

  beforeEach(function () {
    expect(favoriteMovie).to.be.a('function');
  });

  it('returns "My favorite movie is Tron:Legacy." when given "Tron:Legacy" as an argument', function () {
    var output = favoriteMovie('Tron:Legacy');
    expect(output).to.equal('My favorite movie is Tron:Legacy.');
  });

  it('returns "My favorite movie is Jaws." when given "Jaws" as an argument', function () {
    var output = favoriteMovie('Jaws');
    expect(output).to.equal('My favorite movie is Jaws.');
  });

  it('returns "My favorite movie is Almost Famous." when given "Almost Famous" as an argument', function () {
    var output = favoriteMovie('Almost Famous');
    expect(output).to.equal('My favorite movie is Almost Famous.');
  });

});
