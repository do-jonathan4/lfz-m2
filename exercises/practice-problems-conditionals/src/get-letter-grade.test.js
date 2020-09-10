/* global expect, getLetterGrade */

describe('getLetterGrade(numericGrade)', function () {

  beforeEach(function () {
    expect(getLetterGrade).to.be.a('function');
  });

  it('returns string "A" if numericGrade is >= 90', function () {
    expect(getLetterGrade(90)).to.equal('A');
  });

  it('returns string "B" if numericGrade falls between 80 and 89', function () {
    expect(getLetterGrade(84)).to.equal('B');
  });

  it('returns string "C" if numericGrade falls between 70 and 79', function () {
    expect(getLetterGrade(72)).to.equal('C');
  });

  it('returns string "D" if numericGrade falls between 60 and 69', function () {
    expect(getLetterGrade(67)).to.equal('D');
  });

  it('returns string "F" if numericGrade is < 60', function () {
    expect(getLetterGrade(7)).to.equal('F');
  });

});
