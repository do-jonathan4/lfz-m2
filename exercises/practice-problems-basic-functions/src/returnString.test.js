

describe('returnString(string)', function () {

    beforeEach(function () {
        expect(returnString).to.be.a('function');
        });

        it('returns "pizza" when given "pizza" as an argument', function () {
            var output = returnString('pizza');
            expect(output).to.deep.equal('pizza');
        });

        it('returns "coder" when given "coder" as an argument', function () {
            var output = returnString('coder');
            expect(output).to.deep.equal('coder');
        });

        it('returns "builder" when given "builder" as an argument', function () {
            var output = returnString('builder');
            expect(output).to.deep.equal('builder');
        });

    });
