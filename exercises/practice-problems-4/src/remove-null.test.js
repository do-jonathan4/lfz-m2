/* global expect, removeNull */

  describe('removeNull(array)', function() {

    beforeEach(function() {
      expect(removeNull).to.be.a('function');
    })

    it(`takes ['a', null, 'b', null] as an argument and returns ['a', 'b']`, function () {
      var argument = ['a', null, 'b', null];
      var output = removeNull(argument);
      expect(output).to.deep.equal(['a', 'b']);
    })

    it(`takes [null, null, null, null, null] as an argument and returns []`, function () {
      var argument = [null, null, null, null, null];
      var output = removeNull(argument);
      expect(output).to.deep.equal([]);
    })
    it(`it takes [7, 8, null, 9] and return [7, 8, 9]`, function() {
      var argument = [7, 8, null, 9];
      var output = removeNull(argument);
      expect(output).to.deep.equal([7, 8, 9])
    })

  })
