
describe('findRightTriangleArea(base, height)', function () {

    beforeEach(function () {
        expect(findRightTriangleArea).to.be.a('function');
        });

        it('returns 250 when given 10 and 50 as arguments', function () {
            var output = findRightTriangleArea(10, 50);
            expect(output).to.equal(250);
        });

        it('returns 25 when given 5 and 10 as arguments', function () {
            var output = findRightTriangleArea(5, 10);
            expect(output).to.equal(25);
        });

        it('returns 600 when given 30 and 40 as arguments', function () {
            var output = findRightTriangleArea(30, 40);
            expect(output).to.equal(600);
        });

    });
