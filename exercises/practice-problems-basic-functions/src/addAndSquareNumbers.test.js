
describe('addAndSquareNumbers(num1, num2)', function () {

    beforeEach(function () {
        expect(addAndSquareNumbers).to.be.a('function');
        });

        it('returns 100 when given 5 and 5 as arguments', function () {
            var output = addAndSquareNumbers(5, 5);
            expect(output).to.equal(100);
        });

        it('returns 81 when given 4 and 5 as arguments', function () {
            var output = addAndSquareNumbers(4, 5);
            expect(output).to.equal(81);
        });

        it('returns 144 when given 6 and 6 as arguments', function () {
            var output = addAndSquareNumbers(6, 6);
            expect(output).to.equal(144);
        });

    });
