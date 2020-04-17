/* global expect, filterOutStrings*/

    describe('filterOutStrings(array)', function() {

      beforeEach(function() {
        expect(filterOutStrings).to.be.a('function');
      })

      it(`takes [1, 2, 3, "x", "y", 10] as an argument and returns [1, 2, 3, 10]`, function() {
        var argument = [1, 2, 3, "x", "y", 10];
        var output = filterOutStrings(argument);
        expect(output).to.deep.equal([1, 2, 3, 10]);
      })

      it(`takes [1, "a", 2, "b", 3, "c"] as an argument and returns [1, 2, 3]`, function() {
        var argument = [1, "a", 2, "b", 3, "c"];
        var output = filterOutStrings(argument);
        expect(output).to.deep.equal([1, 2, 3]);
      })

      it(`takes [0, -32, "&@A", 64, "99", -128] as an argument and returns [0, -32, 64, -128]`, function() {
        var argument = [0, -32, "&@A", 64, "99", -128];
        var output = filterOutStrings(argument);
        expect(output).to.deep.equal([0, -32, 64, -128])
      })

    })
