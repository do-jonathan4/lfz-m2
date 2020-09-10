/* global expect, addEnding */

describe('addEnding(array, string)', function () {

  beforeEach(function () {
    expect(addEnding).to.be.a('function');
  });

  it('Adds "ly" to the end of each string in the array, and returns the new array', function () {
    var lyArr = ['clever', 'meek', 'hurried', 'nice'];
    var output = addEnding(lyArr, 'ly');
    expect(output).to.deep.equal(['cleverly', 'meekly', 'hurriedly', 'nicely']);
  });
  it('Adds "er" to the end of each string in the array, and returns the new array', function () {
    var erArr = ['new', 'pander', 'scoop'];
    var output = addEnding(erArr, 'er');
    expect(output).to.deep.equal(['newer', 'panderer', 'scooper']);
  });
  it('Adds "ing" to the end of each string in the array, and returns the new array', function () {
    var ingArr = ['bend', 'sharpen', 'mean'];
    var output = addEnding(ingArr, 'ing');
    expect(output).to.deep.equal(['bending', 'sharpening', 'meaning']);
  });
  it('Adds "ity" to the end of each string in the array, and returns the new array', function () {
    var ityArr = ['equal', 'abnormal', 'civil'];
    var output = addEnding(ityArr, 'ity');
    expect(output).to.deep.equal(['equality', 'abnormality', 'civility']);
  });

});
