/* global expect, getStudentNames */


  describe('getStudentsNames(array)', function() {

    beforeEach(function() {
      expect(getStudentNames).to.be.a('function');
    });
    it(`takes [
      {name: "Robert"},
      {name: "Steve"},
      {name: "Ken"},
    ] as an argument and returns [
      "Robert",
      "Steve",
      "Ken"
    ]`, function() {
        var argument = [
          { name: "Robert" },
          { name: "Steve" },
          { name: "Ken" },
        ]
        var output = getStudentNames(argument);
        expect(output).to.deep.equal(["Robert", "Steve", "Ken"])
    });

    it(`takes [
      {name: "Shrek"},
      {name: "Donkey"}
    ] as an argument and returns [
      "Shrek",
      "Donkey"
    ]`, function() {
      var argument = [
        {name: "Shrek"},
        {name: "Donkey"}
      ]
      var output = getStudentNames(argument);
      expect(output).to.deep.equal(["Shrek", "Donkey"]);
    })

    it(`takes [] as an argument and returns []`, function() {
      var argument = [];
      var output = getStudentNames(argument);
      expect(output).to.deep.equal([]);
    })

    })
