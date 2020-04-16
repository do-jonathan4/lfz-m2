

describe('addNumbers(num1, num2)', function () {

    beforeEach(function () {
        expect(addNumbers).to.be.a('function');
        });

        it('returns 27 when given 18 and 9 as arguments', function () {
            var output = addNumbers(18, 9);
            expect(output).to.equal(27);
        });

        it('returns 14 when given 5 and 9 as arguments', function () {
            var output = addNumbers(5, 9);
            expect(output).to.equal(14);
        });

        it('returns 30 when given 20 and 10 as arguments', function () {
            var output = addNumbers(20, 10);
            expect(output).to.equal(30);
        });

    });
